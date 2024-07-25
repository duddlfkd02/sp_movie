// 본인 API 키
const API_KEY = '3a5ac2e6748595f19d888fcfffc5107b';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

//* API 불러온 후 데이터 처리
fetch(URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        console.log(movies);
        const movieContainer = document.getElementById('card_container');//카드들 전체가 담기는 큰 박스
        movies.forEach(movie => {
            const card = makeMovieCard(movie);
            movieContainer.appendChild(card);
        });


    })
    .catch(error => console.error('Error:', error));

// * 카드 생성 *
function makeMovieCard(movie) {
    const cardDiv = document.createElement('div');
    const vote = (movie.vote_average);
    const voteAver = vote.toFixed(2)
    cardDiv.className = 'cardBox';
    cardDiv.innerHTML =
        `
            <p class="card_score">${voteAver}</p>
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"  alt="${movie.title}" />
            <h3 id="card_title" class="card_title">${movie.title}</h3>
            <p id="cardInfo" class="cardInfo">${movie.overview}</p>
                    
        `
    cardDiv.addEventListener('click', () => {
        alert(movie.id);
    })
    return cardDiv;
};


// * 검색기능 *
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchInput.value === "") {
        alert("영화 제목을 입력해주세요.")
    }
    const searchContent = searchInput.value.toLowerCase();
    const movieCards = document.querySelectorAll('.cardBox');
    movieCards.forEach(card => {
        const movieTitle = card.querySelector('h3').textContent.toLowerCase();
        if (movieTitle.includes(searchContent)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
})
