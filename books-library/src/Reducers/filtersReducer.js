import { UPDATE_FILTERS, SET_OPTIONS, SET_BOOK_NAME } from "../Actions/filterActions"


const initialState = {
  filters: {},
  options: { authors: [], editors: [], categories: [], subCategories: [], tags: [], tag: [] },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return ({
        ...state,
        filters: action.payload
      });
    case SET_OPTIONS:
      return ({
        ...state,
        options: {
          ...state.options,
          ...action.payload
        }
      });
    case SET_BOOK_NAME:
      return ({
        ...state,
        options: {
          ...state.options,
          bookName: action.payload,
        }
      });
    default:
      return state;
  }
}