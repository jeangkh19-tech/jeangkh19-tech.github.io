document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('tabbed-mode');

  const outlineToggle = document.getElementById('outlineToggle');
  const outlineDrawer = document.getElementById('outlineDrawer');
  const outlineBackdrop = document.getElementById('outlineBackdrop');
  const outlineClose = document.getElementById('outlineClose');
  const outlineLinks = Array.from(document.querySelectorAll('.outline-link'));
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navItems = Array.from(document.querySelectorAll('.nav-link'));
  const mapControllers = {};

  const setOutlineOpen = (open) => {
    if (!outlineDrawer || !outlineBackdrop || !outlineToggle) return;
    outlineDrawer.classList.toggle('open', open);
    outlineBackdrop.classList.toggle('open', open);
    outlineToggle.setAttribute('aria-expanded', String(open));
  };

  if (outlineToggle) {
    outlineToggle.addEventListener('click', () => {
      const isOpen = outlineDrawer && outlineDrawer.classList.contains('open');
      setOutlineOpen(!isOpen);
    });
  }
  if (outlineClose) outlineClose.addEventListener('click', () => setOutlineOpen(false));
  if (outlineBackdrop) outlineBackdrop.addEventListener('click', () => setOutlineOpen(false));

  // Expanded callout modal elements
  const modalBackdrop = document.getElementById('calloutModal');
  const modalPlace = document.getElementById('modalPlace');
  const modalEra = document.getElementById('modalEra');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalImages = document.getElementById('modalImages');
  const modalScroll = document.getElementById('modalScroll');
  const modalCounter = document.getElementById('modalCounter');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  let activeModalController = null;

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    activeModalController = null;
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      if (activeModalController) activeModalController.step(-1);
    });
  }
  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      if (activeModalController) activeModalController.step(1);
    });
  }

  const sectionLabels = {
    overview: 'Overview',
    'pair-1': '1. Mango Sago',
    'pair-2': '2. Char Siew / Satay',
    'pair-3': '3. Macaroni / Western',
    'pair-4': '4. Lo Mai Chi / Onde-Onde',
    'pair-5': '5. Milk Tea / Yakult Green Tea',
    references: 'References',
  };

  // Build interactive Leaflet map + callout stage for each pairing
  const initPairMap = (mountEl) => {
    const pairId = mountEl.dataset.pair;
    const data = window.PAIR_MAPS && window.PAIR_MAPS[pairId];
    if (!data || typeof L === 'undefined') return null;

    mountEl.innerHTML = `
      <div class="map-toolbar">
        <button type="button" class="map-reset-btn">Reset Map View</button>
      </div>
      <div class="map-stage">
        <div class="map-canvas-wrap">
          <div class="map-canvas" id="map-${pairId}"></div>
        </div>
        <aside class="callout-panel" aria-live="polite">
          <div class="stop-pills"></div>
          <div class="callout-scroll">
            <div class="callout-meta">
              <div class="callout-meta-left">
                <span class="callout-place"></span>
                <span class="callout-era"></span>
              </div>
              <button type="button" class="callout-expand-btn" aria-label="Expand content into popup overlay">&#x2922; Expand</button>
            </div>
            <h3 class="callout-title"></h3>
            <div class="callout-split">
              <div class="callout-body"></div>
              <div class="callout-images"></div>
            </div>
          </div>
          <div class="callout-controls">
            <button type="button" class="callout-nav-btn prev-stop">&larr; Prev Stop</button>
            <span class="callout-counter"></span>
            <button type="button" class="callout-nav-btn next-stop">Next Stop &rarr;</button>
          </div>
        </aside>
      </div>
    `;

    const mapEl = mountEl.querySelector('.map-canvas');
    const resetBtn = mountEl.querySelector('.map-reset-btn');
    const stopPillsEl = mountEl.querySelector('.stop-pills');
    const placeEl = mountEl.querySelector('.callout-place');
    const eraEl = mountEl.querySelector('.callout-era');
    const titleEl = mountEl.querySelector('.callout-title');
    const splitEl = mountEl.querySelector('.callout-split');
    const bodyEl = mountEl.querySelector('.callout-body');
    const imagesEl = mountEl.querySelector('.callout-images');
    const prevStopBtn = mountEl.querySelector('.prev-stop');
    const nextStopBtn = mountEl.querySelector('.next-stop');
    const expandBtn = mountEl.querySelector('.callout-expand-btn');
    const counterEl = mountEl.querySelector('.callout-counter');
    const scrollEl = mountEl.querySelector('.callout-scroll');
    const panelEl = mountEl.querySelector('.callout-panel');

    const map = L.map(mapEl, {
      scrollWheelZoom: true,
      worldCopyJump: true,
    }).setView([15, 108], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    let activeThread = 'all';
    let visibleStops = [...data.stops];
    let activeStopIndex = 0;
    let markerEntries = [];
    let routeLayers = [];

    const fitVisibleBounds = () => {
      if (!visibleStops.length) return;
      const bounds = L.latLngBounds(visibleStops.map((s) => s.coords));
      routeLayers.forEach((layer) => {
        if (layer.getBounds) bounds.extend(layer.getBounds());
      });
      map.fitBounds(bounds, { padding: [36, 36], maxZoom: 6 });
    };

    const renderCallout = () => {
      const stop = visibleStops[activeStopIndex];
      if (!stop) return;

      placeEl.textContent = stop.place;
      eraEl.textContent = stop.era || '';
      eraEl.style.display = stop.era ? '' : 'none';
      titleEl.textContent = `${stop.step}. ${stop.title}`;
      bodyEl.innerHTML = stop.body;
      bodyEl.querySelectorAll('.callout-figure img').forEach((img) => {
        const fig = img.closest('.callout-figure');
        img.addEventListener('error', () => fig && fig.classList.add('is-broken'));
      });

      imagesEl.innerHTML = '';
      const hasImages = Boolean(stop.images && stop.images.length);
      if (splitEl) splitEl.classList.toggle('no-images', !hasImages);
      imagesEl.classList.toggle('has-multi', Boolean(stop.images && stop.images.length >= 2));
      imagesEl.style.display = hasImages ? '' : 'none';
      if (hasImages) {
        stop.images.forEach((imgData) => {
          const fig = document.createElement('figure');
          fig.className = 'callout-figure';
          const altText = (imgData.caption || stop.title).replace(/<[^>]*>/g, '');
          fig.innerHTML = `
            <img src="${imgData.src}" alt="${altText}" loading="lazy" />
            ${imgData.caption ? `<figcaption>${imgData.caption}</figcaption>` : ''}
          `;
          const img = fig.querySelector('img');
          img.addEventListener('error', () => fig.classList.add('is-broken'));
          imagesEl.appendChild(fig);
        });
      }

      if (scrollEl) scrollEl.scrollTop = 0;

      // Update stop pills
      stopPillsEl.querySelectorAll('.stop-pill').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === activeStopIndex);
      });

      // Update marker highlight
      markerEntries.forEach((entry, idx) => {
        const el = entry.marker.getElement();
        if (!el) return;
        const badge = el.querySelector('.pin-badge');
        if (badge) badge.classList.toggle('is-active', idx === activeStopIndex);
      });

      counterEl.textContent = `Stop ${activeStopIndex + 1} of ${visibleStops.length}`;
      prevStopBtn.disabled = activeStopIndex === 0;
      nextStopBtn.disabled = activeStopIndex === visibleStops.length - 1;

      if (activeModalController && activeModalController.pairId === pairId) {
        syncModal();
      }
    };

    const syncModal = () => {
      const stop = visibleStops[activeStopIndex];
      if (!stop || !modalBackdrop) return;
      modalPlace.textContent = stop.place;
      modalEra.textContent = stop.era || '';
      modalEra.style.display = stop.era ? '' : 'none';
      modalTitle.textContent = `${stop.step}. ${stop.title}`;
      modalBody.innerHTML = stop.body;
      modalBody.querySelectorAll('.callout-figure img').forEach((img) => {
        const fig = img.closest('.callout-figure');
        img.addEventListener('error', () => fig && fig.classList.add('is-broken'));
      });
      modalImages.innerHTML = '';
      const modalSplit = document.getElementById('modalSplit');
      const hasModalImages = Boolean(stop.images && stop.images.length);
      if (modalSplit) modalSplit.classList.toggle('no-images', !hasModalImages);
      modalImages.classList.toggle('has-multi', Boolean(stop.images && stop.images.length >= 2));
      modalImages.style.display = hasModalImages ? '' : 'none';
      if (hasModalImages) {
        stop.images.forEach((imgData) => {
          const fig = document.createElement('figure');
          fig.className = 'callout-figure';
          const altText = (imgData.caption || stop.title).replace(/<[^>]*>/g, '');
          fig.innerHTML = `
            <img src="${imgData.src}" alt="${altText}" loading="lazy" />
            ${imgData.caption ? `<figcaption>${imgData.caption}</figcaption>` : ''}
          `;
          const img = fig.querySelector('img');
          img.addEventListener('error', () => fig.classList.add('is-broken'));
          modalImages.appendChild(fig);
        });
      }
      if (modalScroll) modalScroll.scrollTop = 0;
      modalCounter.textContent = `Stop ${activeStopIndex + 1} of ${visibleStops.length}`;
      modalPrevBtn.disabled = activeStopIndex === 0;
      modalNextBtn.disabled = activeStopIndex === visibleStops.length - 1;
    };

    const openModal = () => {
      if (!modalBackdrop) return;
      activeModalController = {
        pairId,
        step: (delta) => selectStop(activeStopIndex + delta, true),
      };
      syncModal();
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    if (expandBtn) {
      expandBtn.addEventListener('click', openModal);
    }

    const selectStop = (index, fly = true) => {
      if (index < 0 || index >= visibleStops.length) return;
      activeStopIndex = index;
      renderCallout();

      const stop = visibleStops[index];
      if (fly && stop) {
        map.flyTo(stop.coords, Math.max(map.getZoom(), 5), { duration: 0.65 });
        const entry = markerEntries[index];
        if (entry) entry.marker.openPopup();
      }
    };

    const rebuildMapLayers = () => {
      markerEntries.forEach((e) => map.removeLayer(e.marker));
      routeLayers.forEach((l) => map.removeLayer(l));
      markerEntries = [];
      routeLayers = [];

      visibleStops =
        activeThread === 'all'
          ? [...data.stops]
          : data.stops.filter((s) => s.thread === activeThread);

      // Draw routes
      (data.routes || []).forEach((route) => {
        if (activeThread !== 'all' && route.thread !== activeThread) return;
        const poly = L.polyline(route.coords, {
          color: route.color,
          weight: 3,
          opacity: 0.78,
          dashArray: route.dashArray || null,
        }).addTo(map);
        routeLayers.push(poly);
      });

      // Draw numbered markers
      visibleStops.forEach((stop, idx) => {
        const icon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div class="pin-badge" style="background:${stop.color}">${stop.step}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        const marker = L.marker(stop.coords, { icon })
          .addTo(map)
          .bindPopup(`<strong>${stop.step}. ${stop.place}</strong><br>${stop.title}`);

        marker.on('click', () => selectStop(idx, true));
        markerEntries.push({ marker, stop });
      });

      // Rebuild stop pills
      stopPillsEl.innerHTML = '';
      visibleStops.forEach((stop, idx) => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = 'stop-pill';
        const shortPlace = stop.place.replace(/\s*\([^)]*\)/g, '').split(',')[0].trim();
        pill.textContent = `${stop.step}. ${shortPlace}`;
        pill.addEventListener('click', () => selectStop(idx, true));
        stopPillsEl.appendChild(pill);
      });

      activeStopIndex = 0;
      renderCallout();
      fitVisibleBounds();
    };

    resetBtn.addEventListener('click', () => {
      map.closePopup();
      fitVisibleBounds();
    });

    mapEl.addEventListener('click', (e) => {
      if (e.target.closest('.leaflet-popup-close-button')) {
        fitVisibleBounds();
      }
    });

    const scrollCardToTop = () => {
      if (scrollEl) scrollEl.scrollTop = 0;
      setTimeout(() => {
        if (scrollEl) scrollEl.scrollTop = 0;
        if (panelEl) {
          const navEl = document.querySelector('.site-nav');
          const navHeight = navEl ? navEl.offsetHeight : 68;
          const y = panelEl.getBoundingClientRect().top + window.scrollY - navHeight - 12;
          window.scrollTo(0, Math.max(0, y));
        }
      }, 30);
    };

    prevStopBtn.addEventListener('click', (e) => {
      e.currentTarget.blur();
      selectStop(activeStopIndex - 1, true);
      scrollCardToTop();
    });
    nextStopBtn.addEventListener('click', (e) => {
      e.currentTarget.blur();
      selectStop(activeStopIndex + 1, true);
      scrollCardToTop();
    });

    rebuildMapLayers();

    return {
      refresh: () => {
        map.invalidateSize();
        fitVisibleBounds();
      },
    };
  };

  document.querySelectorAll('.interactive-map-mount').forEach((mountEl) => {
    const ctrl = initPairMap(mountEl);
    if (ctrl) mapControllers[mountEl.dataset.pair] = ctrl;
  });

  // Build Previous / Next pagers for each section after Overview
  sections.forEach((section, index) => {
    if (section.id === 'overview') return;

    const pager = document.createElement('div');
    pager.className = 'section-pager';

    const prevSection = sections[index - 1];
    const nextSection = sections[index + 1];

    if (prevSection) {
      const prevBtn = document.createElement('a');
      prevBtn.className = 'pager-btn';
      prevBtn.href = `#${prevSection.id}`;
      prevBtn.innerHTML = `&larr; ${sectionLabels[prevSection.id] || prevSection.id}`;
      pager.appendChild(prevBtn);
    } else {
      pager.appendChild(document.createElement('span'));
    }

    if (nextSection) {
      const nextBtn = document.createElement('a');
      nextBtn.className = 'pager-btn';
      nextBtn.href = `#${nextSection.id}`;
      nextBtn.innerHTML = `${sectionLabels[nextSection.id] || nextSection.id} &rarr;`;
      pager.appendChild(nextBtn);
    }

    section.appendChild(pager);
  });

  const showSection = (rawId, pushHistory = true) => {
    const cleanId = (rawId || '').replace(/^#/, '');
    const target = sections.find((s) => s.id === cleanId) || sections[0];
    if (!target) return;

    sections.forEach((section) => {
      section.classList.toggle('active-view', section === target);
    });

    navItems.forEach((item) => {
      const itemTarget = (item.getAttribute('href') || '').replace(/^#/, '');
      item.classList.toggle('active', itemTarget === target.id);
    });

    outlineLinks.forEach((item) => {
      const itemTarget = (item.getAttribute('href') || '').replace(/^#/, '');
      item.classList.toggle('active', itemTarget === target.id);
    });

    if (pushHistory && window.location.hash !== `#${target.id}`) {
      history.pushState(null, '', `#${target.id}`);
    }

    setOutlineOpen(false);

    if (mapControllers[target.id]) {
      setTimeout(() => mapControllers[target.id].refresh(), 60);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.closest('.leaflet-container')) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const targetId = href.replace(/^#/, '');
    if (!sections.some((s) => s.id === targetId)) return;

    e.preventDefault();
    showSection(href, true);
  });

  window.addEventListener('popstate', () => {
    showSection(window.location.hash || 'overview', false);
  });

  showSection(window.location.hash || 'overview', false);

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener(
      'scroll',
      () => {
        backToTop.classList.toggle('visible', window.scrollY > 350);
      },
      { passive: true }
    );

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
