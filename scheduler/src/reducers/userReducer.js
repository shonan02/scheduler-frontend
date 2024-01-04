import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import { useSearchParams } from "react-router-dom";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        setUser(state, action) {
            return action.payload;
        },
        removeUser(state, action) {
            return null;
        }
    }
})

export const loginUser = (user) => {
    return async dispatch => {
        try {
            const loggedUser = await loginService.login(user);
            window.localStorage.setItem("user-token", JSON.stringify(loggedUser));
            dispatch(setUser(loggedUser));
        } catch(err) {
            console.log(err);
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            dispatch(removeUser());
            //Reset all values
            localStorage.removeItem("user-token");
            localStorage.clear();
        } catch (err) {
            console.log(err);
        }
    }
}

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;