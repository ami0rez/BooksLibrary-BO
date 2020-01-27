import Axios from "axios";
import authHeader from "../Helpers/authHeader";
const requestOptions = {
  headers: authHeader(),
};
export default {
  getAll: (entity) => Axios.get(`https://localhost:5001/api/${entity}`, requestOptions).then((response) => response.data),
  getbyId: (entity, id) => Axios.get(`https://localhost:5001/api/${entity}/${id}`, requestOptions).then((response) => response.data),
  create: (entity, entry) => Axios.post(`https://localhost:5001/api/${entity}`, entry, requestOptions).then((response) => response.data),
  update: (entity, id, entry) => Axios.put(`https://localhost:5001/api/${entity}/${id}`, entry, requestOptions).then((response) => response.data),
  delete: (entity, id) => Axios.delete(`https://localhost:5001/api/${entity}/${id}`, requestOptions).then((response) => response.data),
  profile: () => Axios.get(`https://localhost:5001/api/Accounts/profile`, requestOptions).then((response) => response.data),
  updareProfile: (profile) => Axios.put(`https://localhost:5001/api/Accounts/profile`, profile, requestOptions).then((response) => response.data),
}