/* ==========================================================================
   Ember Roasting Co. — site scripts
   1. Mobile nav toggle
   2. Dynamic time-of-day greeting (home page)
   3. Contact form validation
   4. Footer year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  setFooterYear();
  initNavToggle();
  initGreeting();
  initContactForm();
});

/* ---------- Footer year ---------- */
function setFooterYear() {
  var el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Mobile nav toggle ---------- */
function initNavToggle() {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu when a link is chosen (useful on mobile)
  links.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close the menu on Escape for keyboard users
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

/* ---------- Dynamic greeting ---------- */
function initGreeting() {
  var el = document.getElementById('timeGreeting');
  if (!el) return;

  var hour = new Date().getHours();
  var greeting = 'Welcome';
  if (hour < 5) {
    greeting = 'Roasting overnight';
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  el.textContent = greeting + ' \u2014 the roaster is warm';
}

/* ---------- Contact form validation ---------- */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var status = document.getElementById('formStatus');

  var validators = {
    name: function (value) {
      if (value.trim().length === 0) return 'Enter your name.';
      if (value.trim().length < 2) return 'Name looks too short.';
      return '';
    },
    email: function (value) {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim().length === 0) return 'Enter your email.';
      if (!pattern.test(value.trim())) return 'Enter a valid email address.';
      return '';
    },
    reason: function (value) {
      if (value === '') return 'Choose a reason for contact.';
      return '';
    },
    message: function (value) {
      if (value.trim().length === 0) return 'Enter a message.';
      if (value.trim().length < 10) return 'Say a little more (10+ characters).';
      return '';
    }
  };

  function validateField(fieldName) {
    var input = form.elements[fieldName];
    var errorEl = document.getElementById(fieldName + 'Error');
    var fieldWrap = document.getElementById(fieldName + 'Field');
    var message = validators[fieldName](input.value);

    if (message) {
      errorEl.textContent = message;
      fieldWrap.classList.add('has-error');
    } else {
      errorEl.textContent = '';
      fieldWrap.classList.remove('has-error');
    }
    return message === '';
  }

  // Validate on blur for immediate feedback
  Object.keys(validators).forEach(function (fieldName) {
    form.elements[fieldName].addEventListener('blur', function () {
      validateField(fieldName);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var results = Object.keys(validators).map(validateField);
    var allValid = results.every(Boolean);

    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields before sending.';
      status.className = 'form-status failure';
      return;
    }

    // No backend is connected in this demo; simulate a successful send.
    status.textContent = 'Thanks! Your message has been sent — we\'ll reply within two business days.';
    status.className = 'form-status success';
    form.reset();
  });
}
