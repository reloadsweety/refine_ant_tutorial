import axios, { AxiosRequestConfig } from "axios";

import { AuthProvider } from "@pankod/refine-core";

const enum ROLE {
    ADMIN = 'admin',
    EDITOR = 'editor'
}

export const mockUsers = [
    {
        username: "admin",
        email: "test",
        password: "1234",
        roles: [ROLE.ADMIN],
        token: 'ABCD1234'
    },
    {
        username: "editor",
        email: "test",
        password: "1234",
        roles: [ROLE.EDITOR],
        token: 'ABCD1234'
    }
];

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    // Here we can perform any function we'd like on the request
    (request: AxiosRequestConfig) => {
        const auth = localStorage.getItem("auth") || "";
        if (!auth) return request;

        // Retrieve the token from local storage
        const token = JSON.parse(auth);
        if (!token) return request;

        // Check if the header property exists
        if (request.headers) {
            // Set the Authorization header if it exists
            request.headers["Authorization"] = `Bearer ${token}`;
        } else {
            // Create the headers property if it does not exist
            request.headers = {
                Authorization: `Bearer ${token}`,
            };
        }

        return request;
    },
);

export const authProvider: AuthProvider = {
    login: ({ email, username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => (item.email === email) || (item.username === username && item.password === password));

        if (user) {
            localStorage.setItem("auth", JSON.stringify(user));
            localStorage.setItem("remember", remember);
            return Promise.resolve();
        }

        return Promise.reject({
            name: "Login Failed!",
            message: "The username or password that you've entered doesn't match any account.",
        });
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        if (error.status !== 200) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.reject();
    },
    getUserIdentity: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            // const parsedUser = JSON.parse(auth);
            // return Promise.resolve(parsedUser.username);
            const user = {
                id: 1,
                name: "Gor Sut Lame",
                avatar: "https://i.pravatar.cc/150",
            };
            return Promise.resolve(user);
        }
        return Promise.reject();
    },
};