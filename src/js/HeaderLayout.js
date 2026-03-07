(function(){
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const circle = document.getElementById("themeCircle");
    const html = document.documentElement;
    const logo = document.getElementById("brandLogo");

    if (!toggle || !circle || !logo) return;
    const isDark = html.classList.contains("dark");
    if (isDark) {
      circle.classList.add("translate-x-5");
      logo.setAttribute("src", "/KINASIS_logo_verde.png");
    } else {
      circle.classList.remove("translate-x-5");
      logo.setAttribute("src", "/KINASIS_logo_red.png");
    }
    toggle.addEventListener("click", () => {
      const newIsDark = html.classList.toggle("dark");

      if (newIsDark) {
        circle.classList.add("translate-x-5");
        localStorage.theme = "dark";
        logo.setAttribute("src", "/KINASIS_logo_verde.png");

        const oldStyle = document.querySelector("style[data-theme-logo]");
        if (oldStyle) oldStyle.remove();

        const style = document.createElement("style");
        style.dataset.themeLogo = "true";
        style.textContent = "img#brandLogo{content:url('/KINASIS_logo_verde.png') !important;}";
        document.head.appendChild(style);
      } else {
        circle.classList.remove("translate-x-5");
        localStorage.theme = "light";
        logo.setAttribute("src", "/KINASIS_logo_red.png");

        const oldStyle = document.querySelector("style[data-theme-logo]");
        if (oldStyle) oldStyle.remove();

        const style = document.createElement("style");
        style.dataset.themeLogo = "true";
        style.textContent = "img#brandLogo{content:url('/KINASIS_logo_red.png') !important;}";
        document.head.appendChild(style);
      }
    });

    const headerEl = document.querySelector('.header');
    if (headerEl && headerEl instanceof HTMLElement) {
      const setHeaderHeightVar = () => {
        document.documentElement.style.setProperty('--header-h', `${headerEl.offsetHeight}px`);
      };
      setHeaderHeightVar();
      window.addEventListener('resize', setHeaderHeightVar);
    }

    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (menuToggle && mobileNav) {
      mobileNav.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');

      function setMobileNavLinksTabIndex(visible) {
        if (!mobileNav) return;
        mobileNav.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach(el => {
          if (visible) {
            el.removeAttribute('tabindex');
          } else {
            el.setAttribute('tabindex', '-1');
          }
        });
      }
      setMobileNavLinksTabIndex(false);
      menuToggle.addEventListener('click', () => {
        const isHidden = mobileNav.classList.contains('hidden');
        if (isHidden) {
          mobileNav.classList.remove('hidden');
          mobileNav.classList.add('open');
          mobileNav.setAttribute('aria-hidden', 'false');
          setMobileNavLinksTabIndex(true);
          menuToggle.setAttribute('aria-expanded', 'true');
          menuToggle.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('open');
          mobileNav.setAttribute('aria-hidden', 'true');
          setMobileNavLinksTabIndex(false);
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.classList.remove('open');
          document.body.style.overflow = '';
        }
      });

      mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('open');
          mobileNav.setAttribute('aria-hidden', 'true');
          setMobileNavLinksTabIndex(false);
          menuToggle.setAttribute('aria-expanded', 'false');
          document.documentElement.style.overflow = '';
        });
      });

      document.addEventListener('click', (ev) => {
        if (!mobileNav.classList.contains('hidden')) {
          const target = ev.target;
          if (target instanceof Node) {
            if (!mobileNav.contains(target) && !menuToggle.contains(target)) {
              mobileNav.classList.add('hidden');
              mobileNav.classList.remove('open');
              mobileNav.setAttribute('aria-hidden', 'true');
              setMobileNavLinksTabIndex(false);
              menuToggle.setAttribute('aria-expanded', 'false');
              document.documentElement.style.overflow = '';
            }
          }
        }
      });

      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('open');
          mobileNav.setAttribute('aria-hidden', 'true');
          setMobileNavLinksTabIndex(false);
          menuToggle.setAttribute('aria-expanded', 'false');
          document.documentElement.style.overflow = '';
        }
      });
    }
  });
})();
