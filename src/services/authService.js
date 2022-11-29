import axios from "axios";

const URL= `${process.env.REACT_APP_API_URL}/auth`;

export const loginService = async (data) =>{
  const resp = await axios.post(`${URL}/login`, data);
  return resp.data;
}
