import api from "@/lib/api";

export const loginUser = async (payload) => {

  const response = await api.post(
    "/services/login",
    payload
  );

  return response.data;
};

export const registerUser = async (payload) => {

  const response = await api.post(
    "/services/register",
    payload
  );

  return response.data;
};