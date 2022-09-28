function login(email, senha) {
    return new Promise((resolve, reject) => {
        return api.post(`/login`, { email, senha })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function logout(email, senha) {
    return new Promise((resolve, reject) => {
        return api.delete(`/logout`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    login,
    logout
}