import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import { movies } from '../../data.js';
import {
  NEXT_MOVIE,
  PREV_MOVIE,
  ADD_MOVIE_TO_FAVS,
  REMOVE_MOVIE_FROM_FAVS,
} from '../actions/index.js';
import FavMovie from '../../components/FavMovie.jsx';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };

    case PREV_MOVIE:
      return { ...state, sira: state.sira - 1 };

    case ADD_MOVIE_TO_FAVS:
      const currentMovie = state.movies[state.sira];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: state.movies.filter((movie) => movie.id != currentMovie.id),
        sira:
          state.movies.length - state.sira == 1
            ? state.sira == 0
              ? 0
              : state.sira - 1
            : state.sira,
      };

    case REMOVE_MOVIE_FROM_FAVS:
      const movieToRemove = state.favMovies.find(
        (movie) => movie.id == action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id != action.payload
        ),
        movies: [...state.movies, movieToRemove],
      };
    default:
      return state;
  }
}
