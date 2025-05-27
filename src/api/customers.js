import api from "./axiosClient"

// Get customers

export const getCustomers = () => api.get("/customers").then(r => r.data)

// Get customer :/id

export const getCustomer = id => api.get(`/customers/${id}`).then(r => r.data)

// Create customer

export const createCustomer = body => api.post("/customers", body).then(r => r.data)

//Put - Update customers

export const updateCustomer = body => api.put("/customers", body).then(r => r.data)

// Delete customer

export const deleteCustomer = id => api.delete(`/customers/${id}`)

