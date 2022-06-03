import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export const fetchAllLandHoldings = () => API.get("/landHoldings");
export const fetchLandHoldingById = (id) => API.get(`/landHoldings/${id}`);
export const createLandHoldings = (landHolding) =>
  API.post("/landHoldings", landHolding);
export const deleteLandHolding = (id) => API.delete(`/landHoldings/${id}`);
export const updateLandHolding = (id, updatedLandHolding) =>
  API.put(`/landHoldings/${id}`, updatedLandHolding);

export const signin = (formData) => API.post("/auth/signin", formData);
export const signup = (formData) => API.post("/auth/signup", formData);
