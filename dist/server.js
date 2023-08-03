"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./controllers/customer.controller");
const app = (0, express_1.default)();
app.get("/health", (req, res) => {
    res.send("Hello World!");
});
app.get("/customers", async (req, res) => {
    const data = await (0, customer_controller_1.getAllCustomers)();
    res.send(data);
});
app.listen(3333, () => {
    console.log("Server is running on port 3333");
});
//# sourceMappingURL=server.js.map