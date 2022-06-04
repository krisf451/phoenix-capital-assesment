import axios from "axios";

export const API = axios.create({
  baseURL: "https://damp-beach-20320.herokuapp.com/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

//landholdings endpoints
export const fetchAllLandHoldings = () => API.get("/landHoldings");
export const fetchLandHoldingById = (id) => API.get(`/landHoldings/${id}`);
export const createLandHoldings = (landHolding) =>
  API.post("/landHoldings", landHolding);
export const deleteLandHolding = (id) => API.delete(`/landHoldings/${id}`);
export const updateLandHolding = (id, updatedLandHolding) =>
  API.put(`/landHoldings/${id}`, updatedLandHolding);

//owner endpoints
export const fetchAllOwners = () => API.get("/owners");
export const fetchOwnerById = (id) => API.get(`/owners/${id}`);
export const createOwner = (owner) => API.post("/owners", owner);
export const deleteOwner = (id) => API.delete(`/owners/${id}`);
export const updateOwner = (id, updatedOwner) =>
  API.put(`/owners/${id}`, updatedOwner);

//auth endpoints
export const signin = (formData) => API.post("/auth/signin", formData);
export const signup = (formData) => API.post("/auth/signup", formData);
