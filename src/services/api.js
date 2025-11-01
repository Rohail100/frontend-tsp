import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Get data example: getposts("/staff")
export const get = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Post data example: post("/appointment", appointmentData)
export const post = async (url,data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
