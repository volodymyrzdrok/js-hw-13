import './styles.css';
import debounce from 'lodash.debounce';
import apiService from './js/apiService.js';
import updateArticlesMarkup from './js/update-articles-markup.js';
import refs from './js/refs';

refs.searchForm.addEventListener(
  'input',
  debounce(() => {
    setUrl();
  }, 550),
);

function setUrl() {
  apiService.query = refs.searchInput.value;
  if (apiService.query === '') {
    return;
  }
  apiService.resetPage();
  refs.articlesContainer.innerHTML = '';
  apiService.fetchArticles().then(hits => {
    updateArticlesMarkup(hits);
  });
}

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchArticles().then(hits => {
    updateArticlesMarkup(hits);
  });
});
