const apiKey = '15400175-8ce22b8808542891276b8dfa1';

export default {
  searchQuery: '',
  page: 1,

  fetchArticles() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
