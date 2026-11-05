(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const visit = $('.visit-section');
  if (visit) {
    const word = document.createElement('div');
    word.className = 'footer-zone';
    word.textContent = 'The Zone';
    word.setAttribute('aria-hidden', 'true');
    visit.insertBefore(word, $('.visit-foot', visit));
  }

  const rail = document.body.classList.contains('bar') && $('[data-gallery=bar]');
  if (rail) {
    const label = document.createElement('div');
    label.className = 'gallery-rail-label';
    label.innerHTML = '<span>THE ZONE / PHOTOGRAPHS</span><span>DRAG OR SWIPE TO EXPLORE</span>';
    rail.before(label);
    let down = false, start = 0, left = 0, dragged = false;
    rail.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      down = true; dragged = false; start = e.clientX; left = rail.scrollLeft;
      rail.classList.add('dragging');
    });
    window.addEventListener('pointermove', e => {
      if (!down) return;
      const distance = e.clientX - start;
      if (Math.abs(distance) > 6) dragged = true;
      if (dragged) { e.preventDefault(); rail.scrollLeft = left - distance; }
    });
    const endDrag = () => {
      down = false; rail.classList.remove('dragging');
      setTimeout(() => { dragged = false; }, 0);
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    rail.addEventListener('click', e => {
      if (dragged) { e.preventDefault(); e.stopImmediatePropagation(); }
    }, true);
  }
  if (reduce) return;

  $$('h2.reveal').forEach(heading => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    let index = 0;
    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(word => {
        if (!word) return;
        if (/^\s+$/.test(word)) { fragment.append(document.createTextNode(word)); return; }
        const mask = document.createElement('span');
        mask.className = 'word-reveal';
        mask.style.setProperty('--word-i', Math.min(index++, 10));
        const inner = document.createElement('span');
        inner.textContent = word; mask.append(inner); fragment.append(mask);
      });
      node.replaceWith(fragment);
    });
  });

  const hero = $('.opening'), brand = $('.hero-brand'), light = $('.hero-atmosphere');
  const cue = hero && $('.scroll-cue', hero);
  const choose = $('.choose-scene'), chooser = $('.choose-pinned');
  const food = $('.food-story'), cards = $$('.story-card'), counter = $('.story-pagination b');
  const storyButtons = $$('[data-story-jump]');
  const cover = $('.cover-window'), coverImage = $('.cover-window>img');
  const night = $('.night-cover'), nightBackground = $('.night-bg img');
  const nightType = $('.night-type'), inset = $('.night-inset');
  const sequence = $('.night-sequence'), frames = $('.sequence-frames');
  const sequenceCards = $$('.sequence-frame'), sequenceCount = $('.sequence-count');
  const parallax = $$('.film-space>img,.kitchen-image img');
  const photos = document.body.classList.contains('restaurant') ? $$('.gallery-photo') : [];
  let target = scrollY, current = scrollY, frameId = 0, running = false;
  let foodIndex = -1, sequenceIndex = -1, heroVisible = true;

  storyButtons.forEach(button => button.addEventListener('click', e => {
    if (e.detail > 0) button.blur();
    if (food) window.scrollTo({
      top: food.offsetTop + (food.offsetHeight - innerHeight) * Number(button.dataset.storyJump),
      behavior: 'smooth'
    });
  }));

  const menu = $('.menu-items');
  if (menu && 'MutationObserver' in window) {
    let pending = 0;
    new MutationObserver(() => {
      if (pending) cancelAnimationFrame(pending);
      pending = requestAnimationFrame(() => {
        pending = 0;
        // Expanding the whole menu must not create hundreds of simultaneous animations.
        [...menu.children].slice(0, 12).forEach((element, i) => element.animate(
          [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 550, delay: Math.min(i, 10) * 28, easing: 'cubic-bezier(.16,1,.3,1)' }
        ));
      });
    }).observe(menu, { childList: true });
  }

  const pauseTitle = () => document.body.classList.toggle('hero-paused', !heroVisible || document.hidden);
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      pauseTitle();
    }).observe(hero);
  }

  function frame() {
    current += (target - current) * .12;
    if (Math.abs(current - target) < .2) current = target;
    const delta = scrollY - current, vh = innerHeight, vw = innerWidth;
    // Collect layout measurements before writing transforms, clips, counters or ARIA state.
    const rect = element => element && element.getBoundingClientRect();
    const rHero = rect(hero), rChoose = rect(choose), rCover = rect(cover);
    const rFood = rect(food), rNight = rect(night), rSequence = rect(sequence);
    const travel = frames ? Math.max(0, frames.scrollWidth - vw) : 0;
    const parallaxRects = parallax.map(image => rect(image.parentElement));
    const photoRects = vw > 700 ? photos.map(rect) : [];
    const visible = r => r && r.top < vh && r.bottom > 0;

    if (rHero && brand) {
      const p = clamp((-rHero.top - delta) / vh);
      brand.style.transform = `translateY(calc(-50% + ${p * -85}px)) scale(${1 - p * .12})`;
      brand.style.opacity = String(1 - clamp(p * 1.5));
      light.style.opacity = String(1 - clamp(p * 1.2));
      if (cue) cue.style.opacity = String(1 - clamp(p * 4));
    }
    if (visible(rChoose) && chooser) {
      const clip = (1 - clamp(1 - rChoose.top / vh)) * 8;
      chooser.style.clipPath = `inset(${clip}% ${clip * .7}% ${clip}% ${clip * .7}%)`;
    }
    if (visible(rCover) && coverImage) {
      const p = clamp((vh - rCover.top) / (vh + rCover.height));
      coverImage.style.transform = `translateY(${(p - .5) * 85}px) scale(${1.08 - p * .08})`;
      const clip = clamp((rCover.top - vh * .15) / (vh * .8)) * 1.3;
      cover.style.clipPath = `inset(0 ${clip}% 0 ${clip}%)`;
    }
    if (visible(rFood)) {
      const p = clamp((-rFood.top - delta) / Math.max(1, rFood.height - vh));
      cards.forEach((card, i) => {
        if (i === 0) {
          card.style.transform = `translateY(${-p * 18}px) rotate(${-p * 5}deg) scale(${1 - p * .1})`;
        } else {
          const enter = clamp((p - (i === 1 ? .12 : .57)) / .34);
          card.style.transform = `translateY(${(1 - enter) * 130}%) rotate(${(1 - enter) * (i === 1 ? 9 : -8)}deg) scale(${.96 + enter * .04})`;
        }
      });
      const index = p < .43 ? 0 : p < .85 ? 1 : 2;
      if (index !== foodIndex) {
        foodIndex = index;
        if (counter) counter.textContent = `0${index + 1}`;
        storyButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      }
    }
    if (visible(rNight) && nightBackground) {
      const p = clamp((-rNight.top - delta) / rNight.height);
      nightBackground.style.transform = `translateY(${p * 170}px) scale(${1.08 + p * .12})`;
      nightType.style.transform = `translateY(${p * -75}px)`;
      inset.style.transform = `translateY(${p * -130}px) rotate(${-7 + p * 12}deg)`;
    }
    if (visible(rSequence) && frames) {
      const p = clamp((-rSequence.top - delta) / Math.max(1, rSequence.height - vh));
      frames.style.transform = `translateX(${-p * travel}px)`;
      sequenceCards.forEach((element, i) => {
        element.style.transform = `rotate(${(i % 2 ? -1 : 1) * (p - .5) * 11}deg) translateY(${Math.sin((p + i * .25) * Math.PI) * -20}px)`;
      });
      const index = Math.min(3, Math.floor(p * 3) + 1);
      if (sequenceCount && index !== sequenceIndex) {
        sequenceIndex = index; sequenceCount.textContent = `0${index} — 03`;
      }
    }
    parallax.forEach((image, i) => {
      const r = parallaxRects[i];
      if (visible(r)) image.style.transform = `translateY(${((vh - r.top) / (vh + r.height) - .5) * 90}px) scale(1.1)`;
    });
    photoRects.forEach((r, i) => {
      if (r.top < vh * 1.5 && r.bottom > -200) {
        photos[i].style.translate = `0 ${((vh - r.top) / (vh + r.height) - .5) * (i % 2 ? 45 : -30)}px`;
      }
    });
    if (current !== target && !document.hidden) frameId = requestAnimationFrame(frame);
    else running = false;
  }
  function schedule() {
    target = scrollY;
    if (!running && !document.hidden) { running = true; frameId = requestAnimationFrame(frame); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);
  document.addEventListener('visibilitychange', () => {
    pauseTitle();
    if (document.hidden) { cancelAnimationFrame(frameId); running = false; }
    else schedule();
  });
  schedule();
})();
