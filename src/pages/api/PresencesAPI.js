import axios from "./config";

export const getPresences = async () => {
  try {
    const response = await axios.get("/presences");
    console.log(response?.data);
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};
