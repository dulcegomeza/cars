import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URL}/models`;

export const getModelsService = async() => {
    const resp = await axios.get(URL);

    return resp.data;
}

export const getModelsPaginateService = async (data) => {

    const result = await axios.post(`${URL}/paginate`, data) 
    console.log(result); 
    return result.data;
  };

  export const getModelByIdService = async(uid)=>{
    console.log(uid);
    const resp = await axios.get(`${URL}/${uid}`);
    return resp.data;
}
