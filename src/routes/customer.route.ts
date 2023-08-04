import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerByCode,
  updateCustomer,
} from "../controllers/customer.controller";

export const Router = express.Router();

Router.get("/all", getAllCustomers);
Router.post("/new", createCustomer);
Router.route("/:customerCode").get(getCustomerByCode).patch(updateCustomer).delete(deleteCustomer);
