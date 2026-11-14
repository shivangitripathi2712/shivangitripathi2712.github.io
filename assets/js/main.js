(function () {
  'use strict';

  /* Nav: border on scroll + mobile menu */
  var nav = document.getElementById('nav');
  var links = document.getElementById('navLinks');
  var burger = document.getElementById('burger');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  /* Scrollspy: highlight the section being read */
  var navAs = links.querySelectorAll('a');
  var sections = Array.prototype.map.call(navAs, function (a) { return document.querySelector(a.getAttribute('href')); });
  function spy() {
    var y = window.scrollY + window.innerHeight * 0.3;
    var current = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.length - 1;
    navAs.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  /* Toast */
  var toast = document.getElementById('toast'), tTimer;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(tTimer);
    tTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  /* Cite: copy BibTeX */
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(); } catch (e) { rej(e); }
      document.body.removeChild(ta);
    });
  }
  document.querySelectorAll('[data-cite]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var bib = document.getElementById(btn.getAttribute('data-cite')).innerHTML
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
      copy(bib.trim()).then(function () {
        btn.textContent = 'Copied ✓'; btn.classList.add('done');
        say('BibTeX copied to clipboard');
        setTimeout(function () { btn.textContent = 'Cite'; btn.classList.remove('done'); }, 2000);
      }, function () { say('Could not copy. Please try again.'); });
    });
  });

  /* Research pop-ups */
  document.querySelectorAll('[data-open]').forEach(function (card) {
    card.addEventListener('click', function () {
      var d = document.getElementById(card.getAttribute('data-open'));
      if (d && d.showModal) d.showModal();
    });
  });
  document.querySelectorAll('dialog.modal').forEach(function (d) {
    d.querySelector('.close').addEventListener('click', function () { d.close(); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });   /* click outside */
    d.querySelectorAll('a[href^="#"]').forEach(function (a) { a.addEventListener('click', function () { d.close(); }); });
  });
})();
