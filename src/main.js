import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  createGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    return iziToast.error({
      message: 'Fill in the field!',
      position: 'topRight',
    });
  }

  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message: 'Sorry, no images found. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
      iziToast.error({
        message: `Error: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });

  input.value = '';
});
