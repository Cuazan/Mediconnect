import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentiales, logOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl
})