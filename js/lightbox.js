// Click-to-enlarge lightbox for project screenshots.
// Works on any page that has .screenshot-grid img elements.
document.addEventListener('DOMContentLoaded', function () {
  var thumbs = document.querySelectorAll('.screenshot-grid img');
  if (!thumbs.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close" aria-label="Close">&times;</span><img class="lightbox-img" src="" alt="">';
  document.body.appendChild(overlay);

  var lightboxImg = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    overlay.classList.add('active');
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    lightboxImg.src = '';
  }

  thumbs.forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  // Click the dark backdrop (not the image itself) to close
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
