import AdministrationServices from "../services/administrationServices";

export const SET_CONTENT = 'SET_CONTENT';
export const SET_ENTRY = 'SET_ENTRY';
export const CLEAR_ENTRY = 'CLEAR_ENTRY';
export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';



export const setContent = (conetnt) => ({
  type: SET_CONTENT,
  payload: conetnt,
})
export const setEntry = (entry) => ({
  type: SET_ENTRY,
  payload: entry,
})
export const clearEntry = () => ({
  type: CLEAR_ENTRY,
})
export const addLocalEntry = (entry) => ({
  type: ADD_ENTRY,
  payload: entry,
})
export const updateLocalEntry = (entry) => ({
  type: UPDATE_ENTRY,
  payload: entry,
})
export const deleteLocalEntry = (entryId) => ({
  type: DELETE_ENTRY,
  payload: entryId,
})


export const getAllEntries = (entityName) => (dispatch) => {
  AdministrationServices.getAll(entityName)
    .then((result) => {
      dispatch(
        setContent(result),
      );
    })
    .catch((err) => {
      console.error(err)
    })
}
export const getEntry = (entityName, id) => (dispatch) => {
  AdministrationServices.getbyId(entityName, id)
    .then((result) => {
      dispatch(
        setEntry(result),
      );
    })
    .catch((err) => {
      console.error(err)
    })
}
export const updateEntry = (entityName, id, newEntry) => (dispatch) => {
  AdministrationServices.update(entityName, id, newEntry)
    .then(() => {
      dispatch(
        updateLocalEntry(newEntry),
      );
    })
    .catch((err) => {
      console.error(err)
    })
}
export const createEntry = (entityName, entry) => (dispatch) => {
  AdministrationServices.create(entityName, entry)
    .then((result) => {
      dispatch(
        addLocalEntry(result),
      );
    })
    .catch((err) => {
      console.error(err)
    })
}
export const deleteEntry = (entityName, id) => (dispatch) => {
  AdministrationServices.delete(entityName, id)
    .then(() => {
      dispatch(
        deleteLocalEntry(id),
      );
    })
    .catch((err) => {
      console.error(err)
    })
}