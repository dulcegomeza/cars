import axios from "axios";

const URL = `${process.env.REACT_APP_API_URL}/users`;

const configHeader = {
  headers: {
    "x-token": localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE),
  },
};


export const signupService = async (data) =>{
  const resp = await axios.post(URL, data);
  return resp.data;
}

export const getUserService = async(uid)=>{
  console.log(uid);
  const resp = await axios.get(`${URL}/${uid}`, configHeader);
  return resp.data;
}

export const verifyingTokenService = async () => {
  const result = await axios.get(`${URL}`, configHeader);  
  return result.data;
};

