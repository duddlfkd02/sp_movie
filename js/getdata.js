const API_KEY = '3a5ac2e6748595f19d888fcfffc5107b';

// 1. upcoming data api
export const getUpcomeList = async () => {
    const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVhYzJlNjc0ODU5NWYxOWQ4ODhmY2ZmZmM1MTA3YiIsIm5iZiI6MTcyMjI5MzI3My42OTc2NjUsInN1YiI6IjY2YTBmMzNjNGVlN2Y5ZjBlZGRkNzgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tNMHpWgb-skCNM_03gJo6hTxvtD8eOkElQAFabjZwTM'
        }
    };

    const response = await fetch(UPCOMING_URL, options).then((res) => res.json());
    return response;
}

// 2. popular data api
export const getPopularList = async () => {
    const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVhYzJlNjc0ODU5NWYxOWQ4ODhmY2ZmZmM1MTA3YiIsIm5iZiI6MTcyMTg2MTI5Mi41MTkyMDgsInN1YiI6IjY2YTBmMzNjNGVlN2Y5ZjBlZGRkNzgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WZQc9A-xAldKQYs9PWt_stjqCW14d2O8rpjhaE-_eqk'
        }
    };

    const response = await fetch(POPULAR_URL, options).then((res) => res.json());
    return response;
}