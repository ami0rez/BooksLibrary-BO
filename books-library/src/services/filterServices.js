import Axios from "axios";
import authHeader from "../Helpers/authHeader";
const requestOptions = {
  headers: authHeader(),
};
export default {
  update: (filter) => Axios.post(
    `http://localhost:5000/api/Books/api/books/filterOptions`,
    filter,
    requestOptions,
  )
    .then(response => response.data)
}
