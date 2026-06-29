/* ─── A Dog's Guide — Shared Web Components ─── */

/* <site-nav root="../../"></site-nav>
   root: relative path back to adogsguide/ root (e.g. "" | "../" | "../../") */
class SiteNav extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute('root') || '';
    this.innerHTML = `
      <nav>
        <div class="nav-inner">
          <a href="${root}index.html" class="nav-logo">A Dog's Guide</a>
          <ul class="nav-links">
            <li><a href="${root}index.html#destinations">Destinations</a></li>
            <li><a href="${root}index.html#about">About</a></li>
            <li><a href="${root}index.html#scale">Golden Paw Scale</a></li>
            <li><a href="https://www.instagram.com/adogsguide" target="_blank" rel="noopener" class="nav-cta">Instagram</a></li>
          </ul>
          <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>`;
  }
}
customElements.define('site-nav', SiteNav);

/* <site-footer type="london" root="../"></site-footer>
   type: "home" | "london" | "lake-district"
   root: relative path back to adogsguide/ root */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute('root') || '';
    const type = this.getAttribute('type') || 'home';

    const destNav = {
      home: `
            <div class="footer-nav">
              <h4>Destinations</h4>
              <ul>
                <li><a href="${root}london.html">London</a></li>
                <li><a href="${root}lake-district.html">Lake District</a></li>
              </ul>
            </div>`,
      london: `
            <div class="footer-nav">
              <h4>London</h4>
              <ul>
                <li><a href="${root}london.html">Overview</a></li>
                <li><a href="${root}london/restaurants.html">Restaurants</a></li>
                <li><a href="${root}london/hotels.html">Hotels</a></li>
                <li><a href="${root}london/itineraries.html">Itineraries</a></li>
              </ul>
            </div>`,
      'lake-district': `
            <div class="footer-nav">
              <h4>Lake District</h4>
              <ul>
                <li><a href="${root}lake-district.html">Overview</a></li>
                <li><a href="${root}lake-district/restaurants.html">Restaurants</a></li>
                <li><a href="${root}lake-district/hotels.html">Hotels</a></li>
                <li><a href="${root}lake-district/walks.html">Walks</a></li>
              </ul>
            </div>`,
    }[type] || '';

    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-inner">
            <div class="footer-brand">
              <a href="${root}index.html" class="nav-logo">A Dog's Guide</a>
              <p>Dog-friendly travel, honestly rated. Independently researched guides for people who never travel without their dog.</p>
            </div>${destNav}
            <div class="footer-nav">
              <h4>More</h4>
              <ul>
                <li><a href="${root}index.html#about">About</a></li>
                <li><a href="${root}index.html#scale">Golden Paw Scale</a></li>
                <li><a href="https://www.instagram.com/adogsguide" target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
            <div class="footer-nav">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2026 A Dog's Guide. All rights reserved.</p>
            <p>adogsguide.co.uk</p>
          </div>
        </div>
      </footer>`;
  }
}
customElements.define('site-footer', SiteFooter);
