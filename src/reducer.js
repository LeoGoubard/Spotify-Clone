export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // Remove after finished developing...
    token: 'BQAhNv6NFMQWwxoahd1W0eGzdFNP1wv8VPas2Nw8dabjVRZpOpmo9iLPErqlMabxGXQgPSnJjjZ4hI_VOPVzHac4uveUdOr46rbFm_dXHHewqGtoiDBNDYSFiIsavmGaqmjKrFYN6vuUVV9mytaYtDuBpYFzisxB',
};

const reducer = (state, action) => {
console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        default:
            return state;
    }

}

export default reducer;