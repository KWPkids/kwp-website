/* KWP site header and footer: the one place to change them for every page.
   Usage on a page:
     <body data-page="home">                      (or "story", etc.)
     <div id="site-header"></div>
     <script src="js/layout.js"></script>
     ...page content...
     <div id="site-footer"></div>
   Styles live in css/site.css. */
(function(){
  var page = document.body.getAttribute('data-page') || '';
  // Section links point at the home page; on the home page itself they just scroll.
  var home = page === 'home' ? '' : './';

  var SUBSCRIBE_URL = 'https://www.youtube.com/channel/UCIexokm6IozzPA6PbFiGcJA?sub_confirmation=1';
  var DONATE_URL = 'https://wwf2026.kidswildlifeproject.com';
  var CHANNEL_URL = 'https://www.youtube.com/@KWPKids';

  function current(name){ return page === name ? ' aria-current="page"' : ''; }

  var header =
    '<header class="nav">' +
      '<div class="wrap nav-inner">' +
        '<a class="brand" href="./" aria-label="KWP home">' +
          '<img class="brand-logo" src="asets/kwp-logo-black-transparent.png" alt="KWP — Kids Wildlife Project" />' +
        '</a>' +
        '<nav class="links">' +
          '<a href="' + home + '#videos">Videos</a>' +
          '<a href="' + home + '#explore">Explore</a>' +
          '<a href="' + home + '#grownups">Grown-ups</a>' +
          '<a href="' + home + '#support">Support</a>' +
        '</nav>' +
        '<div class="nav-actions">' +
          '<a class="btn btn-sun" href="our-story.html"' + current('story') + '>Our Story</a>' +
          '<a class="btn btn-sun nav-donate" href="' + DONATE_URL + '" target="_blank" rel="noopener">Donate to WWF</a>' +
          '<a class="btn btn-yt" href="' + SUBSCRIBE_URL + '" target="_blank" rel="noopener" aria-label="Subscribe on YouTube">' +
            '<span class="yt-ico"><svg viewBox="0 0 24 24"><path fill="#FF0033" d="M8 5v14l11-7z"/></svg></span>' +
            '<span class="label">Subscribe</span>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="site-footer">' +
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand">' +
            '<b>KWP · Kids Wildlife Project</b>' +
            '<p>A channel created for kids, by kids — sharing the wonders of nature and how to protect them.</p>' +
            '<div class="social">' +
              '<a href="' + CHANNEL_URL + '" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="#fff"><path d="M23 12s0-3.8-.5-5.6a3 3 0 0 0-2.1-2.1C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.4.5A3 3 0 0 0 1.5 6.4C1 8.2 1 12 1 12s0 3.8.5 5.6a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.6.5-5.6zM10 15.5v-7l6 3.5z"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4>Explore</h4>' +
            '<a href="' + home + '#videos">Videos</a>' +
            '<a href="' + home + '#explore">Creatures &amp; plants</a>' +
            '<a href="' + home + '#explore">Habitats</a>' +
            '<a href="' + home + '#explore">Nature heroes</a>' +
            '<a href="our-story.html">Our story</a>' +
          '</div>' +
          '<div>' +
            '<h4>Connect</h4>' +
            '<a href="' + home + '#grownups">For grown-ups</a>' +
            '<a href="' + home + '#contact">Send us a message</a>' +
            '<a href="' + DONATE_URL + '" target="_blank" rel="noopener">Donate to WWF</a>' +
            '<a href="mailto:hi@kidswildlifeproject.org">hi@kidswildlifeproject.org</a>' +
            '<a href="' + CHANNEL_URL + '" target="_blank" rel="noopener">@KWPKids</a>' +
          '</div>' +
        '</div>' +
        '<div class="foot-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' Kids Wildlife Project. Made with curiosity.</span>' +
          '<span>For kids · For nature · For the future</span>' +
        '</div>' +
      '</div>' +
    '</footer>';

  // The header slot sits above this script tag, so fill it right away (no flash).
  var headerSlot = document.getElementById('site-header');
  if (headerSlot) headerSlot.outerHTML = header;

  function fillFooter(){
    var footerSlot = document.getElementById('site-footer');
    if (footerSlot) footerSlot.outerHTML = footer;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fillFooter);
  else fillFooter();
})();
