"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerByCode = exports.getAllCustomers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllCustomers() {
    return __awaiter(this, void 0, void 0, function* () {
        const customers = yield prisma.customer.findMany();
        return customers;
    });
}
exports.getAllCustomers = getAllCustomers;
function getCustomerByCode(customerCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield prisma.customer.findUnique({
            where: { customerCode: customerCode },
        });
        return customer;
    });
}
exports.getCustomerByCode = getCustomerByCode;
function createCustomer(customerData) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield prisma.customer.create({
            data: customerData,
        });
        return customer;
    });
}
exports.createCustomer = createCustomer;
function updateCustomer(customerCode, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield prisma.customer.update({
            where: { customerCode: customerCode },
            data,
        });
        return customer;
    });
}
exports.updateCustomer = updateCustomer;
function deleteCustomer(customerCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = yield prisma.customer.delete({
            where: { customerCode: customerCode },
        });
        return customer;
    });
}
exports.deleteCustomer = deleteCustomer;
