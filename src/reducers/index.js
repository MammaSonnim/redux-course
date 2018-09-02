export const initialState = {
    user: {
        name: 'Anon',
        surname: 'Test',
        age: '80'
    }
};

export function rootReducer(state = initialState) {
    return state;
}