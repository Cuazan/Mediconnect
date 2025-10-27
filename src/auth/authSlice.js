import { createSlice } from "@reduxjs/toolkit";

const authSile = createSlice({
    name: 'auth',
    initialState: {user: null, token:null},
    reducers:{
        setCredentiales: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) =>{
            state.user = null
            state.token = null
        }
    }
})

export const{ setCredentiales, logOut} = authSile.actions

export default authSile.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token