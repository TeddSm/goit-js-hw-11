import axios from 'axios';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '50657355-1f50b208caae537516d7ab71b',
        q: query,
        orientation: 'horizontal',
        safesearch: true,
        image_type: 'photo',
      },
    })
    .then(response => {
      return response.data.hits.map(hit => ({
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        alt: hit.tags,
        likes: hit.likes,
        views: hit.views,
        comments: hit.comments,
        downloads: hit.downloads,
      }));
    });
}
