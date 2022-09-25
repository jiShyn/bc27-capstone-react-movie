const initialState = {
   movies: null,
   moviesList: null,
   selectedChairs: [],
   movieId: null,
   movieInfo: null,
   theaterList: [],
   chairs: [],
};

const movieReducer = (state = initialState, action) => {
   switch (action.type) {
      case "location":
         return { ...state, movies: action.cinemaCode };

      case "movieList":
         console.log("123");
         return { ...state, moviesList: action.cinemaName };

      // case "getChairs":
      //    return { ...state, chairs: action.chairList };

      case "select":
         const check = state.selectedChairs.findIndex(
            (chair) => chair.tenGhe === action.selectedChair.tenGhe
         );
         if (check === -1) {
            const newChair = [
               ...state.selectedChairs,
               { ...action.selectedChair, isSelected: true },
            ];
            return { ...state, selectedChairs: newChair };
         }

         const newChair = state.selectedChairs.filter(
            (chair) => chair.tenGhe !== action.selectedChair.tenGhe
         );
         return { ...state, selectedChairs: newChair };

      case "remove":
         return { ...state };

      case "getMovieId":
         return { ...state, movieId: action.movie };

      case "getMovieInfo":
         return { ...state, movieInfo: action.movie };

      case "theaterList":
         return { ...state, theaterList: action.theater };

      default:
         return state;
   }
};

export default movieReducer;
