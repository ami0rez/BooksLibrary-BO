import * as admin from "../Actions/AdministrationActions"

const initailState = {
  content: [],
  entry: undefined
}


export default (state = initailState, action) => {
  switch (action.type) {
    case admin.SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      }

    case admin.SET_ENTRY:
      return {
        ...state,
        entry: action.payload,
      }

    case admin.CLEAR_ENTRY:
      return {
        ...state,
        entry: {}
      }

    case admin.ADD_ENTRY:
      return {
        ...state,
        content: [
          action.payload,
          ...state.content,
        ]
      }

    case admin.UPDATE_ENTRY:
      return {
        ...state,
        content: state.content && state.content.length
          ? state.content.map((entry) => entry.id === action.payload.id ? action.payload : entry)
          : []
      }

    case admin.DELETE_ENTRY:
      return {
        ...state,
        content: state.content.filter((entry) => entry.id !== action.payload)
      }

    default:
      return state;
  }
}