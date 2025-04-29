import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyResponseDto } from './dto/company-response.dto';

@Injectable()
export class CompaniesService {
  private companies: Array<{ id: number; name: string }> = [];
  private idSeq = 1;

  findAll(): CompanyResponseDto[] {
    return this.companies;
  }

  findOne(id: number): CompanyResponseDto {
    const comp = this.companies.find(c => c.id === id);
    if (!comp) throw new NotFoundException('Empresa não encontrada');
    return comp;
  }

  create(dto: CreateCompanyDto): CompanyResponseDto {
    const company = { id: this.idSeq++, ...dto };
    this.companies.push(company);
    return company;
  }

  update(id: number, dto: CreateCompanyDto): CompanyResponseDto {
    const comp = this.findOne(id);
    Object.assign(comp, dto);
    return comp;
  }

  remove(id: number): void {
    const idx = this.companies.findIndex(c => c.id === id);
    if (idx < 0) throw new NotFoundException('Empresa não encontrada');
    this.companies.splice(idx, 1);
  }
}
