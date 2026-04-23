const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const releaseRow = document.getElementById('releaseRow');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const ratingRange = document.getElementById('ratingRange');
const ratingValue = document.getElementById('ratingValue');
const applyFilters = document.getElementById('applyFilters');
const resultCount = document.getElementById('resultCount');
const resultsList = document.getElementById('resultsList');
const chips = document.querySelectorAll('.chip');
const siteSearch = document.getElementById('siteSearch');
const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const filtersPanel = document.getElementById('filtersPanel');
const filtersBackdrop = document.getElementById('filtersBackdrop');
const filterClose = document.getElementById('filterClose');

let activeGenres = new Set(['Thriller']);
let searchActive = false;

function openNav() {
  mainNav.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  body.classList.add('nav-open');
}

function closeNav() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('nav-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.contains('open');
  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});

function scrollReleaseRow(direction) {
  if (!releaseRow) return;
  const amount = Math.max(releaseRow.clientWidth * 0.8, 280) * direction;
  releaseRow.scrollBy({ left: amount, behavior: 'smooth' });
}

scrollLeft?.addEventListener('click', () => scrollReleaseRow(-1));
scrollRight?.addEventListener('click', () => scrollReleaseRow(1));

ratingRange?.addEventListener('input', (event) => {
  ratingValue.textContent = Number(event.target.value).toFixed(1);
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const genre = chip.dataset.genre;
    if (activeGenres.has(genre)) {
      activeGenres.delete(genre);
      chip.classList.remove('active');
    } else {
      activeGenres.add(genre);
      chip.classList.add('active');
    }
  });
});

function openFilters() {
  if (!filtersPanel || window.innerWidth > 1024) return;
  body.classList.add('filters-open');
  mobileFilterToggle?.setAttribute('aria-expanded', 'true');
}

function closeFilters() {
  body.classList.remove('filters-open');
  mobileFilterToggle?.setAttribute('aria-expanded', 'false');
}

mobileFilterToggle?.addEventListener('click', openFilters);
filterClose?.addEventListener('click', closeFilters);
filtersBackdrop?.addEventListener('click', closeFilters);

function applyArchiveFilters() {
  const yearMin = Number(document.getElementById('yearMin').value || 0);
  const yearMax = Number(document.getElementById('yearMax').value || 9999);
  const minRating = Number(ratingRange.value);
  const checkedStudios = [...document.querySelectorAll('.check-list input:checked')].map((input) => input.value);
  const cards = [...resultsList.querySelectorAll('.result-card')];
  const searchQuery = searchActive ? (siteSearch?.value || '').trim().toLowerCase() : '';
  let visible = 0;

  cards.forEach((card) => {
    const year = Number(card.dataset.year);
    const rating = Number(card.dataset.rating);
    const studio = card.dataset.studio;
    const genres = card.dataset.genres.split(',');

    const matchesYear = year >= yearMin && year <= yearMax;
    const matchesRating = rating >= minRating;
    const matchesStudio = checkedStudios.length === 0 || checkedStudios.includes(studio);
    const matchesGenre = activeGenres.size === 0 || genres.some((genre) => activeGenres.has(genre));

    // Also respect active search query
    const matchesSearch = !searchQuery || card.textContent.toLowerCase().includes(searchQuery);

    const shouldShow = matchesYear && matchesRating && matchesStudio && matchesGenre && matchesSearch;
    card.classList.toggle('hidden', !shouldShow);

    if (shouldShow) visible += 1;
  });

  resultCount.textContent = visible;

  if (window.innerWidth <= 1024) {
    closeFilters();
  }
}

applyFilters?.addEventListener('click', applyArchiveFilters);

const archiveSection = document.getElementById('archive');
const archiveHeading = archiveSection?.querySelector('.archive-head h2');
const archiveTag = archiveSection?.querySelector('.archive-head .section-tag');
const allSections = document.querySelectorAll('main > section');

function performSearch(query) {
  const value = query.trim().toLowerCase();

  if (!value) {
    // Reset: show all sections except archive (hidden by default), restore heading
    searchActive = false;
    allSections.forEach((section) => {
      if (section.id !== 'archive') {
        section.classList.remove('hidden');
      }
    });
    if (archiveSection) archiveSection.classList.add('hidden');
    if (archiveHeading) archiveHeading.textContent = '"Cerebral Noir"';
    if (archiveTag) archiveTag.textContent = 'Search Results';
    return;
  }

  searchActive = true;

  // Hide all sections except archive
  allSections.forEach((section) => {
    if (section.id === 'archive') {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });

  // Update archive heading with search query
  if (archiveHeading) archiveHeading.textContent = `"${query.trim()}"`;
  if (archiveTag) archiveTag.textContent = 'Search Results';

  // Filter result cards by matching title, description, meta, cast, studio, genres
  const cards = [...resultsList.querySelectorAll('.result-card')];
  let visible = 0;

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    const matchesSearch = cardText.includes(value);

    card.classList.toggle('hidden', !matchesSearch);
    if (matchesSearch) visible += 1;
  });

  resultCount.textContent = visible;

  // Scroll to archive section
  archiveSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

siteSearch?.addEventListener('input', (event) => {
  performSearch(event.target.value);
});

// Also trigger search on Enter key
siteSearch?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    performSearch(siteSearch.value);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 840) {
    closeNav();
  }

  if (window.innerWidth > 1024) {
    closeFilters();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNav();
    closeFilters();
  }
});

window.addEventListener('load', () => {
  applyArchiveFilters();
});
