import axios from "axios";

const url = "http://localhost:5000/users";

const register = async (credentials) => {
    try {
        const res = await axios.post(url, credentials);
        if(res.status === 201) {
            return res.data;
        }
        throw new Error('Invalid.');
    } catch (err) {
        throw new Error(err);
    }
}

export default { register };