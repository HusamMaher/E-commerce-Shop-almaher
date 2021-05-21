import { AUTH } from "../constants/AuthConstants";
import * as api from "../../api/index";
import axios from "axios";
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post("/users/signin", formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log("im herer");
    const { data } = await axios.post("/users/signup", formData);
    console.log("im herer");
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
