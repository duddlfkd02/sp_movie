import { getUpcomeList } from "./getdata.js";


export const upcomeFunc = async () => {
    const data = await getUpcomeList();
    // console.log(data);

    const upComingMovies = data.results;
    // console.log(upComingMovies);
    const upComingContainer = document.getElementById('upcoming_container');

    // * 랜덤으로 영화가져오기 *
    let upCome = upComingMovies[Math.floor(Math.random() * upComingMovies.length)];
    const comeCard = randomMovie(upCome);

    upComingContainer.appendChild(comeCard);
}



// * 영화 이미지 뼈대 그리기 *
function randomMovie(upCome) {
    // console.log(upCome);
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
