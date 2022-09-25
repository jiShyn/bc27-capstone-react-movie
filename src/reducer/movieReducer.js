const initialState = {
   movies: null,
   moviesList: null,
   bookingList: [],
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
         console.log('123')
         return { ...state, moviesList: action.cinemaName };

      case "getChairs":
         return { ...state, chairs: action.chairList };

      case "select":
         const check = state.bookingList.findIndex(
            (chair) => chair.tenGhe === action.selectedChair.tenGhe
         );
         if (check === -1) {
            const newChair = [
               ...state.bookingList,
               { ...action.selectedChair, isSelected: true },
            ];
            return { ...state, bookingList: newChair };
         }

         const newChair = state.bookingList.filter(
            (chair) => chair.tenGhe !== action.selectedChair.tenGhe
         );
         return { ...state, bookingList: newChair };

      case "remove":
         return { ...state, bookingList: [] };

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
