import { getUpcomeList } from "./getdata.js";

// 영화 api 가져오기
export const upcomeFunc = async () => {
    const data = await getUpcomeList();
    // console.log(data);

    const upComingMovies = data.results;
    // console.log(upComingMovies);
    const upComingContainer = document.getElementById('upcoming_container');
    let upCome = upComingMovies[Math.floor(Math.random() * upComingMovies.length)];
    const comeCard = randomMovie(upCome);

    upComingContainer.appendChild(comeCard);
}



// * 랜덤으로 영화 불러오기 *
function randomMovie(upCome) {
    console.log(upCome);
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

export { randomMovie };