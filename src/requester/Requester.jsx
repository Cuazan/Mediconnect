import axios from "axios";

const axiosInstance = axios.create({
    baseURL: ' https://mediconnectapi-aba9aqgefddremg5.centralus-01.azurewebsites.net',
    timeout: 5000
});

export async function UserLogin({userCredentials}) {
    try {
        const response = await axiosInstance.post('', userCredentials);
        return response.data
    } catch (error) {
        console.log(error)
    }
}