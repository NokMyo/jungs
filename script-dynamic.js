const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const gameData = {
  'jeongtaeil-1': {
    title: '정태일의 모험 1',
    kicker: 'Series 01',
    version: 'v1.3.2',
    visual: 'game-visual-1',
    category: 'RPG',
    file: 'downloads/jeongtaeil-adventure-1-v1.3.2.zip',
    body: '<p>작은 마을에서 시작되는 첫 번째 모험입니다. 전설의 유적, 잊힌 검, 마을 사람들의 부탁을 따라가며 정태일의 이야기가 시작됩니다.</p><ul><li>클래식 RPG 진행</li><li>초반 튜토리얼과 마을 퀘스트</li><li>가벼운 실행 환경</li></ul>'
  },
  'jeongtaeil-2': {
    title: '정태일의 모험 2',
    kicker: 'Series 02',
    version: 'v1.2.8',
    visual: 'game-visual-2',
    category: 'Adventure',
    file: 'downloads/jeongtaeil-adventure-2-v1.2.8.zip',
    body: '<p>잃어버린 기억과 숨겨진 진실을 찾아 더 넓은 지역으로 떠나는 두 번째 이야기입니다. 동료 시스템과 장비 성장이 강화되었습니다.</p><ul><li>새로운 지역과 동료</li><li>강화된 장비 시스템</li><li>저장 호환성 개선</li></ul>'
  },
  'jeongtaeil-3': {
    title: '정태일의 모험 3',
    kicker: 'Series 03',
    version: 'v1.1.0',
    visual: 'game-visual-3',
    category: 'Finale',
    file: 'downloads/jeongtaeil-adventure-3-v1.1.0.zip',
    body: '<p>모든 이야기가 하나로 이어지는 최종장입니다. 어두운 던전, 보스전, 선택에 따른 결말 연출을 중심으로 구성했습니다.</p><ul><li>최종 던전과 보스전</li><li>스토리 회수 중심 구성</li><li>최적화 업데이트 적용</li></ul>'
  },
  'jung-1': {
    title: "'정'의 모험 1",
    kicker: 'Side Story 01',
    version: 'v1.0.5',
    visual: 'game-visual-4',
    category: 'Story',
    file: 'downloads/jung-adventure-1-v1.0.5.zip',
    body: '<p>새로운 주인공 ‘정’의 일상형 모험입니다. 평화로운 마을에서 작은 선택들이 큰 변화를 만들어갑니다.</p><ul><li>생활형 콘텐츠</li><li>낚시와 수집 요소</li><li>차분한 분위기의 외전</li></ul>'
  },
  'jung-2': {
    title: "'정'의 모험 2",
    kicker: 'Side Story 02',
    version: 'v1.0.3',
    visual: 'game-visual-5',
    category: 'Mystery',
    file: 'downloads/jung-adventure-2-v1.0.3.zip',
    body: '<p>더 깊어진 이야기와 미스터리 요소를 중심으로 한 외전 후속작입니다. 잊었던 진실이 서서히 모습을 드러냅니다.</p><ul><li>미스터리 중심 전개</li><li>심화된 캐릭터 관계</li><li>밤 지역 탐험</li></ul>'
  },
  sutaegong: {
    title: '수태공 연애 시뮬레이션',
    kicker: 'Romance Simulation',
    version: 'v1.0.1',
    visual: 'game-visual-6',
    category: 'Visual Novel',
    file: 'downloads/sutaegong-love-simulation-v1.0.1.zip',
    body: '<p>수태공을 중심으로 펼쳐지는 선택형 연애 시뮬레이션입니다. 선택지에 따라 이벤트, 호감도, 엔딩이 달라집니다.</p><ul><li>선택지 기반 진행</li><li>호감도와 이벤트 분기</li><li>가볍게 즐기는 외전 콘텐츠</li></ul>'
  }
};

const patchData = {
  'patch-132': ['정태일의 모험 1 업데이트', 'Patch Note v1.3.2', '<p>UI 가독성을 개선하고 초반 이벤트 보상 밸런스를 조정했습니다.</p><ul><li>인벤토리 정렬 버튼 추가</li><li>초반 전투 난이도 완화</li><li>일부 대사 오탈자 수정</li><li>저사양 PC에서 프레임 안정화</li></ul>'],
  'patch-128': ['정태일의 모험 2 업데이트', 'Patch Note v1.2.8', '<p>새로운 장비와 보조 퀘스트가 추가되었고 저장 파일 호환성이 강화되었습니다.</p><ul><li>희귀 장비 4종 추가</li><li>퀘스트 추적 표시 개선</li><li>세이브 파일 로딩 오류 수정</li></ul>'],
  'patch-110': ['정태일의 모험 3 업데이트', 'Patch Note v1.1.0', '<p>최종 던전의 난이도와 연출을 조정하고 전체 로딩 속도를 개선했습니다.</p><ul><li>보스 패턴 경고 표시 추가</li><li>엔딩 연출 타이밍 개선</li><li>맵 전환 속도 최적화</li></ul>'],
  'patch-105': ["'정'의 모험 1 업데이트", 'Patch Note v1.0.5', '<p>생활 콘텐츠와 낚시 시스템을 보강한 업데이트입니다.</p><ul><li>낚시 보상 테이블 조정</li><li>마을 주민 대화 추가</li><li>도감 달성률 표시 개선</li></ul>']
};

const noticeData = {
  'notice-renewal': ['웹사이트 리뉴얼 안내', '공지', '<p>공식 웹사이트가 새로운 디자인으로 리뉴얼되었습니다. 게임 소개, 패치노트, 스크린샷, 커뮤니티 뉴스, 빠른 다운로드를 한곳에서 확인할 수 있습니다.</p>'],
  'notice-event': ['5월 커뮤니티 이벤트 당첨자 발표', '이벤트', '<p>팬아트 공모전과 플레이 후기 이벤트 당첨자를 발표했습니다. 자세한 보상 지급 일정은 커뮤니티 공지에서 확인할 수 있습니다.</p>'],
  'notice-maintenance': ['정기 점검 안내', '점검', '<p>5월 21일 10:00부터 12:00까지 공식 다운로드 서버 점검이 진행됩니다. 점검 중에는 일부 다운로드가 일시적으로 제한될 수 있습니다.</p>'],
  'notice-privacy': ['개인정보처리방침 변경 안내', '공지', '<p>문의 접수와 이벤트 참여 항목에 대한 개인정보 처리 기준을 더 명확하게 정리했습니다.</p>'],
  'notice-lovepatch': ['수태공 연애 시뮬레이션 패치 안내', '업데이트', '<p>v1.0.1 패치로 일부 이벤트 분기와 저장 오류가 수정되었습니다.</p>']
};

const newsData = {
  devlog: ['개발 일지 #24', '개발자 노트', '<p>다음 업데이트에서는 퀘스트 기록, 도감 UI, 다운로드 페이지 개선을 우선 적용할 예정입니다. 시리즈별 아카이브 페이지도 준비 중입니다.</p>'],
  'fanart-event': ['모험가 팬아트 공모전', '커뮤니티 이벤트', '<p>커뮤니티에서 접수된 팬아트 중 우수작을 선정했습니다. 선정작은 추후 공식 갤러리 영역에 소개됩니다.</p>'],
  'fanart-month': ['이달의 팬아트', '팬아트 소개', '<p>4월의 팬아트는 정태일의 모험 2를 주제로 한 작품들이 특히 많았습니다.</p>'],
  anniversary: ['정태일의 모험 6주년 기념', '시리즈 기념', '<p>정태일의 모험 시리즈가 6주년을 맞았습니다. 함께해주신 모든 모험가 여러분 감사합니다.</p>']
};

const featureData = {
  world: ['풍부한 세계관', 'Game Feature', '<p>정태일의 모험은 작은 마을에서 시작해 고대 유적, 설산, 밤의 도시, 숨겨진 성까지 이어지는 세계를 다룹니다.</p>'],
  pixel: ['픽셀 아트의 매력', 'Game Feature', '<p>레트로한 픽셀 감성과 현대적인 UI를 섞어, 추억은 살리고 플레이는 편하게 느껴지도록 구성했습니다.</p>'],
  play: ['편리한 플레이', 'Game Feature', '<p>자동 저장, 퀘스트 로그, 버전별 패치노트, 빠른 다운로드 같은 편의 기능을 중심으로 사이트를 구성했습니다.</p>'],
  collect: ['다양한 수집 요소', 'Game Feature', '<p>장비, 도감, 이벤트 보상, 숨겨진 업적 같은 요소를 통해 시리즈를 오래 즐길 수 있게 설계했습니다.</p>']
};

const screenshots = [
  { title: '초원 마을', desc: '정태일의 모험 1의 시작 지역', className: 'screen-1' },
  { title: '여관 내부', desc: '동료와 정보를 얻는 휴식 공간', className: 'screen-2' },
  { title: '숲과 다리', desc: '밝은 색감의 탐험 구간', className: 'screen-3' },
  { title: '보스전', desc: '정태일의 모험 3의 어두운 전투 장면', className: 'screen-4' },
  { title: '설산 지역', desc: '후반부에 등장하는 차가운 산악 지대', className: 'screen-5' },
  { title: '밤의 상점가', desc: '외전 시리즈의 야간 마을 분위기', className: 'screen-6' }
];

let currentScreenIndex = 0;
let toastTimer;

const modal = document.querySelector('#siteModal');
const modalKicker = document.querySelector('#modalKicker');
const modalTitle = document.querySelector('#modalTitle');
const modalBody = document.querySelector('#modalBody');
const modalActions = document.querySelector('#modalActions');
const modalVisual = document.querySelector('#modalVisual');
const toast = document.querySelector('#toast');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxTitle = document.querySelector('#lightboxTitle');
const lightboxDesc = document.querySelector('#lightboxDesc');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelector('.main-nav')?.classList.remove('is-open');
  document.querySelector('[data-action="toggle-menu"]')?.setAttribute('aria-expanded', 'false');
}

function openModal({ title, kicker = 'Detail', body = '', visual = '', actions = [] }) {
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  modalBody.innerHTML = body;
  modalActions.innerHTML = '';
  modalVisual.className = 'modal-visual';
  if (visual) modalVisual.classList.add(visual);

  actions.forEach((action) => {
    const button = document.createElement(action.href ? 'a' : 'button');
    button.textContent = action.label;
    button.className = action.secondary ? 'secondary-action' : '';
    if (action.href) {
      button.href = action.href;
      if (action.download) button.setAttribute('download', '');
    } else {
      button.type = 'button';
      button.addEventListener('click', action.onClick);
    }
    modalActions.appendChild(button);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openGame(gameId) {
  const game = gameData[gameId];
  if (!game) return;
  openModal({
    title: game.title,
    kicker: `${game.kicker} · ${game.version}`,
    body: `${game.body}<p><strong>플랫폼:</strong> Windows · <strong>장르:</strong> ${game.category}</p>`,
    visual: game.visual,
    actions: [
      { label: '다운로드 준비', onClick: () => startDownload(gameId) },
      { label: '목록으로 이동', secondary: true, onClick: () => { closeModal(); scrollToSection('downloads'); } }
    ]
  });
}

function startDownload(gameId) {
  const game = gameData[gameId];
  if (!game) return;
  openModal({
    title: `${game.title} 다운로드`,
    kicker: `${game.version} · Windows`,
    body: `<p>다운로드 버튼이 눌렸습니다. 실제 배포 파일을 레포의 <strong>${game.file}</strong> 경로에 올리면 아래 링크가 바로 작동합니다.</p><p>현재는 사이트 동작 확인용으로 다운로드 안내 모달을 표시합니다.</p>`,
    visual: game.visual,
    actions: [
      { label: '다운로드 링크 열기', href: game.file, download: true },
      { label: '닫기', secondary: true, onClick: closeModal }
    ]
  });
  showToast(`${game.title} 다운로드 창을 열었습니다.`);
}

function openDataModal(data) {
  if (!data) return;
  openModal({ title: data[0], kicker: data[1], body: data[2], actions: [{ label: '닫기', secondary: true, onClick: closeModal }] });
}

function openSimpleList(type) {
  const titleMap = { updates: '전체 패치노트', notices: '전체 공지사항', news: '전체 커뮤니티 뉴스' };
  const bodyMap = {
    updates: '<ul><li>v1.3.2 정태일의 모험 1 업데이트</li><li>v1.2.8 정태일의 모험 2 업데이트</li><li>v1.1.0 정태일의 모험 3 업데이트</li><li>v1.0.5 정의 모험 1 업데이트</li></ul>',
    notices: '<ul><li>웹사이트 리뉴얼 안내</li><li>5월 커뮤니티 이벤트 당첨자 발표</li><li>정기 점검 안내</li><li>개인정보처리방침 변경 안내</li></ul>',
    news: '<ul><li>개발 일지 #24</li><li>모험가 팬아트 공모전</li><li>이달의 팬아트</li><li>정태일의 모험 6주년 기념</li></ul>'
  };
  openModal({ title: titleMap[type], kicker: 'Archive', body: bodyMap[type], actions: [{ label: '닫기', secondary: true, onClick: closeModal }] });
}

function openSeriesIntro() {
  openModal({
    title: '정태일의 모험 세계관',
    kicker: 'Story Preview',
    body: '<p>정태일의 모험은 작은 마을, 오래된 유적, 밤의 도시, 설산, 숨겨진 성으로 이어지는 픽셀 어드벤처 시리즈입니다.</p><p>메인 3부작은 정태일의 성장과 진실 추적을 중심으로 하고, 외전인 ‘정’의 모험과 수태공 연애 시뮬레이션은 다른 분위기의 이야기를 확장합니다.</p>',
    visual: 'game-visual-1',
    actions: [{ label: '시리즈 보기', onClick: () => { closeModal(); scrollToSection('series'); } }]
  });
}

function openFooter(type) {
  const map = {
    terms: ['이용약관', 'Policy', '<p>이 페이지는 정태일의 모험 시리즈 공식 사이트 예시 약관 영역입니다. 실제 상용 배포 시에는 정식 약관 문구로 교체하세요.</p>'],
    privacy: ['개인정보처리방침', 'Policy', '<p>문의하기와 이벤트 참여 기능을 추가할 경우 수집 항목, 보관 기간, 파기 기준을 실제 운영 방식에 맞게 작성해야 합니다.</p>'],
    youth: ['청소년 보호정책', 'Policy', '<p>게임 등급, 커뮤니티 운영 기준, 신고 절차 등을 안내하는 영역입니다.</p>'],
    contact: ['문의하기', 'Contact', '<p>공식 문의 메일: contact@jt-adventure.com</p><p>버그 제보, 다운로드 오류, 이벤트 문의를 이곳으로 안내할 수 있습니다.</p>'],
    email: ['메일 주소', 'Contact', '<p>contact@jt-adventure.com 주소를 복사했습니다.</p>']
  };
  if (type === 'email') {
    navigator.clipboard?.writeText('contact@jt-adventure.com');
    showToast('메일 주소를 복사했습니다.');
  }
  openDataModal(map[type]);
}

function setFilter(filter) {
  document.querySelectorAll('[data-filter]').forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
  document.querySelectorAll('[data-game-card]').forEach((card) => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !show);
  });
  showToast(filter === 'all' ? '전체 시리즈를 표시합니다.' : `${filter} 작품만 표시합니다.`);
}

function openLightbox(index) {
  currentScreenIndex = Number(index) || 0;
  renderLightbox();
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function renderLightbox() {
  const item = screenshots[currentScreenIndex];
  lightboxImage.className = `lightbox-image ${item.className}`;
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.desc;
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function moveGallery(direction) {
  currentScreenIndex = (currentScreenIndex + direction + screenshots.length) % screenshots.length;
  renderLightbox();
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('button, a');
  if (!target) return;

  if (target.dataset.scrollTarget) scrollToSection(target.dataset.scrollTarget);
  if (target.dataset.action === 'home') scrollToSection('top');
  if (target.dataset.action === 'toggle-menu') {
    const nav = document.querySelector('.main-nav');
    const isOpen = nav.classList.toggle('is-open');
    target.setAttribute('aria-expanded', String(isOpen));
  }
  if (target.dataset.social) showToast(`${target.dataset.social} 공식 채널은 실제 링크 연결 전입니다.`);
  if (target.dataset.openModal === 'seriesIntro') openSeriesIntro();
  if (target.dataset.feature) openDataModal(featureData[target.dataset.feature]);
  if (target.dataset.game) openGame(target.dataset.game);
  if (target.dataset.download) startDownload(target.dataset.download);
  if (target.dataset.update) openDataModal(patchData[target.dataset.update]);
  if (target.dataset.openList) openSimpleList(target.dataset.openList);
  if (target.dataset.notice) openDataModal(noticeData[target.dataset.notice]);
  if (target.dataset.news) openDataModal(newsData[target.dataset.news]);
  if (target.dataset.filter) setFilter(target.dataset.filter);
  if (target.dataset.screen) openLightbox(target.dataset.screen);
  if (target.dataset.openGallery) openLightbox(0);
  if (target.dataset.footer) openFooter(target.dataset.footer);
  if (target.hasAttribute('data-close-modal')) closeModal();
  if (target.hasAttribute('data-close-lightbox')) closeLightbox();
  if (target.hasAttribute('data-gallery-prev')) moveGallery(-1);
  if (target.hasAttribute('data-gallery-next')) moveGallery(1);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    closeLightbox();
  }
  if (lightbox.classList.contains('is-open')) {
    if (event.key === 'ArrowLeft') moveGallery(-1);
    if (event.key === 'ArrowRight') moveGallery(1);
  }
});

const sections = [...document.querySelectorAll('main section[id]')];
const navButtons = [...document.querySelectorAll('.main-nav [data-scroll-target]')];
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navButtons.forEach((button) => button.classList.toggle('active', button.dataset.scrollTarget === entry.target.id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
sections.forEach((section) => activeObserver.observe(section));
