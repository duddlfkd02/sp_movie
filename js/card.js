import { getPopularList } from "./getdata.js";
// 데이터 가져오기


export const popularFunc = async () => {
    const data = await getPopularList();
    // console.log(data);
    const movies = data.results;
    // console.log(movies);
    const movieContainer = document.getElementById('card_container');
    movies.forEach(movie => {
        const card = makeMovieCard(movie);
        movieContainer.appendChild(card);
    })
}
popularFunc();


// * 카드 생성 *
function makeMovieCard(movie) {
    // console.log(movie)
    const cardDiv = document.createElement('div');
    const vote = (movie.vote_average);
    const voteAver = vote.toFixed(2)
    cardDiv.className = 'cardBox';
    cardDiv.innerHTML =
        `
            <p class="card_score"><i class="fa-solid fa-ranking-star"></i> ${voteAver}</p>
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"  alt="${movie.title}" />
            <h3 id="card_title" class="card_title">${movie.title}</h3>
            <p id="cardInfo" class="cardInfo">${movie.overview}</p>
        `
    cardDiv.addEventListener('click', () => {
        alert(`This Movie's ID is "${movie.id}"`);
    })
    return cardDiv;
};


// * 검색기능 *
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const upcomingContainer = document.getElementById('upcoming_container');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // 검색창 입력 값에 따른 조건 (1. 아무것도 입력하지 않았을 때, 검색하면 upcoming 사라지기.)
    if (searchInput.value === "") {
        alert("영화 제목을 입력해주세요.");
    } else if (searchInput.value) {
        upcomingContainer.style.display = 'none';
    } else {
        upcomingContainer.style.display = 'block';
    }

    searchCards();

})


// 검색값 포함되는 것만 보여주기
function searchCards() {
    const movieCards = document.querySelectorAll('.cardBox');
    movieCards.forEach(card => {
        const searchContent = searchInput.value.toLowerCase();
        const movieTitle = card.querySelector('h3').textContent.toLowerCase();
        if (movieTitle.includes(searchContent)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}

searchInput.addEventListener('input', (e) => {
    let keyUpValues = e.target.value;
    // // console.log(keyUpValues)
    searchCards(keyUpValues);
    if (keyUpValues) {
        upcomingContainer.style.display = 'none';
    } else {
        upcomingContainer.style.display = 'block';
    }
})


export { searchCards, makeMovieCard };