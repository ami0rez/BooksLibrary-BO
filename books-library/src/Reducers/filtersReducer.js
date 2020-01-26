import { UPDATE_FILTERS, SET_OPTIONS } from "../Actions/filterActions"


const initialState = {
  filters: {},
  options: {}
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
        options: action.payload
      });
    default:
      return state;
  }
}