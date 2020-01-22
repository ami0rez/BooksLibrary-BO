import Axios from "axios";
import authHeader from "../Helpers/authHeader";

export default {
    login,
    logout,
    authHeader: authHeader(),
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return Axios.post(`https://localhost:5001/api/Accounts/authenticate`, { email, password }, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            console.log("user is set");
            return user;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    const data = response.data;
    if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}


// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader(),
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }