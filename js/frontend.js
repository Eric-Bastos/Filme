document.addEventListener('DOMContentLoaded', () => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => {
        const movieList = document.getElementById('movie-list');
        data.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.textContent = movie.title;
          movieList.appendChild(movieItem);
        });
      })
      .catch(error => console.error('Erro ao carregar filmes:', error));
  });
  