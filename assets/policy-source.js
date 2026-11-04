(function () {
  'use strict';

  var sources = {
    'ltc-apply': {
      label: '衛福部 1966 長照專區｜申請長照服務',
      url: 'https://1966.gov.tw/ltc/cp-6533-70777-207.html'
    },
    'ltc-payment': {
      label: '衛福部 1966 長照專區｜給付、額度與部分負擔',
      url: 'https://1966.gov.tw/ltc/cp-6533-70777-207.html'
    },
    'ltc-2026': {
      label: '衛福部｜長照 3.0 給付辦法修正重點',
      url: 'https://www.mohw.gov.tw/cp-7177-82811-1.html'
    },
    'yilan-ltc': {
      label: '宜蘭縣長期照護服務管理所｜申請方式及流程',
      url: 'https://ltc.ilshb.gov.tw/cp.aspx?n=16276'
    },
    'foreign-caregiver': {
      label: '勞動部｜80 歲免評聘僱外籍家庭看護問答',
      url: 'https://fw.wda.gov.tw/wda-employer/home/activity/2c95efb398624bf5019862cb5d920060'
    },
    'foreign-caregiver-options': {
      label: '勞動部｜家庭看護工申請與多元免評資格',
      url: 'https://fw.wda.gov.tw/wda-employer/home/extra-mid-level/index/subCategory/2c95efb38e5d7562018e5f710c9d03a1?locale=zh'
    },
    'ltc-residential': {
      label: '衛福部 1966 長照專區｜住宿式服務使用者補助方案',
      url: 'https://1966.gov.tw/ltc/cp-6457-69925-207.html'
    }
  };

  if (!document.querySelector('[data-policy-source]')) return;

  var style = document.createElement('style');
  style.textContent = [
    '.policy-source-notice,.policy-source-foot{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans TC",sans-serif;box-sizing:border-box}',
    '.policy-source-notice{margin:1.25rem 0 .75rem;padding:.8rem 1rem;border-left:4px solid #9E7A34;border-radius:0 10px 10px 0;background:#fff8e7;color:#5f4a25;font-size:.88rem;line-height:1.7;font-weight:700}',
    '.policy-source-foot{margin:.75rem 0 1.5rem;padding:.8rem 1rem;border:1px solid rgba(94,122,104,.22);border-radius:10px;background:#f6faf7;color:#4d6259;font-size:.8rem;line-height:1.7}',
    '.policy-source-foot__links{display:flex;flex-wrap:wrap;gap:.25rem .7rem;margin-bottom:.25rem}',
    '.policy-source-foot a{color:#285b48;text-decoration:underline;text-underline-offset:3px;font-weight:700}',
    '.policy-source-foot__meta{display:flex;flex-wrap:wrap;gap:.4rem .85rem;align-items:center}',
    '.policy-source-foot button{border:0;background:transparent;color:#285b48;padding:0;text-decoration:underline;text-underline-offset:3px;font:700 inherit;cursor:pointer}',
    '@media print{.policy-source-foot button{display:none}}'
  ].join('');
  document.head.appendChild(style);

  function displayDate(value) {
    var parts = String(value || '').split('-');
    if (parts.length !== 3) return value || '未標示';
    return Number(parts[0]) + ' 年 ' + Number(parts[1]) + ' 月 ' + Number(parts[2]) + ' 日';
  }

  document.querySelectorAll('[data-policy-source]').forEach(function (block) {
    if (block.dataset.policyDecorated === 'true') return;
    block.dataset.policyDecorated = 'true';

    var notice = document.createElement('aside');
    notice.className = 'policy-source-notice';
    notice.setAttribute('role', 'note');
    notice.textContent = '長照政策與給付標準會隨政策調整，建議直接向官方查詢最新資訊';
    block.parentNode.insertBefore(notice, block);

    var keys = String(block.dataset.policySource || '').trim().split(/\s+/).filter(Boolean);
    var links = keys.map(function (key) { return sources[key]; }).filter(Boolean);
    var foot = document.createElement('aside');
    foot.className = 'policy-source-foot';

    var linksBox = document.createElement('div');
    linksBox.className = 'policy-source-foot__links';
    var label = document.createElement('strong');
    label.textContent = '官方資料來源：';
    linksBox.appendChild(label);
    links.forEach(function (source) {
      var link = document.createElement('a');
      link.href = source.url;
      link.textContent = source.label;
      linksBox.appendChild(link);
    });
    if (!links.length) linksBox.appendChild(document.createTextNode('請撥 1966 查詢'));

    var meta = document.createElement('div');
    meta.className = 'policy-source-foot__meta';
    var checked = document.createElement('span');
    checked.textContent = '查核日期：' + displayDate(block.dataset.policyChecked);
    var report = document.createElement('button');
    report.type = 'button';
    report.setAttribute('data-feedback-open', '');
    report.setAttribute('data-feedback-type', '政策或補助資料需要更新');
    var heading = block.querySelector('h2, h3, h4');
    report.setAttribute('data-feedback-message', '我想回報「' + (heading ? heading.textContent.trim() : document.title) + '」的政策或補助資料：');
    report.textContent = '資料有更新？問題回報';
    meta.appendChild(checked);
    meta.appendChild(report);

    foot.appendChild(linksBox);
    foot.appendChild(meta);
    block.parentNode.insertBefore(foot, block.nextSibling);
  });
}());
