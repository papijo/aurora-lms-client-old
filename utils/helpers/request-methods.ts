"use client";
import { CreateAxiosInstance } from "./axios-connectors";

export const GetRequest = async (
  url: string,
  accesstoken: string,
  params = {}
) => {
  const axiosInstance = CreateAxiosInstance(accesstoken);
  try {
    const res = await axiosInstance.get(url, { params });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    if (error.response && error.response.data.message === "Expired Token") {
      console.log("expired token");
      throw new Error("ExpiredAccessToken");
    } else if (
      error.response &&
      error.response.data.message === "Unauthorised, no access token"
    ) {
      console.log("no access token");
      throw new Error("MissingAccessToken");
    } else {
      console.log(error.message);
    }
    throw error; // Propagate the error so the caller can handle it if needed
  }
};

export const PostRequest = async (
  url: string,
  accesstoken: string,
  values = {}
) => {
  const axiosInstance = CreateAxiosInstance(accesstoken);

  try {
    const res = await axiosInstance.post(url, values);
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error: any) {
    if (error.response && error.response.data.message === "Expired Token") {
      console.log("expired token");
      throw new Error("ExpiredAccessToken");
    } else if (
      error.response &&
      error.response.data.message === "Unauthorised, no access token"
    ) {
      console.log("no access token");
      throw new Error("MissingAccessToken");
    } else {
      console.log(error.message);
    }
    throw error; // Propagate the error so the caller can handle it if needed
  }
};
