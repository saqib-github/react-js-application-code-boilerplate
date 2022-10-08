import axios from "axios";

export function post(obj, callback) {
  const { url, data, type, params, redirect } = obj;
  let { headers } = obj;
  headers = headers
    ? {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        ...headers,
      }
    : {};

  return function (dispatch) {
    return axios
      .post(process.env.REACT_APP_BASE_URL + url, data, {
        headers: {
          token: "Bearer " + localStorage.getItem("accessToken"),
          language: localStorage.language,
          ...headers,
        },
      })
      .then(({ data }) => {
        dispatch({
          type,
          response: data,
          redirect,
          params,
        });
        callback(false, data);
      })
      .catch((error) => {
        callback(error, false);
      });
  };
}

export function get(obj, callback) {
  const { url, type, key, params } = obj;
  return function (dispatch) {
    return axios
      .get(process.env.REACT_APP_BASE_URL + url, {
        headers: {
          token: "Bearer " + localStorage.getItem("accessToken"),
          language: localStorage.language,
        },
      })
      .then((data) => {
        dispatch({
          type: type,
          key,
          response: data,
          params,
        });
        callback(false, data);
      })
      .catch((error) => {
        callback(error, false);
      });
  };
}

export function put(obj, callback) {
  const { url, data, type, redirect, params } = obj;
  return function (dispatch) {
    return axios
      .put(process.env.REACT_APP_BASE_URL + url, data, {
        headers: {
          token: "Bearer " + localStorage.getItem("accessToken"),
          language: localStorage.language,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: type,
          response: data,
          redirect: redirect,
          params,
        });
        callback(false, data);
      })
      .catch((error) => {
        callback(error, false);
      });
  };
}

export function remove(obj, callback) {
  const { url, type, params } = obj;
  return function (dispatch) {
    return axios
      .delete(process.env.REACT_APP_BASE_URL + url, {
        headers: {
          token: "Bearer " + localStorage.getItem("accessToken"),
          language: localStorage.language,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: type,
          response: data,
          params,
        });
        callback(false, data);
      })
      .catch((error) => {
        callback(error, false);
      });
  };
}
