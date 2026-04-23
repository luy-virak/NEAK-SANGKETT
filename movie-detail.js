
const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

function openNav() {
  mainNav?.classList.add('open');
  menuToggle?.setAttribute('aria-expanded', 'true');
  body.classList.add('nav-open');
}

function closeNav() {
  mainNav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  body.classList.remove('nav-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav?.classList.contains('open');
  if (isOpen) {
    closeNav();
  } else {
    openNav();
  }
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 840) {
    closeNav();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNav();
  }
});

const MOVIE_LIBRARY = {
  'neural-ghost': {
    title: 'Neural Ghost',
    rating: '9.8/10',
    runtime: 'Not listed',
    certification: 'Sci-Fi',
    year: '2026',
    genres: ['Sci-Fi', 'Featured'],
    synopsis: 'The current feature highlight from the home page. Neural Ghost leads the ranking with a 9.8 score and a futuristic sci-fi identity.',
    specs: [
      ['Archive Status', 'Top Rated Today #1'],
      ['Release Year', '2026'],
      ['Genre', 'Sci-Fi'],
      ['Rating', '★ 9.8'],
      ['Detail Source', 'Home page feature card'],
      ['List Action', 'Add to List available']
    ],
    trivia: [
      'This title is the featured movie in the current landing-page spotlight.',
      'The only explicit metadata on the listing card is its 2026 release year and sci-fi genre.',
      'Its detail page uses the same poster art path already referenced in the index layout.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'Lead role not listed' },
      { name: 'Crew Pending', role: 'Director not listed' },
      { name: 'Archive Note', role: 'More data can be added later' }
    ],
    reviews: [
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Featured title',
        quote: 'A homepage centerpiece built to feel cinematic from the very first scroll.',
        footer: '— Spotlight card'
      },
      {
        badge: 'AR',
        source: 'Archive Readout',
        label: 'Current metadata',
        quote: 'Neural Ghost already reads like a prestige sci-fi release even before a full archive record is added.',
        footer: '— Listing summary'
      }
    ],
    posterImage: 'assets/Gemini_Generated_Image_aq8ombaq8ombaq8o.png',
    backdropImage: 'assets/Gemini_Generated_Image_aq8ombaq8ombaq8o.png'
  },
  'midnight-pulse': {
    title: 'Midnight Pulse',
    rating: '9.4/10',
    runtime: '2h 15m',
    certification: 'Thriller',
    year: 'Now showing',
    genres: ['Thriller', 'Top Rated'],
    synopsis: 'A high-ranking thriller entry from the Top Rated Today section, presented as the number-two title on the page.',
    specs: [
      ['Archive Status', 'Top Rated Today #2'],
      ['Genre', 'Thriller'],
      ['Runtime', '2h 15m'],
      ['Rating', '★ 9.4'],
      ['Section', 'Top Rated Today'],
      ['Detail Source', 'Rank card']
    ],
    trivia: [
      'Midnight Pulse appears directly under the featured card in the Top Rated stack.',
      'Its listing card emphasizes pace with a long runtime and a strong thriller score.',
      'This detail page keeps the dramatic, neon-noir look from the reference layout.'
    ],
    cast: [
      { name: 'Lead Pending', role: 'Cast not listed' },
      { name: 'Role Pending', role: 'Character not listed' },
      { name: 'Archive Note', role: 'Expand later' }
    ],
    reviews: [
      {
        badge: 'TR',
        source: 'Top Rated',
        label: 'Ranking note',
        quote: 'A sharp thriller entry positioned just behind the featured title in today’s list.',
        footer: '— Rank card'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'The title alone suggests urgency, momentum, and a late-night pulse that fits the noir-inspired UI.',
        footer: '— Editorial tone'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 72% 30%, rgba(255, 112, 181, 0.18), transparent 16%), linear-gradient(120deg, rgba(13, 16, 32, 0.96) 12%, rgba(35, 14, 31, 0.78) 54%, rgba(8, 10, 18, 0.96) 100%)',
    posterBackground: 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent 26%), radial-gradient(circle at 50% 20%, rgba(255, 116, 184, 0.35), transparent 14%), linear-gradient(180deg, #151723 0%, #090b12 100%)'
  },
  'cold-harbor': {
    title: 'Cold Harbor',
    rating: '9.2/10',
    runtime: '1h 50m',
    certification: 'Drama',
    year: 'Now showing',
    genres: ['Drama', 'Top Rated'],
    synopsis: 'A top-ranked drama card from the landing page with a cooler, restrained identity compared with the thriller and sci-fi picks around it.',
    specs: [
      ['Archive Status', 'Top Rated Today #3'],
      ['Genre', 'Drama'],
      ['Runtime', '1h 50m'],
      ['Rating', '★ 9.2'],
      ['Section', 'Top Rated Today'],
      ['Detail Source', 'Rank card']
    ],
    trivia: [
      'Cold Harbor is the third ranked title in the current homepage stack.',
      'Its card is the most restrained of the top-three entries, focusing on drama rather than spectacle.',
      'This page keeps the same cinematic structure while using your own movie roster.'
    ],
    cast: [
      { name: 'Lead Pending', role: 'Cast not listed' },
      { name: 'Role Pending', role: 'Character not listed' },
      { name: 'Archive Note', role: 'Expand later' }
    ],
    reviews: [
      {
        badge: 'DR',
        source: 'Drama Lens',
        label: 'Ranking note',
        quote: 'A colder, moodier counterpoint inside the Top Rated collection.',
        footer: '— Card impression'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Editorial tone',
        quote: 'It reads like a prestige drama that earns its high score through restraint.',
        footer: '— UI adaptation'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 80% 24%, rgba(163, 205, 255, 0.16), transparent 16%), linear-gradient(120deg, rgba(11, 17, 28, 0.98) 10%, rgba(18, 31, 45, 0.82) 54%, rgba(8, 10, 16, 0.96) 100%)',
    posterBackground: 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent 26%), radial-gradient(circle at 50% 16%, rgba(167, 220, 255, 0.32), transparent 14%), linear-gradient(180deg, #182430 0%, #090d12 100%)'
  },
  'fractured-sky': {
    title: 'Fractured Sky',
    rating: '4.3/5',
    runtime: 'Not listed',
    certification: 'Animation',
    year: '2024',
    genres: ['Animation', 'Album pick'],
    synopsis: 'A compact animated entry from the wide card in the Top Rated area, shown with a softer rating summary and add action.',
    specs: [
      ['Archive Status', 'Wide card highlight'],
      ['Genre', 'Animation'],
      ['Release Year', '2024'],
      ['Rating', '★ 4.3 | 3 ratings'],
      ['Section', 'Top Rated Today'],
      ['Detail Source', 'Wide card']
    ],
    trivia: [
      'Fractured Sky is the only wide-format card in the current ranking stack.',
      'Its presentation feels more intimate and album-like than the larger hero cards.',
      'The plus button is still preserved on the listing page for quick add actions.'
    ],
    cast: [
      { name: 'Voice Cast', role: 'Not listed yet' },
      { name: 'Animation Team', role: 'Not listed yet' },
      { name: 'Archive Note', role: 'Expand later' }
    ],
    reviews: [
      {
        badge: 'AN',
        source: 'Animation Note',
        label: 'Listing tone',
        quote: 'The smaller card presentation makes this release feel like a hidden gem in the lineup.',
        footer: '— UI note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'A softer atmospheric detour between the darker cards around it.',
        footer: '— Editorial tone'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 72% 25%, rgba(255, 91, 180, 0.12), transparent 18%), radial-gradient(circle at 55% 30%, rgba(130, 168, 255, 0.16), transparent 20%), linear-gradient(120deg, rgba(17, 21, 38, 0.96) 12%, rgba(24, 32, 58, 0.8) 52%, rgba(8, 10, 18, 0.98) 100%)',
    posterBackground: 'linear-gradient(145deg, #0d1018 30%, rgba(255, 255, 255, 0.1) 31%, #18203a 44%, #f35fa8 70%, #111 100%)'
  },
  'phlov-mek-sky-road': {
    title: 'Phlov Mek (Sky Road)',
    rating: 'Coming Soon',
    runtime: '110 min',
    certification: 'Romance',
    year: 'Oct 14',
    genres: ['Romance', 'Upcoming'],
    synopsis: 'One of the upcoming release cards, listed with a romance tag and a 110-minute runtime.',
    specs: [
      ['Release Window', 'Oct 14'],
      ['Genre', 'Romance'],
      ['Runtime', '110 min'],
      ['Section', 'Upcoming Releases'],
      ['Status', 'Coming Soon'],
      ['Detail Source', 'Release carousel']
    ],
    trivia: [
      'This title opens the Upcoming Releases carousel in the current home page.',
      'Its card already includes a poster image reference in your assets folder.',
      'The detail layout uses the same cinematic poster-forward composition as your reference.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'To be announced' },
      { name: 'Director Pending', role: 'To be announced' }
    ],
    reviews: [
      {
        badge: 'CS',
        source: 'Coming Soon',
        label: 'Release note',
        quote: 'A romance-led title positioned to add warmth to the darker lineup around it.',
        footer: '— Carousel note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Preview tone',
        quote: 'Its title and release timing suggest a more emotional, road-bound story world.',
        footer: '— Editorial tone'
      }
    ],
    posterImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_37 PM.png',
    backdropImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_37 PM.png'
  },
  'void-echoes': {
    title: 'Void Echoes',
    rating: 'Coming Soon',
    runtime: 'Dolls Atomos',
    certification: 'Horror',
    year: 'Nov 23',
    genres: ['Horror', 'Upcoming'],
    synopsis: 'A horror title from the release carousel, presented with an eerie “Dolls Atomos” line that gives the card a surreal identity.',
    specs: [
      ['Release Window', 'Nov 23'],
      ['Genre', 'Horror'],
      ['Tagline', 'Dolls Atomos'],
      ['Section', 'Upcoming Releases'],
      ['Status', 'Coming Soon'],
      ['Detail Source', 'Release carousel']
    ],
    trivia: [
      'Void Echoes is one of the darkest cards in the release carousel.',
      'Its subtitle line already carries a strange, uncanny tone that fits a horror detail page.',
      'The detail view keeps that mood with a violet-and-cyan backdrop treatment.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'To be announced' },
      { name: 'Director Pending', role: 'To be announced' }
    ],
    reviews: [
      {
        badge: 'HR',
        source: 'Horror File',
        label: 'Preview note',
        quote: 'The naming and card language already feel haunted before any synopsis is expanded.',
        footer: '— Carousel note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'A stylish upcoming horror entry built around atmosphere and suggestion.',
        footer: '— Editorial tone'
      }
    ],
    posterImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_04 PM.png',
    backdropImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_04 PM.png'
  },
  'silent-grove': {
    title: 'Silent Grove',
    rating: 'Coming Soon',
    runtime: 'Director\'s Cut',
    certification: 'Mystery',
    year: 'Nov 19',
    genres: ['Mystery', 'Upcoming'],
    synopsis: 'An upcoming mystery release presented as a Director’s Cut, giving it a slightly more premium, curated feeling inside the carousel.',
    specs: [
      ['Release Window', 'Nov 19'],
      ['Genre', 'Mystery'],
      ['Edition', 'Director\'s Cut'],
      ['Section', 'Upcoming Releases'],
      ['Status', 'Coming Soon'],
      ['Detail Source', 'Release carousel']
    ],
    trivia: [
      'Silent Grove uses the forest-themed poster container on the home page.',
      'The “Director’s Cut” label makes it feel more boutique than the average release card.',
      'Its detail page leans into a colder mystery palette to match that card treatment.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'To be announced' },
      { name: 'Director Pending', role: 'To be announced' }
    ],
    reviews: [
      {
        badge: 'MY',
        source: 'Mystery Note',
        label: 'Preview note',
        quote: 'A release card that already feels like it belongs to a prestige mystery label.',
        footer: '— Carousel note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'The title and card treatment suggest a patient, atmospheric unraveling.',
        footer: '— Editorial tone'
      }
    ],
    posterImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_20 PM.png',
    backdropImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_20 PM.png'
  },
  'neon-dreams': {
    title: 'Neon Dreams',
    rating: 'Coming Soon',
    runtime: 'IMAX',
    certification: 'Action',
    year: 'Dec 05',
    genres: ['Action', 'Upcoming'],
    synopsis: 'An action-forward upcoming release with a neon-heavy presentation and an IMAX tag built right into the card.',
    specs: [
      ['Release Window', 'Dec 05'],
      ['Genre', 'Action'],
      ['Format', 'IMAX'],
      ['Section', 'Upcoming Releases'],
      ['Status', 'Coming Soon'],
      ['Detail Source', 'Release carousel']
    ],
    trivia: [
      'Neon Dreams is the most overtly stylized action card in the release row.',
      'Its existing visual treatment already hints at a nightlife, high-contrast world.',
      'This detail page keeps that same saturated energy while matching the new layout.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'To be announced' },
      { name: 'Director Pending', role: 'To be announced' }
    ],
    reviews: [
      {
        badge: 'AX',
        source: 'Action File',
        label: 'Preview note',
        quote: 'A bright, confident release card that instantly pushes the page toward spectacle.',
        footer: '— Carousel note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'Built for glossy nightscapes, momentum, and oversized scale.',
        footer: '— Editorial tone'
      }
    ],
    posterImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_26 PM.png',
    backdropImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_26 PM.png'
  },
  'afterimage-zero': {
    title: 'Afterimage Zero',
    rating: 'Coming Soon',
    runtime: '118 min',
    certification: 'Sci-Fi',
    year: 'Dec 12',
    genres: ['Sci-Fi', 'Upcoming'],
    synopsis: 'A science-fiction upcoming release card with a crisp runtime and a sleek city-styled container in the carousel.',
    specs: [
      ['Release Window', 'Dec 12'],
      ['Genre', 'Sci-Fi'],
      ['Runtime', '118 min'],
      ['Section', 'Upcoming Releases'],
      ['Status', 'Coming Soon'],
      ['Detail Source', 'Release carousel']
    ],
    trivia: [
      'Afterimage Zero closes the current release row on the homepage.',
      'Its card styling already leans futuristic, which makes it a natural fit for a large cinematic backdrop.',
      'The detail page keeps the poster-first composition while using your current movie roster.'
    ],
    cast: [
      { name: 'Cast Pending', role: 'To be announced' },
      { name: 'Director Pending', role: 'To be announced' }
    ],
    reviews: [
      {
        badge: 'SF',
        source: 'Sci-Fi File',
        label: 'Preview note',
        quote: 'A polished genre card that feels ready for a full archive entry.',
        footer: '— Carousel note'
      },
      {
        badge: 'NS',
        source: 'Neak Sangkett',
        label: 'Mood profile',
        quote: 'Its title suggests aftermath, sleek futurism, and the search for what remains.',
        footer: '— Editorial tone'
      }
    ],
    posterImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_31 PM.png',
    backdropImage: 'assets/ChatGPT Image Apr 21, 2026, 06_14_31 PM.png'
  },
  'the-obsidian-echo': {
    title: 'The Obsidian Echo',
    rating: '8.4/10',
    runtime: '148 min',
    certification: 'PG-13',
    year: '2024',
    genres: ['Thriller', 'Noir'],
    synopsis: 'In a sprawling megacity where memories are traded like currency, a disgraced detective uncovers a conspiracy buried within the synthetic layers of the upper-tier elite.',
    specs: [
      ['Director', 'Elias Thorne'],
      ['Lead Cast', 'Julianne Moore, Cillian Murphy, Florence Pugh'],
      ['Studio', 'Neon Films'],
      ['Runtime', '148 min'],
      ['Release Year', '2024'],
      ['IMDb / Meta', '8.4 / 79']
    ],
    trivia: [
      'The archive record places this film inside both the Thriller and Noir categories.',
      'Its synopsis centers on memory-trading, megacity class layers, and a disgraced detective.',
      'The listing currently marks Neon Films as the associated studio.'
    ],
    cast: [
      { name: 'Julianne Moore', role: 'Lead Cast' },
      { name: 'Cillian Murphy', role: 'Lead Cast' },
      { name: 'Florence Pugh', role: 'Lead Cast' },
      { name: 'Elias Thorne', role: 'Director' },
      { name: 'Neon Films', role: 'Studio' }
    ],
    reviews: [
      {
        badge: 'AR',
        source: 'Archive Record',
        label: 'Story focus',
        quote: 'A conspiracy thriller built on synthetic memories, elite class layers, and a detective pushed to the margins.',
        footer: '— Listing synopsis'
      },
      {
        badge: 'NP',
        source: 'Neon Profile',
        label: 'Genre read',
        quote: 'Its noir angle gives the futuristic setting a colder moral charge rather than pure spectacle.',
        footer: '— Editorial lens'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 72% 32%, rgba(102, 216, 255, 0.18), transparent 18%), radial-gradient(circle at 85% 54%, rgba(220, 110, 255, 0.12), transparent 18%), linear-gradient(120deg, rgba(7, 20, 32, 0.98) 12%, rgba(10, 27, 43, 0.78) 48%, rgba(6, 9, 16, 0.96) 100%)',
    posterBackground: 'radial-gradient(circle at 50% 23%, rgba(138, 232, 255, 0.5), transparent 24%), linear-gradient(90deg, rgba(9, 15, 28, 0.95) 0 14%, transparent 14% 22%, rgba(14, 24, 40, 0.95) 22% 34%, transparent 34% 46%, rgba(10, 20, 36, 0.95) 46% 56%, transparent 56% 68%, rgba(11, 22, 39, 0.95) 68% 82%, transparent 82%), linear-gradient(180deg, #07131f 0%, #0b2033 52%, #091119 100%)'
  },
  'void-archive': {
    title: 'Void Archive',
    rating: '9.1/10',
    runtime: '112 min',
    certification: 'PG-13',
    year: '2023',
    genres: ['Thriller', 'Mystery'],
    synopsis: 'An experimental journey through a digitised afterlife. Void Archive pushes the boundaries of cinematic storytelling through a non-linear exploration of lost data and emotional resonance.',
    specs: [
      ['Director', 'Ava Duvernay'],
      ['Lead Cast', 'Tilda Swinton, Oscar Isaac, Steven Yeun'],
      ['Studio', 'A24 Studios'],
      ['Runtime', '112 min'],
      ['Release Year', '2023'],
      ['IMDb / Meta', '9.1 / 92']
    ],
    trivia: [
      'The archive categorizes this title under Thriller and Mystery.',
      'Its synopsis frames the film as a non-linear exploration of lost data and emotional resonance.',
      'Among the archive cards, it holds the strongest visible rating in the list.'
    ],
    cast: [
      { name: 'Tilda Swinton', role: 'Lead Cast' },
      { name: 'Oscar Isaac', role: 'Lead Cast' },
      { name: 'Steven Yeun', role: 'Lead Cast' },
      { name: 'Ava Duvernay', role: 'Director' },
      { name: 'A24 Studios', role: 'Studio' }
    ],
    reviews: [
      {
        badge: 'AR',
        source: 'Archive Record',
        label: 'Story focus',
        quote: 'A digitised afterlife becomes the frame for lost data, emotional memory, and fragmented storytelling.',
        footer: '— Listing synopsis'
      },
      {
        badge: 'A24',
        source: 'A24 Mood',
        label: 'Editorial read',
        quote: 'Its presentation feels like art-house science fiction refracted through mystery and memory loss.',
        footer: '— Editorial lens'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 68% 26%, rgba(214, 232, 255, 0.18), transparent 18%), radial-gradient(circle at 84% 50%, rgba(112, 126, 255, 0.16), transparent 18%), linear-gradient(120deg, rgba(14, 16, 24, 0.98) 12%, rgba(25, 29, 40, 0.78) 48%, rgba(8, 10, 16, 0.96) 100%)',
    posterBackground: 'linear-gradient(160deg, rgba(255, 255, 255, 0.78) 0 24%, transparent 24% 100%), linear-gradient(140deg, #101216 30%, #2a2d35 60%, #0d0f14 100%)'
  },
  'the-long-drive-home': {
    title: 'The Long Drive Home',
    rating: '7.8/10',
    runtime: '134 min',
    certification: 'PG-13',
    year: '2022',
    genres: ['Sci-Fi', 'Thriller'],
    synopsis: 'A slow-burn character study disguised as a crime thriller. When a getaway driver finds himself in possession of a prototype AI module, he must navigate a landscape of betrayal and techno-noir paranoia.',
    specs: [
      ['Director', 'Denis Villeneuve'],
      ['Lead Cast', 'Ryan Gosling, Lakeith Stanfield, Anya Taylor-Joy'],
      ['Studio', 'Warner Bros.'],
      ['Runtime', '134 min'],
      ['Release Year', '2022'],
      ['IMDb / Meta', '7.8 / 81']
    ],
    trivia: [
      'This archive title blends Sci-Fi and Thriller genres inside the current filter system.',
      'Its synopsis hinges on a prototype AI module, betrayal, and techno-noir paranoia.',
      'Warner Bros. is the listed studio on the card.'
    ],
    cast: [
      { name: 'Ryan Gosling', role: 'Lead Cast' },
      { name: 'Lakeith Stanfield', role: 'Lead Cast' },
      { name: 'Anya Taylor-Joy', role: 'Lead Cast' },
      { name: 'Denis Villeneuve', role: 'Director' },
      { name: 'Warner Bros.', role: 'Studio' }
    ],
    reviews: [
      {
        badge: 'AR',
        source: 'Archive Record',
        label: 'Story focus',
        quote: 'A getaway driver, a prototype AI module, and a landscape of betrayal give this title its noir propulsion.',
        footer: '— Listing synopsis'
      },
      {
        badge: 'TN',
        source: 'Techno-Noir',
        label: 'Editorial read',
        quote: 'The premise reads like a melancholy road movie colliding with synthetic dread.',
        footer: '— Editorial lens'
      }
    ],
    backdropBackground: 'radial-gradient(circle at 68% 20%, rgba(232, 255, 255, 0.16), transparent 20%), radial-gradient(circle at 82% 56%, rgba(144, 195, 145, 0.12), transparent 18%), linear-gradient(120deg, rgba(16, 23, 20, 0.98) 10%, rgba(21, 33, 28, 0.82) 48%, rgba(8, 10, 14, 0.96) 100%)',
    posterBackground: 'radial-gradient(circle at 50% 28%, rgba(234, 255, 255, 0.72), transparent 23%), linear-gradient(90deg, rgba(17, 35, 31, 0.88) 0 12%, transparent 12% 24%, rgba(17, 35, 31, 0.88) 24% 36%, transparent 36% 48%, rgba(17, 35, 31, 0.88) 48% 60%, transparent 60% 72%, rgba(17, 35, 31, 0.88) 72% 84%, transparent 84%), linear-gradient(180deg, #0f1614 0%, #15211c 100%)'
  }
};

function initialsFromName(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function defaultMovie() {
  return MOVIE_LIBRARY['the-obsidian-echo'];
}

function getMovieFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const movieKey = params.get('movie');
  return MOVIE_LIBRARY[movieKey] || defaultMovie();
}

function setArtwork(movie) {
  const poster = document.getElementById('detailPoster');
  const posterFallback = document.getElementById('detailPosterFallback');
  const backdrop = document.getElementById('detailBackdrop');

  if (!poster || !backdrop || !posterFallback) return;

  const posterImage = movie.posterImage
    ? `linear-gradient(180deg, rgba(6, 8, 15, 0.02), rgba(6, 8, 15, 0.24)), url("${movie.posterImage}")`
    : movie.posterBackground || 'linear-gradient(180deg, #182132 0%, #090b12 100%)';

  const backdropImage = movie.backdropImage
    ? `linear-gradient(90deg, rgba(3, 4, 10, 0.95) 0%, rgba(4, 6, 13, 0.82) 24%, rgba(4, 6, 13, 0.42) 58%, rgba(4, 6, 13, 0.7) 100%), linear-gradient(180deg, rgba(3, 4, 10, 0.26), rgba(3, 4, 10, 0.78)), url("${movie.backdropImage}")`
    : movie.backdropBackground || 'linear-gradient(120deg, rgba(10, 14, 26, 0.98) 10%, rgba(18, 27, 50, 0.78) 52%, rgba(6, 8, 15, 0.96) 100%)';

  poster.style.backgroundImage = posterImage;
  backdrop.style.backgroundImage = backdropImage;

  posterFallback.innerHTML = `<span>${movie.title}</span>`;
  posterFallback.style.display = movie.posterImage ? 'none' : 'block';
}

function populateGenres(movie) {
  const genres = document.getElementById('detailGenres');
  if (!genres) return;
  genres.innerHTML = movie.genres
    .map((genre) => `<span class="detail-genre-pill">${genre}</span>`)
    .join('');
}

function populateMeta(movie) {
  const meta = document.getElementById('detailMeta');
  if (!meta) return;
  const items = [
    `<span class="detail-rating">★ ${movie.rating}</span>`,
    `<span>${movie.runtime}</span>`,
    `<span>${movie.certification}</span>`,
    `<span>${movie.year}</span>`
  ];

  meta.innerHTML = items
    .map((item, index) => `${index ? '<span class="meta-divider"></span>' : ''}${item}`)
    .join('');
}

function populateSpecs(movie) {
  const specs = document.getElementById('detailSpecs');
  if (!specs) return;
  specs.innerHTML = movie.specs
    .map(([label, value]) => `
      <div class="detail-spec-item">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join('');
}

function populateTrivia(movie) {
  const trivia = document.getElementById('detailTrivia');
  if (!trivia) return;
  trivia.innerHTML = movie.trivia
    .map((item) => `<div class="detail-trivia-item">${item}</div>`)
    .join('');
}

function populateCast(movie) {
  const cast = document.getElementById('detailCast');
  if (!cast) return;

  if (!movie.cast?.length) {
    cast.innerHTML = '<div class="detail-empty-note">Cast details have not been added for this title yet.</div>';
    return;
  }

  cast.innerHTML = movie.cast
    .map((person) => `
      <article>
        <div class="detail-cast-card">
          <div class="detail-cast-portrait">
            <span class="detail-cast-initials">${initialsFromName(person.name)}</span>
          </div>
        </div>
        <div class="detail-cast-copy">
          <h3>${person.name}</h3>
          <p>${person.role}</p>
        </div>
      </article>
    `)
    .join('');
}

function populateReviews(movie) {
  const reviews = document.getElementById('detailReviews');
  if (!reviews) return;
  reviews.innerHTML = movie.reviews
    .map((review, index) => `
      <article class="detail-review-card">
        <div class="detail-review-top">
          <div class="detail-review-source">
            <span class="detail-review-badge" style="background:${index % 2 === 0 ? '#f6c600' : '#9eabff'}; color:${index % 2 === 0 ? '#171004' : '#10142d'};">${review.badge}</span>
            <div>
              <strong>${review.source}</strong>
              <span>${review.label}</span>
            </div>
          </div>
          <div class="detail-review-mark">”</div>
        </div>
        <blockquote>${review.quote}</blockquote>
        <footer>${review.footer}</footer>
      </article>
    `)
    .join('');
}

function populateMovie() {
  const movie = getMovieFromQuery();
  document.title = `${movie.title} | Neak Sangkett`;
  document.getElementById('detailTitle').textContent = movie.title;
  document.getElementById('detailSynopsis').textContent = movie.synopsis;

  populateGenres(movie);
  populateMeta(movie);
  populateSpecs(movie);
  populateTrivia(movie);
  populateCast(movie);
  populateReviews(movie);
  setArtwork(movie);
}

populateMovie();
