import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Johnson',
      phone: '+(00)123-345-3456',
      address: 'Av London #124 NWS',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found.`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId += 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const user = this.findOne(id);
    if (!user) {
      return null;
    }
    const index = this.getIndex(id);
    this.customers[index] = {
      ...user,
      ...payload,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.getIndex(id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found.`);
    }
    return this.customers.splice(index, 1);
  }

  private getIndex(id: number) {
    return this.customers.findIndex((item) => item.id === id);
  }
}
