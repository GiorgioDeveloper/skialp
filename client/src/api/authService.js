import axios from "axios";

export const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
});

export const signup = user => {
  return service.post("auth/signup", user);
};

// vedi auth.js riga 75
export const loginAPI = async user => {
  try {
    const { data } = await service.post("/auth/login", user);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const isLoggedIn = async () => {
  try {
    const { data } = await service.get("/auth/isLoggedIn");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    const { data } = await service.get("/auth/logout");

    return data;
  } catch (err) {
    console.log(err);
  }
};
