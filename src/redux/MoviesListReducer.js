const MOVIES_LIST = "MOVIES_LIST";
const SHOW_FILM_INFO = "SHOW_FILM_INFO";
const GET_ID = "GET_ID";

const initionalState = {
    setMoviesList: [],
    filmInfo: null,
    getId: []
}

const MuviesListReducer = (state = initionalState, action)=> {
    switch (action.type) {
        case MOVIES_LIST:
            return {
                ...state,
                setMoviesList: [...action.list]
            };
            case SHOW_FILM_INFO:
            return {
                ...state,
                filmInfo: [...action.info]
            };
            case GET_ID:
                return {
                    ...state,
                    getId: action.id
                }
        default:
            return state;
    }
};

export const moviesListAC = (list)=> ({
    type: MOVIES_LIST,
    list
});

export const showFilmInfoAC = (info)=> ({
    type: SHOW_FILM_INFO,
    info
})

export const getIdAC = (id)=> ({
    type: GET_ID,
    id
})

export default MuviesListReducer;