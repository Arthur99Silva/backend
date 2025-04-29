import {
    Body, Controller, Delete, Get, Param, ParseIntPipe,
    Post, Put
  } from '@nestjs/common';
  import { CustomersService } from './customers.service';
  import { CreateCustomerDto } from './dto/create-customer.dto';
  import { CustomerResponseDto } from './dto/customer-response.dto';
  
  @Controller('customers')
  export class CustomersController {
    constructor(private readonly svc: CustomersService) {}
  
    @Get()
    findAll(): CustomerResponseDto[] {
      return this.svc.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): CustomerResponseDto {
      return this.svc.findOne(id);
    }
  
    @Post()
    create(@Body() dto: CreateCustomerDto): CustomerResponseDto {
      return this.svc.create(dto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: CreateCustomerDto
    ): CustomerResponseDto {
      return this.svc.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): void {
      return this.svc.remove(id);
    }
  }
  