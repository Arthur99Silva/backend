import {
    Body, Controller, Delete, Get, Param, ParseIntPipe,
    Post, Put
  } from '@nestjs/common';
  import { CompaniesService } from './companies.service';
  import { CreateCompanyDto } from './dto/create-company.dto';
  import { CompanyResponseDto } from './dto/company-response.dto';
  
  @Controller('companies')
  export class CompaniesController {
    constructor(private readonly svc: CompaniesService) {}
  
    @Get()
    findAll(): CompanyResponseDto[] {
      return this.svc.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): CompanyResponseDto {
      return this.svc.findOne(id);
    }
  
    @Post()
    create(@Body() dto: CreateCompanyDto): CompanyResponseDto {
      return this.svc.create(dto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: CreateCompanyDto
    ): CompanyResponseDto {
      return this.svc.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): void {
      return this.svc.remove(id);
    }
  }
  