import filterServices from "../services/filterServices";
import { getFilteresBooks } from "./bookActions";

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const SET_OPTIONS = 'SET_OPTIONS';
export const SET_BOOK_NAME = 'SET_BOOK_NAME';

export const updateFilters = (filter) => ({
  type: UPDATE_FILTERS,
  payload: filter
})

export const setSelectedOptions = (options) => ({
  type: SET_OPTIONS,
  payload: options,
})

export const setBookName = (name) => ({
  type: SET_BOOK_NAME,
  payload: name,
})


export const getFilters = (filter) => (dispatch) => {
  dispatch(
    setSelectedOptions(filter),
  );
  filterServices.update(filter)
    .then(
      result => {
        dispatch(
          updateFilters(result)
        );
      },
      error => {
        console.error(error);

      }
    );
  dispatch(
    getFilteresBooks(filter),
  );
};