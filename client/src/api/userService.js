import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
});

export const createTour = async tour => {
  try {
    const { data } = await service.post("/create-tour", tour);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createProfile = async profile => {
  try {
    const { data } = await service.post("/profile", profile);

    return data;
  } catch (err) {
    console.log(err);
  }
};
