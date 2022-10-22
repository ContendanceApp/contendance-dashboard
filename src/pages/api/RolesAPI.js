import axios from "./config";

export const createRoles = async (payload) => {
  try {
    const response = await axios.post("/roles/create", payload);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get("/roles");
    console.log(response?.data);
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteRoles = async (id) => {
  try {
    const response = await axios.delete(`/roles/delete/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getRolesByID = async (id) => {
  try {
    const response = await axios.get(`/roles/${id}`);
    return response?.data?.data;
  } catch (error) {
    return error.response;
  }
};

export const updateRoles = async (id, payload) => {
  try {
    const response = await axios.put(`/roles/update/${id}`, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};
