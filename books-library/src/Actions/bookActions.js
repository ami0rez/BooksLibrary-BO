import bookServices from "../services/bookServices";

export const SET_BOOKS = 'SET_BOOKS';
export const ADD_BOOKS = 'ADD_BOOKS';
export const SET_HAS_MORE = 'SET_HAS_MORE';

export const setBooks = (books) => ({
	type: SET_BOOKS,
	payload: books,
})
export const addBooks = (books) => ({
	type: ADD_BOOKS,
	payload: books,
})
export const setHasMore = (hasMore) => ({
	type: SET_HAS_MORE,
	payload: hasMore,
})



export const getFilteresBooks = (filters) => (dispatch) => {
	console.log(filters);

	bookServices.getFiltered(filters)
		.then(
			result => {
				dispatch(
					setBooks(result)
				);
				dispatch(
					setHasMore(true)
				);
			},
			error => {
				console.error(error);
			}
		);
}
export const addFilteresBooks = (start, length) => (dispatch, getState) => {
	var filters = getFiltersFormState(getState());
	filters = {
		...filters,
		start: start,
		length: length,
	}
	bookServices.getFiltered(filters)
		.then((filters) => {
			if (filters.length === 0) {
				dispatch(
					setHasMore(false)
				);
				console.log('has noooooooooooooooooo moire');

			}
			return filters;
		}
		)
		.then(
			result => {
				dispatch(
					addBooks(result)
				);
			},
			error => {
				console.error(error);
			}
		);
}

const getFiltersFormState = (state) => {
	if (state
		&& state.filters
		&& state.filters.options
	) {
		return state.filters.options;
	}
	return {};
}