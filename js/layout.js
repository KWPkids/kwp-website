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

  var SUBSCRIBE_URL = 'https://www.youtube.com/@KWPKids?sub_confirmation=1';
  var DONATE_URL = 'https://wwf2026.kidswildlifeproject.com';
  var TIKTOK_URL = 'https://www.tiktok.com/@kwpkids';
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
          '<a class="btn btn-tt" href="' + TIKTOK_URL + '" target="_blank" rel="noopener" aria-label="Follow us on TikTok">' +
            '<svg viewBox="0 0 24 24" fill="#fff"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>' +
            '<span class="label">TikTok</span>' +
          '</a>' +
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
              '<a href="' + TIKTOK_URL + '" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="#fff"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>' +
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
