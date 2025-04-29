import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerResponseDto } from './dto/customer-response.dto';

@Injectable()
export class CustomersService {
  private customers: Array<{ id: number; name: string; email: string }> = [];
  private idSeq = 1;

  findAll(): CustomerResponseDto[] {
    return this.customers;
  }

  findOne(id: number): CustomerResponseDto {
    const cust = this.customers.find(c => c.id === id);
    if (!cust) throw new NotFoundException('Cliente não encontrado');
    return cust;
  }

  create(dto: CreateCustomerDto): CustomerResponseDto {
    const customer = { id: this.idSeq++, ...dto };
    this.customers.push(customer);
    return customer;
  }

  update(id: number, dto: Partial<CreateCustomerDto>): CustomerResponseDto {
    const cust = this.findOne(id);
    Object.assign(cust, dto);
    return cust;
  }

  remove(id: number): void {
    const idx = this.customers.findIndex(c => c.id === id);
    if (idx < 0) throw new NotFoundException('Cliente não encontrado');
    this.customers.splice(idx, 1);
  }
}
