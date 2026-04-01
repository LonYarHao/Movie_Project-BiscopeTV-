import { ActionType } from "../../action/action-type"

const initialState = {
    movies: [],
    movie: {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_MOVIES:
            // Keep existing movie so Details page doesn't lose its data
            return { ...state, movies: payload };
        case ActionType.SELECT_MOVIE:
            return { ...state, movie: payload };
        case ActionType.REMOVE_SELECTED_MOVIE:
            return { ...state, movie: {} };
        default:
            return state;
    }
}