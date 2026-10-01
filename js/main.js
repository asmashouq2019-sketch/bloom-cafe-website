(() => {
  'use strict';

  // Mobile navigation
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu-nav');
  const setNav = open => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });

  // Accessible menu tabs
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', e => {
      const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
      if (e.key in map) { e.preventDefault(); select(tabs[(map[e.key] + tabs.length) % tabs.length]); }
    });
  });

  // Booking form (front-end only – nothing is sent anywhere)
  const form = document.getElementById('booking-form');
  const success = document.getElementById('form-success');
  const dateInput = form.elements.date;
  const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateInput.min = today.toISOString().slice(0, 10);

  const rules = {
    name: v => v.trim().length >= 2 || 'Please enter your name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email address.',
    date: v => !!v || 'Please choose a date.',
    time: v => !!v || 'Please choose a time.'
  };
  const check = name => {
    const field = form.elements[name];
    const result = rules[name](field.value);
    const err = document.getElementById('err-' + name);
    err.textContent = result === true ? '' : result;
    field.setAttribute('aria-invalid', String(result !== true));
    if (result !== true) field.setAttribute('aria-describedby', err.id); else field.removeAttribute('aria-describedby');
    return result === true;
  };
  Object.keys(rules).forEach(n => form.elements[n].addEventListener('blur', () => check(n)));

  form.addEventListener('submit', e => {
    e.preventDefault();
    success.hidden = true;
    const results = Object.keys(rules).map(check);
    if (results.includes(false)) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    const d = new Date(form.elements.date.value + 'T00:00');
    const pretty = d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    success.textContent = `Thanks, ${form.elements.name.value.trim()}! (Demo) Your request for ${form.elements.guests.value} on ${pretty} at ${form.elements.time.value} would be sent here. No data was stored or transmitted.`;
    success.hidden = false;
    form.reset();
    form.elements.guests.value = '2';
  });
})();
