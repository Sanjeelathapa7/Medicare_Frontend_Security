import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//configuration for axios

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};


// create product API
export const createProductApi = (formData) =>
  Api.post("/api/product/create_product", formData);

// get products API
export const getAllProductsApi = () => Api.get("/api/product/get_products");

//get single product API
export const getSingleProductApi = (id) =>
  Api.get(`/api/product/get_product/${id}`);

//update product
export const updateProductApi = (id, formData) =>
  Api.put(`/api/product/update_product/${id}`, formData, config);

//delete product
export const deleteProductApi = (id) =>
  Api.delete(`/api/product/delete_product/${id}`, config);


//for profile 
export const getUserProfileApi = () => {
  return Api.get("/api/user/profile", config); // Ensure `config` is passed here
};
export const updateUserProfileApi = (userId, data) =>
  Api.put(`/api/user/update_profile/${userId}`, data,config);

  


//login
export const loginApi = (data) => Api.post("/api/user/login", data)
export const registerApi = (data) => Api.post("/api/user/register", data)
export const contactApi=(data)=> Api.post("/api/user/contact",data)

//dashboard 
export const dashboardApi = (data) => Api.post("/api/user/dashboard", data)

//homeoage 
export const homepageApi = (data) => Api.post("/api/user/homepage", data)


//for forget pass
export const sendEmailApi = (data) =>
  Api.post("/api/user/reset_password", data);
export const verifyCodeApi = (data) =>
  Api.post("/api/user/reset_code", data, config);
export const updatePasswordApi = (data) =>
  Api.post("/api/user/update_password", data);

  //cart APIs
export const createCartApi = (data) => Api.post("/api/user/create_cart", data);
export const getCartApi = (id) => Api.get(`/api/user/get_cart/${id}`);
export const deleteCartApi = (id) =>
  Api.delete(`/api/user/remove_cart/${id}`, config);

export const orderCategory = (data) => Api.post(`/api/order/create`, data);
export const getOrders = () => Api.get(`/api/order/getOrders`, config);
export const getOrdersByuserId = (userId) =>
  Api.get(`/api/order/getOrdersByUser/${userId}`);
export const updateOrdersApi = (orderId, formData) =>
  Api.put(`/api/order/update_order/${orderId}/status`, formData, config);


//payment api 
export const getPaymentApi = (data) =>
  Api.get("/api/user/payment", data);

  // fav
export const addFavoriteApi = (data) => Api.post("/api/user/add_fav", data);
export const getFavoritesApi = (id) => Api.get(`/api/user/get_fav/${id}`);
export const removeFavoriteApi = (id) =>
  Api.delete(`/api/user/remove_fav/${id}`, config);