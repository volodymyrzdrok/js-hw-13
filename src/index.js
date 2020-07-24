import './styles.css';
import debounce from 'lodash.debounce';
import apiService from './js/apiService.js';
import updateArticlesMarkup from './js/update-articles-markup.js';
import refs from './js/refs';

// import basicLightbox from 'basiclightbox';

// const htmlInstance = basicLightbox.create(document.querySelector('#html'));
// const imageInstance = basicLightbox.create(document.querySelector('#image'));
// document.querySelector('button.image').onclick = imageInstance.show;

refs.searchForm.addEventListener(
  'input',
  debounce(() => {
    setUrl();
  }, 550),
);

function setUrl() {
  apiService.query = refs.searchInput.value;
  apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.articlesContainer.innerHTML = '';
  apiService.fetchArticles().then(hits => {
    updateArticlesMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchArticles().then(hits => {
    updateArticlesMarkup(hits);
  });
});
