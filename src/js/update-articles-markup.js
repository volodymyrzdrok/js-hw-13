import refs from './refs';
import articlesTpl from '../templates/articles.hbs';

function updateArticlesMarkup(hits) {
  const markup = articlesTpl(hits);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;
