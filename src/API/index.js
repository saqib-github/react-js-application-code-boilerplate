// auth api's
import axios from "axios";

const API = axios.create({ baseURL: `place base url here please` });

// Add a response interceptor
API.interceptors.response.use(
  (response) => {
    // console.log(response.data.success, 'dewfgewfhewhfvhewvhfvewhvf');
    // console.log(response.data.response, 'dewfgewfhewhfvhewvhfvewhvf');
    // if ('Not authorized to perform this action.') {
    //     // logoutUserIfNotAuthenticated();
    // }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const CallPostMethod = (url, data, headers) =>
  API.post(url, data, { headers: { ...headers, accept: "application/json" } });
export const CallGetMethod = (url, params, headers) =>
  API.get(params ? url + params : url, {
    headers: { ...headers, accept: "application/json" },
  });

export const CallDeleteMethod = (url, params, headers) =>
  API.delete(params ? url + params : url, {
    headers: { ...headers, accept: "application/json" },
  });
