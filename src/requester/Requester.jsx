import axios from "axios";
const BASE_URL = 'https://mediconnectapi-aba9aqgefddremg5.centralus-01.azurewebsites.net'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
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
        const response = await axiosInstance.get('/api/Doctors',
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                }
            }

        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}


export async function GetAppointment() {
    try {
        const response = await axiosInstance.get('/api/Appointments',
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                }
            }
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function PostAppointment(appointmentInfo) {
    try {
        const response = await axiosInstance.post('/api/Appointments',
            appointmentInfo,
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                },

            },
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}


export async function GetPatients() {
    try {
        const response = await axiosInstance.get('/api/Patients',
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                }
            }

        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function GetClinicalHistory(id) {
    try {
        const response = await axiosInstance.get(`/api/ClinicalHistory/${id}`,
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                }
            }

        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function GetMedicalRecords(id) {
    try {
        const response = await axiosInstance.get(`/api/MedicalRecords/${id}`,
            {
                headers: {
                    'X-User-Id': 1,
                    'X-User-Role': 'Admin'
                }
            }

        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function DeleteAppointment(id) {
    try {
        const response = await axiosInstance.delete(`/api/Appointments/${id}`,
            {
                headers: {
                    'X-User-id': 1,
                    'X-User-role': 'Admin'
                }
            }
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}