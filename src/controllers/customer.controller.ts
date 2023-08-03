import { Prisma, PrismaClient, Customer } from "@prisma/client";

type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

const prisma = new PrismaClient();

export async function getAllCustomers() {
  const customers = await prisma.customer.findMany();
  return customers;
}

export async function getCustomerByCode(customerCode: string) {
  const customer = await prisma.customer.findUnique({
    where: { customerCode: customerCode },
  });

  return customer;
}

export async function createCustomer(customerData: CustomerCreateInput) {
  const customer = await prisma.customer.create({
    data: customerData,
  });
  return customer;
}

export async function updateCustomer(customerCode: string, data: CustomerUpdateInput) {
  const customer = await prisma.customer.update({
    where: { customerCode: customerCode },
    data,
  });
  return customer;
}

export async function deleteCustomer(customerCode: string) {
  const customer = await prisma.customer.delete({
    where: { customerCode: customerCode },
  });
  return customer;
}
