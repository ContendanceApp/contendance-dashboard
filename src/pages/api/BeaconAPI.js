import axios from "./config";

export const createBeacon = async (payload) => {
  try {
    const response = await axios.post("/beacons/create", payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBeacon = async () => {
  try {
    const response = await axios.get("/beacons");
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteBeacon = async (id) => {
  try {
    const response = await axios.delete(`/beacons/delete/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBeaconByID = async (id) => {
  try {
    const response = await axios.get(`/beacons/${id}`);
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const updateBeacon = async (id, payload) => {
  try {
    const response = await axios.put(`/beacons/update/${id}`, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};
