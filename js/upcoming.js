const API_KEY_UP = '3a5ac2e6748595f19d888fcfffc5107b';
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY_UP}&language=en-US&page=1`

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVhYzJlNjc0ODU5NWYxOWQ4ODhmY2ZmZmM1MTA3YiIsIm5iZiI6MTcyMTg2MTI5Mi41MTkyMDgsInN1YiI6IjY2YTBmMzNjNGVlN2Y5ZjBlZGRkNzgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WZQc9A-xAldKQYs9PWt_stjqCW14d2O8rpjhaE-_eqk'
    }
};

fetch(UPCOMING_URL)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
        const upComingMovies = data.results;
        // console.log(upComingMovies);
        const upComingContainer = document.getElementById('upcoming_container');
        let upCome = upComingMovies[Math.floor(Math.random() * upComingMovies.length)];
        const comeCard = randomMovie(upCome);


        upComingContainer.appendChild(comeCard);
    })
    .catch(err => console.error(err));


// * 랜덤으로 영화 불러오기 *
function randomMovie(upCome) {
    const newDiv = document.createElement('div');
    newDiv.className = 'upcoming_div'
    newDiv.innerHTML =
        `
        
    <img src="https://image.tmdb.org/t/p/w500/${upCome.backdrop_path}"  alt="${upCome.title}" />
    <div class="upcoming_text">
        <h2 class="under_line">UpComing Movies!</h2>
        <h3>${upCome.title}</h3>
        <p>${upCome.overview}</p>
    </div>
    
    `
    return newDiv;
}