import { useDispatch } from "react-redux";
import { logout } from "../reducers/userReducer";

export const logoutUser = () => {
    //Call redux
    const dispatch = useDispatch();
    console.log("logut");
    dispatch(logout());
}