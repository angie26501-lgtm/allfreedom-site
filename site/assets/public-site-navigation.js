(function () {
  'use strict';

  const routes = {"ilan-care.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"宜蘭長照","level":1},"assistive-device-loan-yilan.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"輔具不用急著買","level":2},"family-stroke-discharge-care-next-steps.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"家人中風後的下一步","level":2},"rehabilitation-and-life-rebuilding.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"復健與生活重建","level":2},"care-needs-someone-to-walk-with-you.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"長照需要有人一起走","level":2},"ilan-care-how-to-apply.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"長照怎麼申請","level":2},"ilan-care-which-service.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"我家適合哪種服務","level":2},"ilan-care-cost-gap.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"補助與自費缺口","level":2},"ilan-care-siblings-money.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"手足分工與費用","level":2},"lifecycle-retirement.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休規劃","level":1},"retirement-asset-structure.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休資產怎麼安排","level":2},"lifecycle-retirement-life.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休後怎麼安心使用資產","level":2},"retirement-calculator-fuyun.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休缺口初步試算","level":2},"obs-retire-new-voyage.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休是另一段航程","level":2},"exam-retire-first-year.html":{"section":"退休規劃","sectionUrl":"lifecycle-retirement.html","title":"退休第一年常見錯誤","level":2},"legacy-planning.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"家庭傳承","level":1},"legacy-family-conversation.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"重要的事提早說清楚","level":2},"legacy-aging-support-network.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"晚年支持網絡","level":2},"legacy-digital-assets.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"數位資料怎麼整理","level":2},"inheritance-house.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"房子傳承常見迷思","level":2},"family-assets-care-responsibility.html":{"section":"家庭傳承","sectionUrl":"legacy-planning.html","title":"資產與照顧責任","level":2},"articles.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"文章專欄","level":1},"yilan-scam-prevention-family-financial-safety.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"宜蘭防詐與家庭財務安全","level":2},"insurance-payment-frequency-cost.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"保費繳別的長期成本","level":2},"education-fund-family-transparency.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"孩子問起教育基金，你答得出來嗎","level":2},"education-fund-quiz.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"教育基金六題測驗","level":2},"children-ai-algorithm-independent-thinking.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"AI 時代孩子的判斷與選擇","level":2},"advisor-notes-three-minutes-decision-hours-preparation.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"財顧筆記：三分鐘決定背後的準備","level":2},"travel-insurance-protection-checkup.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"出國保險保障健檢","level":2},"advisor-notes-three-years-money-grew.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"財顧筆記：三年，她的錢慢慢長大了","level":2},"travel-insurance-same-receipt-different-claim.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"同一張住宿單據為何理賠不同","level":2},"advisor-notes-how-long-will-you-stay.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"財顧筆記：我怎麼知道你會做多久","level":2},"advisor-notes-let-me-help-you-review.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"財顧筆記：當我說我幫你看","level":2},"travel-insurance-overseas-medical-bill.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"旅平險與海外醫療帳單","level":2},"financial-golden-triangle-60-30-10.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"理財金三角 60／30／10","level":2},"financial-literacy-asset-allocation.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"為什麼理財第一步首重資產配置","level":2},"financial-literacy-emergency-fund-first.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"需要用錢先從預備金開始","level":2},"detective.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"人生金錢偵探社","level":2},"koguti.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"人生考古題","level":2},"comic.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"胖胖幣財商漫畫","level":2},"observatory.html":{"section":"文章專欄","sectionUrl":"articles.html","title":"財顧芸觀察室","level":2},"mature-assessment-center.html":{"section":"熟齡檢測","sectionUrl":"mature-assessment-center.html","title":"熟齡檢測中心","level":1},"financial-needs-check.html":{"section":"熟齡檢測","sectionUrl":"mature-assessment-center.html","title":"財務議題導航","level":2},"financial-blueprint-quiz.html":{"section":"熟齡檢測","sectionUrl":"mature-assessment-center.html","title":"人生財務藍圖","level":2},"asset-checkup.html":{"section":"熟齡檢測","sectionUrl":"mature-assessment-center.html","title":"資產健診","level":2},"asset-checkup-lite.html":{"section":"熟齡檢測","sectionUrl":"mature-assessment-center.html","title":"漏財體質快篩","level":2},"about-angie.html":{"section":"認識財顧芸","sectionUrl":"about-angie.html","title":"認識財顧芸","level":1},"about-angie-profile.html":{"section":"認識財顧芸","sectionUrl":"about-angie.html","title":"財顧芸的經歷與故事","level":2},"fee-based-financial-advisor-value.html":{"section":"認識財顧芸","sectionUrl":"about-angie.html","title":"收費財務顧問的價值","level":2},"care-readiness-check.html":{"section":"宜蘭長照","sectionUrl":"ilan-care.html","title":"長照家庭準備檢測","level":2},"consultation.html":{"section":"預約聊聊","sectionUrl":"consultation.html#booking","title":"預約聊聊","level":1}};

  const file = location.pathname.split('/').filter(Boolean).pop() || '';
  const current = routes[file];
  if (!current) return;

  const legacyHeader = document.querySelector('body > header.af-site-header, body > header.sticky, body > header.site-header, body > header.topbar, body > header.public-topbar');
  if (legacyHeader) legacyHeader.classList.add('af-original-site-header');

  document.querySelectorAll('.crumb, nav[aria-label="麵包屑"]').forEach(function (node) {
    node.classList.add('af-original-site-header');
  });

  const items = [["宜蘭長照","ilan-care.html"],["退休規劃","lifecycle-retirement.html"],["家庭傳承","legacy-planning.html"],["文章專欄","articles.html"],["財富航海地圖闖關","adventure/"]];


  const sectionItems = {"宜蘭長照":[["輔具不用急著買","assistive-device-loan-yilan.html"],["家人中風後的下一步","family-stroke-discharge-care-next-steps.html"],["復健與生活重建","rehabilitation-and-life-rebuilding.html"],["長照需要有人一起走","care-needs-someone-to-walk-with-you.html"],["長照怎麼申請","ilan-care-how-to-apply.html"],["我家適合哪種服務","ilan-care-which-service.html"]],"退休規劃":[["退休資產怎麼安排","retirement-asset-structure.html"],["退休後怎麼安心使用資產","lifecycle-retirement-life.html"],["退休缺口初步試算","retirement-calculator-fuyun.html"],["退休是另一段航程","obs-retire-new-voyage.html"],["退休第一年常見錯誤","exam-retire-first-year.html"]],"家庭傳承":[["重要的事提早說清楚","legacy-family-conversation.html"],["晚年支持網絡","legacy-aging-support-network.html"],["數位資料怎麼整理","legacy-digital-assets.html"],["房子傳承常見迷思","inheritance-house.html"],["資產與照顧責任","family-assets-care-responsibility.html"]],"文章專欄":[["宜蘭防詐與家庭財務安全","yilan-scam-prevention-family-financial-safety.html"],["保費繳別的長期成本","insurance-payment-frequency-cost.html"],["孩子問起教育基金，你答得出來嗎","education-fund-family-transparency.html"],["教育基金六題測驗","education-fund-quiz.html"],["AI 時代孩子的判斷與選擇","children-ai-algorithm-independent-thinking.html"],["財顧筆記：三分鐘決定背後的準備","advisor-notes-three-minutes-decision-hours-preparation.html"]],"熟齡檢測":[["財務議題導航","financial-needs-check.html"],["人生財務藍圖","financial-blueprint-quiz.html"],["資產健診","asset-checkup.html"],["漏財體質快篩","asset-checkup-lite.html"]],"認識財顧芸":[["財顧芸的經歷與故事","about-angie-profile.html"],["收費財務顧問的價值","fee-based-financial-advisor-value.html"]]};
  const header = document.createElement('header');
  header.className = 'af-unified-header';
  header.innerHTML = '<div class="af-unified-header__inner">' +
    '<a class="af-unified-header__brand" href="index.html" aria-label="回到財顧芸首頁">財顧芸</a>' +
    '<button class="af-unified-header__toggle" type="button" aria-expanded="false" aria-controls="afUnifiedNav">選單</button>' +
    '<nav class="af-unified-header__nav" id="afUnifiedNav" aria-label="主要導覽">' +
    items.map(function (item) {
      const active = item[0] === current.section ? ' aria-current="page"' : '';
      return '<a href="' + item[1] + '"' + active + '>' + item[0] + '</a>';
    }).join('') +
    '<a class="af-unified-header__cta" href="consultation.html#booking">預約聊聊</a>' +
    '</nav></div>';

  document.body.insertBefore(header, document.body.firstChild);

  const path = document.createElement('nav');
  path.className = 'af-page-path';
  path.setAttribute('aria-label', '目前位置');
  const crumbs = current.level === 1
    ? '<a href="index.html">首頁</a><span aria-hidden="true">／</span><span aria-current="page">' + current.title + '</span>'
    : '<a href="index.html">首頁</a><span aria-hidden="true">／</span><a href="' + current.sectionUrl + '">' + current.section + '</a><span aria-hidden="true">／</span><span aria-current="page">' + current.title + '</span>';
  const back = current.level === 2
    ? '<a class="af-page-path__back" href="' + current.sectionUrl + '">← 回到' + current.section + '</a>'
    : '<a class="af-page-path__back" href="index.html">← 回到首頁</a>';
  path.innerHTML = '<div class="af-page-path__crumbs">' + crumbs + '</div>' + back;
  header.insertAdjacentElement('afterend', path);


  const children = sectionItems[current.section];
  if (children && children.length) {
    const sectionNav = document.createElement('nav');
    sectionNav.className = 'af-section-nav';
    sectionNav.setAttribute('aria-label', current.section + '主題選單');
    sectionNav.innerHTML = children.map(function (item) {
      const itemFile = item[1].split('/').pop().split('#')[0];
      const active = itemFile === file ? ' aria-current="page"' : '';
      return '<a href="' + item[1] + '"' + active + '>' + item[0] + '</a>';
    }).join('');
    path.insertAdjacentElement('afterend', sectionNav);
  }
  const toggle = header.querySelector('.af-unified-header__toggle');
  const nav = header.querySelector('.af-unified-header__nav');
  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '關閉' : '選單';
  });
})();

(function(){var s=document.createElement("script");s.src="assets/hanji-back.js";s.defer=true;document.head.appendChild(s);})();
