import Axios from "axios";
import authHeader from "../Helpers/authHeader";
const requestOptions = {
    headers: authHeader(),
};
export default {
    getFiltered: (filter, start, length) => Axios.post(
        `http://localhost:5000/api/Books/api/books/filterBooks`,
        filter,
        requestOptions,
    )
        .then(response => response.data)
}
