import { getPopularList } from "./getdata.js";
import { randomMovie, upcomeFunc } from './upcoming.js';
import { searchCards, makeMovieCard } from './card.js';
upcomeFunc();
getPopularList();
randomMovie();
searchCards();
makeMovieCard();