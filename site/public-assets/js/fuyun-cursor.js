(function () {
  'use strict';

  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduceMotion) return;
  if (document.getElementById('fuyun-legacy-cursor')) return;

  var style = document.createElement('style');
  style.id = 'fuyun-legacy-cursor-style';
  style.textContent = `
    @media (hover: hover) and (pointer: fine) {
      .fuyun-legacy-cursor {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2147483000;
        width: 56px;
        height: 56px;
        pointer-events: none;
        opacity: 0;
        transform: translate3d(-120px, -120px, 0) scale(.92);
        transition: opacity .18s ease, transform .16s ease;
        will-change: transform, opacity;
      }
      .fuyun-legacy-cursor.is-visible { opacity: .96; }
      .fuyun-legacy-cursor.is-active .fuyun-legacy-cursor__badge { transform: scale(1.12); }
      .fuyun-legacy-cursor__badge {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 38% 26%, rgba(255,255,255,.78), transparent 34%),
          linear-gradient(145deg, #fbf5e8 0%, #f7efdb 68%, #eadbb8 100%);
        border: 2px solid #2E5E3A;
        box-shadow: 0 12px 26px rgba(46,94,58,.18), 0 4px 10px rgba(84,64,28,.10);
        transition: transform .18s ease;
      }
      .fuyun-legacy-cursor__badge::before {
        content: '';
        position: absolute;
        inset: 4px;
        border-radius: 50%;
        border: 1px solid rgba(185,154,91,.92);
      }
      .fuyun-legacy-cursor__badge::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 22px;
        width: 18px;
        height: 18px;
        transform: translateX(-50%);
        border-radius: 50% 50% 48% 48%;
        border: 1.8px solid #2E5E3A;
        border-bottom-color: transparent;
        opacity: .88;
      }
      .fuyun-legacy-cursor__face {
        position: absolute;
        left: 50%;
        top: 24px;
        width: 22px;
        height: 18px;
        transform: translateX(-50%);
      }
      .fuyun-legacy-cursor__face::before,
      .fuyun-legacy-cursor__face::after {
        content: '';
        position: absolute;
        top: 4px;
        width: 11px;
        height: 15px;
        border: 1.6px solid #2E5E3A;
        border-top: 0;
        opacity: .9;
      }
      .fuyun-legacy-cursor__face::before {
        left: 1px;
        border-right: 0;
        border-radius: 0 0 0 14px;
        transform: rotate(-15deg);
      }
      .fuyun-legacy-cursor__face::after {
        right: 1px;
        border-left: 0;
        border-radius: 0 0 14px 0;
        transform: rotate(15deg);
      }
      .fuyun-legacy-cursor__text {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        gap: 14px;
        padding-top: 6px;
        color: #2E5E3A;
        font-family: 'Noto Serif TC', 'Microsoft JhengHei', serif;
        text-align: center;
        line-height: 1;
      }
      .fuyun-legacy-cursor__main {
        font-size: 16px;
        font-weight: 900;
        letter-spacing: .01em;
      }
      .fuyun-legacy-cursor__sub {
        color: #8d7138;
        font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: .18em;
        transform: translateX(.08em);
      }
    }
  `;

  var cursor = document.createElement('div');
  cursor.id = 'fuyun-legacy-cursor';
  cursor.className = 'fuyun-legacy-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<div class="fuyun-legacy-cursor__badge"><div class="fuyun-legacy-cursor__face"></div><div class="fuyun-legacy-cursor__text"><span class="fuyun-legacy-cursor__main">50+</span><span class="fuyun-legacy-cursor__sub">傳承</span></div></div>';

  var x = -120;
  var y = -120;
  var targetX = -120;
  var targetY = -120;
  var raf = null;
  var visible = false;

  function render() {
    x += (targetX - x) * 0.28;
    y += (targetY - y) * 0.28;
    cursor.style.transform = 'translate3d(' + (x - 28) + 'px,' + (y - 28) + 'px,0)' + (cursor.classList.contains('is-active') ? ' scale(1.02)' : ' scale(1)');
    raf = requestAnimationFrame(render);
  }

  function shouldHideOnTarget(target) {
    if (!target || !target.closest) return false;
    return !!target.closest('header, nav, .site-header, .site-nav, .tile-image, figure, img, video, canvas, iframe, .map-frame, .wealth-map, .btn, a, button, input, select, textarea, summary, label');
  }

  function isClickable(target) {
    if (!target || !target.closest) return false;
    return !!target.closest('a, button, input, select, textarea, summary, label, [role="button"], [onclick], .cursor-pointer');
  }

  function show(target) {
    if (shouldHideOnTarget(target)) {
      hide();
      return;
    }
    if (visible) return;
    visible = true;
    cursor.classList.add('is-visible');
  }

  function hide() {
    visible = false;
    cursor.classList.remove('is-visible', 'is-active');
  }

  document.head.appendChild(style);
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function (event) {
    targetX = event.clientX;
    targetY = event.clientY;
    show(event.target);
    cursor.classList.toggle('is-active', visible && isClickable(event.target));
  }, { passive: true });

  document.addEventListener('mouseover', function (event) {
    if (shouldHideOnTarget(event.target)) {
      hide();
      return;
    }
    cursor.classList.toggle('is-active', isClickable(event.target));
  }, { passive: true });

  document.addEventListener('mouseleave', hide, { passive: true });
  window.addEventListener('blur', hide, { passive: true });

  raf = requestAnimationFrame(render);
  window.addEventListener('beforeunload', function () {
    if (raf) cancelAnimationFrame(raf);
  });
})();
