import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URL}/products`;

export const getBrandsService = async() => {
    const resp = await axios.get(URL);

    return resp.data;
}

export const getBrandService = async(uid) =>{
    const resp = await axios.get(`${URL}/${uid}`);
    return resp.data;
}
