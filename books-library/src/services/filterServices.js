import Axios from "axios";
import authHeader from "../Helpers/authHeader";

export default {
    update: (filter) => Axios.post("/api/Books/api/books/filterOptions", filter, authHeader)
}