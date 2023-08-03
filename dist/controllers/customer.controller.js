"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerByCode = exports.getAllCustomers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getAllCustomers() {
    const customers = await prisma.customer.findMany();
    return customers;
}
exports.getAllCustomers = getAllCustomers;
async function getCustomerByCode(customerCode) {
    const customer = await prisma.customer.findUnique({
        where: { customerCode: customerCode },
    });
    return customer;
}
exports.getCustomerByCode = getCustomerByCode;
async function createCustomer(customerData) {
    const customer = await prisma.customer.create({
        data: customerData,
    });
    return customer;
}
exports.createCustomer = createCustomer;
async function updateCustomer(customerCode, data) {
    const customer = await prisma.customer.update({
        where: { customerCode: customerCode },
        data,
    });
    return customer;
}
exports.updateCustomer = updateCustomer;
async function deleteCustomer(customerCode) {
    const customer = await prisma.customer.delete({
        where: { customerCode: customerCode },
    });
    return customer;
}
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customer.controller.js.map