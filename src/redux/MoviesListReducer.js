const MOVIES_LIST = "MOVIES_LIST";
const SHOW_FILM_INFO = "SHOW_FILM_INFO";
const GET_STAFF = "GET_STAFF";

const initionalState = {
    setMoviesList: [],
    filmInfo: {},
    getStaff: []
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
                filmInfo: {...action.info}
            };
            case GET_STAFF:
                return {
                    ...state,
                    getStaff: action.staff
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

export const getStaffAC = (staff)=> ({
    type: GET_STAFF,
    staff
})

export default MuviesListReducer;