import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URL}/models`;

export const getModelsService = async() => {
    const resp = await axios.get(URL);

    return resp.data;
}

