/* 財富航海群島 → 文章「回到航海群島」連結
 * 只有從財富航海群島點過來的讀者才會看到（網址帶 ?from=hanji，或來源頁是航海群島）。
 * 一般讀者直接看文章，不會出現任何東西。
 */
(function () {
  'use strict';
  var base = 'https://angie26501-lgtm.github.io/business/money-detective/';
  var NAMES = { S1: '迷霧港', S2: '初航島', S3: '燈塔', S4: '體質島', S5: '解鎖之門', S6: '掌舵島', S7: '遠洋航線', S8: '幸福藍海', ADV: '冒險島' };
  var KEY = 'hanji_back_isl';
  var isl = '';
  var siteKey = 'hanji_back_site';
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('from') === 'hanji') {
      isl = (q.get('isl') || 'S1').toUpperCase();
      var site = q.get('hanjiSite') === 'adventure' ? 'adventure' : '';
      if (site) base = '/adventure/';
      sessionStorage.setItem(siteKey, site);
    } else if (!document.referrer.includes('/business/money-detective/') && sessionStorage.getItem(siteKey) === 'adventure') {
      base = '/adventure/';
    } else if (document.referrer.includes('/business/money-detective/')) {
      sessionStorage.removeItem(siteKey);
    }
    if (!isl && document.referrer.indexOf('/business/money-detective/') > -1) {
      isl = /adventure\.html/.test(document.referrer) ? 'ADV' : ((document.referrer.split('#')[1] || 'S1').toUpperCase());
    }
    if (isl) sessionStorage.setItem(KEY, isl); else isl = sessionStorage.getItem(KEY) || '';
  } catch (e) {}
  if (!isl || !NAMES[isl]) return;

  var url = isl === 'ADV' ? base + 'adventure.html' : base + 'index.html#' + isl.toLowerCase();
  var name = NAMES[isl];

  function run() {
    if (document.getElementById('hanjiBack')) return;
    var css = document.createElement('style');
    css.textContent =
      '#hanjiBack{max-width:980px;margin:28px auto;padding:18px 20px;border-radius:18px;background:#fff8ec;border:2px solid #e8c88f;text-align:center;font-family:inherit;box-sizing:border-box}' +
      '#hanjiBack b{display:block;font-size:18px;color:#1f5a4a;margin-bottom:4px}#hanjiBack p{margin:0 0 12px;color:#6b6250;font-size:15px}' +
      '#hanjiBack a{display:inline-block;background:#2f7a5a;color:#fff;text-decoration:none;font-weight:700;border-radius:999px;padding:10px 22px}' +
      '#hanjiPill{position:fixed;left:14px;bottom:14px;z-index:9999;background:#1f3a44;color:#fff;text-decoration:none;font-size:14px;font-weight:700;border-radius:999px;padding:8px 14px;box-shadow:0 4px 12px rgba(0,0,0,.2)}' +
      '@media(max-width:640px){#hanjiBack{margin:20px 14px}#hanjiPill{font-size:13px;padding:7px 12px}}';
    document.head.appendChild(css);

    var box = document.createElement('div');
    box.id = 'hanjiBack';
    box.innerHTML = '<b>⚓ 看完了？回到財富航海群島</b><p>繼續你的航程，回到〈' + name + '〉把這一關完成。</p><a href="' + url + '">回到' + name + ' →</a>';
    var main = document.querySelector('main') || document.querySelector('article');
    var foot = document.querySelector('footer');
    if (main) main.appendChild(box);
    else if (foot && foot.parentNode) foot.parentNode.insertBefore(box, foot);
    else document.body.appendChild(box);

    var pill = document.createElement('a');
    pill.id = 'hanjiPill';
    pill.href = url;
    pill.textContent = '⚓ 回航海群島';
    document.body.appendChild(pill);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
