export const initialState = {
    isLoading: false,
    error: null,
    link: '',
    result: null,
    histories: []
}

export const actionTypes = {
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_LINK: 'SET_LINK',
    SET_ERROR: 'SET_ERROR',
    SET_RESULT: 'SET_RESULT',
    SET_HISTORIES: 'SET_HISTORIES',
    FETCH_DATA: 'FETCH_DATA',
}

const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.loading
            }
        case actionTypes.SET_LINK:
            return {
                ...state,
                link: action.link
            }
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SET_RESULT:
            return {
                ...state,
                result: action.result
            }
        case actionTypes.SET_HISTORIES:
            return {
                ...state,
                histories: action.histories
            }
        default:
            return state
    }
}

export default reducer;