import { userSignIn } from "../../API/auth";

export const login = async (user, callback) => {
  const { username, password } = user;
  await userSignIn({ email: username, password: password })
    .then((response) => {
      localStorage.setItem("accessToken", response.data?.token);
      callback(true, response);
      console.log(response, "dewjdgewdhew");
    })
    .catch((error) => {
      console.log(error.response, "dewdwedewdwedw");
      callback(false, error.response);
    });
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};

export const isLoggedIn = () => {
  if (localStorage.getItem("accessToken")) {
    return true;
  }
  return false;
};
