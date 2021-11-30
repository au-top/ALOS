import axios, { AxiosRequestConfig } from 'axios';
import { loginData } from './login'

axios.defaults.withCredentials = true

interface axiosInstance {
    email: string,
}

interface repInstance<T> {
    code: number,
    data: T,
    describe: string
}


export default async (email:string) => {
    let config: AxiosRequestConfig<axiosInstance> =  {
        method: 'post',
        url: '/api/testcode/send',
        headers: { 
            'Content-Type': 'application/json', 
        },
    };
    config.data={
        email,
    }; 

    const data=(await axios(config)).data as repInstance<loginData>;
    return data
};





