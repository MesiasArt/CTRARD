const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 780) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const photoViewer = document.querySelector('#photo-viewer');
const viewerImage = document.querySelector('#viewer-image');
const photoCounter = document.querySelector('#photo-counter');
let activePhoto = 0;
let previousOverflow = '';
function showPhoto(index) {
  activePhoto = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[activePhoto];
  viewerImage.src = photo.src;
  viewerImage.alt = photo.alt;
  photoCounter.textContent = `${activePhoto + 1} / ${galleryPhotos.length}`;
}
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    showPhoto(Number(button.dataset.photo));
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    photoViewer.showModal();
  });
});
photoViewer.querySelector('.viewer-close').addEventListener('click', () => photoViewer.close());
photoViewer.querySelector('.viewer-prev').addEventListener('click', () => showPhoto(activePhoto - 1));
photoViewer.querySelector('.viewer-next').addEventListener('click', () => showPhoto(activePhoto + 1));
photoViewer.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
photoViewer.addEventListener('click', event => { if (event.target === photoViewer) photoViewer.close(); });
photoViewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(activePhoto + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
let touchStartX = null;
viewerImage.addEventListener('touchstart', event => { touchStartX = event.touches[0].clientX; }, { passive: true });
viewerImage.addEventListener('touchend', event => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 45) showPhoto(activePhoto + (distance < 0 ? 1 : -1));
  touchStartX = null;
}, { passive: true });
viewerImage.addEventListener('touchcancel', () => { touchStartX = null; });
