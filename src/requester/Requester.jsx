import axios from "axios";
const BASE_URL = ' https://mediconnectapi-aba9aqgefddremg5.centralus-01.azurewebsites.net'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const axiosPrivateInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content Tyoe': 'application/json',
        withCredentials: true
    }
});

export async function UserLogin({ email, password }) {
    try {
        const response = await axiosInstance.post('/api/Auth/login', { email, password },
            {
                headers: {

                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                }
            }
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function GetMedics() {
     try {
        const response = await axiosInstance.get('/api/Doctors');
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}
