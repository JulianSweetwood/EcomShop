import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login : builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method:"POST",
                body: data,
            }), 
        }),

    }),
});

export const {useLoginMutation } = usersApiSlice;
//Need to add "use" to the beginning and "Query" to the end of the function name to export it