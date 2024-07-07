export const filterReducer = (state = '', action)=> {
    switch(action.type){
        case 'SET_FILTER':
            return state = action.payload;

        default:
            return state
    }
};

export const changeFilter = (filter)=> {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
};