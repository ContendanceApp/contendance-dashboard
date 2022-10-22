import axios from "./config";

export const createRuangan = async (payload) => {
  try {
    const response = await axios.post("/rooms/create", payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getRuangan = async () => {
  try {
    const response = await axios.get("/rooms");
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteRuangan = async (id) => {
  try {
    const response = await axios.delete(`/rooms/delete/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getRuanganByID = async (id) => {
  try {
    const response = await axios.get(`/rooms/${id}`);
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const updateRuangan = async (id, payload) => {
  try {
    const response = await axios.put(`/rooms/update/${id}`, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};
