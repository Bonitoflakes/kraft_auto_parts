import express from "express";
import { getAllCustomers } from "./controllers/customer.controller";

const app = express();

app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.get("/customers", async (req, res) => {
  const data = await getAllCustomers();
  res.send(data);
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
