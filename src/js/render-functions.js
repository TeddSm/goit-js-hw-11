import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

export function createGallery(images) {
  let markup = '';
  images.forEach(image => {
    markup += `<li class="gallery-item"><a href="${image.largeImageURL}"><img class="gallery-img" src="${image.webformatURL}" alt="${image.alt}"></a><div class=container><div class="text-box"><h3>Likes</h3><p>${image.likes}</p></div><div class="text-box"><h3>Views</h3><p>${image.views}</p></div><div class="text-box"><h3>Comments</h3><p>${image.comments}</p></div><div class="text-box"><h3>Downloads</h3><p>${image.downloads}</p></div></div></li>`;
  });
  ul.insertAdjacentHTML('beforeend', markup);

  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function clearGallery() {
  ul.innerHTML = '';
  if (lightbox) {
    lightbox.refresh();
  }
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}
