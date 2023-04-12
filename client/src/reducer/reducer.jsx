export const initialState = {
    courses: [],
    users: [],
    modules: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "RegisterUser": // condition
            return {
                ...state,
                users: [...state.users, action.newUser],
            };
        default:
            return state;
    }
};

export default reducer;
