import { SET_BOOKS, SET_HAS_MORE } from './../Actions/bookActions'

const initailState = {
    books: [],
    hasMore: true,
}

export default (state = initailState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return ({
                ...state,
                books: action.payload
            })
        case SET_HAS_MORE:
            return ({
                ...state,
                hasMore: action.payload
            })
        default:
            return state;
    }
}