import axios from "axios";

const url = "http://localhost:5000/login";

const login = async (credentials) => {
    try {
        const res = await axios.post(url, credentials);
        if(res.status === 200) {
            return res.data;
        }
        if(res.status === 400) {
            return {message: "Invalid username and password combination."};
        }
    } catch (err) {
        return {message: "Invalid username and password combination."};
    }
}

export default { login };