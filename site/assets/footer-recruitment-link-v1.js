(function () {
  'use strict';

  function addFooterRecruitmentLink() {
    var footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.footer-recruitment-link')) return;

    if (!document.querySelector('link[data-footer-recruitment-style]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'public-assets/css/footer-recruitment-link.css';
      stylesheet.setAttribute('data-footer-recruitment-style', '');
      document.head.appendChild(stylesheet);
    }

    var link = document.createElement('a');
    link.className = 'footer-recruitment-link';
    link.href = '/teacher-recruitment.html';
    link.textContent = '退休專業延續計畫';

    var host = footer.querySelector('.wrap, .container, .inner') || footer;
    host.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFooterRecruitmentLink, { once: true });
  } else {
    addFooterRecruitmentLink();
  }
}());
