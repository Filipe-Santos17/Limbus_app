import { Module } from '@nestjs/common';
import { DBService } from 'utils/db.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [DBService, HomeService],
})
export class AppModule {}
