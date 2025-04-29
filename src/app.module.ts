import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    AuthModule,
    CustomersModule,
    CompaniesModule
  ]
})
export class AppModule {}
