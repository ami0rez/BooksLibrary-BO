import Axios from "axios";

export default {
    getAll: (entity) => Axios.get(`https://localhost:5001/api/${entity}`).then((response) => response.data),
    getbyId: (entity, id) => Axios.get(`https://localhost:5001/api/${entity}/${id}`).then((response) => response.data),
    create: (entity, entry) => Axios.post(`https://localhost:5001/api/${entity}`, entry).then((response) => response.data),
    update: (entity, id, entry) => Axios.put(`https://localhost:5001/api/${entity}/${id}`, entry).then((response) => response.data),
    delete: (entity, id) => Axios.delete(`https://localhost:5001/api/${entity}/${id}`).then((response) => response.data),
}