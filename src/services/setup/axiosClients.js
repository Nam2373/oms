import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://10.0.100.118:8089",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    // console.log(params)
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);
export default axiosClient;
