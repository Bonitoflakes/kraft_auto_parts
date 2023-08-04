import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/GlobalErrorHandler";

type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

const prisma = new PrismaClient();

export async function getAllCustomers(req: Request, res: Response) {
  const customers = await prisma.customer.findMany();
  return res.send(customers);
}

export async function getCustomerByCode(req: Request, res: Response, next: NextFunction) {
  try {
    const customerCode = Number(req.params.customerCode);

    const customer = await prisma.customer.findUnique({
      where: { customerCode },
    });

    if (!customer) throw new CustomError("Customer not found", 424);

    return res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
}

export async function createCustomer(req: Request, res: Response, next: NextFunction) {
  try {
    const customerData: CustomerCreateInput = req.body.customerData;
    const customer = await prisma.customer.create({
      data: customerData,
    });

    if (!customer) throw new CustomError("Customer not created", 401);

    return res.json(customer);
  } catch (error) {
    next(error);
  }
}

export async function updateCustomer(req: Request, res: Response) {
  const customerCode = Number(req.params.customerCode);
  const data: CustomerUpdateInput = req.body;
  const customer = await prisma.customer.update({
    where: { customerCode },
    data,
  });
  return res.json(customer);
}

export async function deleteCustomer(req: Request, res: Response) {
  const customerCode = Number(req.params.customerCode);
  const customer = await prisma.customer.delete({
    where: { customerCode },
  });
  return res.json(customer);
}
