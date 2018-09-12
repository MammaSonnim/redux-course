export const initialState = {
    year: 2016,
    photos: []
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_YEAR':
            return { ...state, year: action.payload };
        default:
            return state;
    }

}