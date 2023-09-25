import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts : builder.query({
            query : () => ({
                url: PRODUCTS_URL,
            }), 
            keepUnusedDataFor: 5,
        })
    }),
});

export const {useGetProductsQuery} = apiSlice;
//Need to add "use" to the beginning and "Query" to the end of the function name to export it