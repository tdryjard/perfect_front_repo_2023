// services/userApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import fetch from "node-fetch";

interface User {
  id: number;
  name: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => "user",
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
