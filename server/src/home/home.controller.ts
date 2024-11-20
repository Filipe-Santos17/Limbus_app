import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(private readonly homeServices: HomeService) { }

    @Get(":idResidence")
    getDataHome(@Param() { idResidence }) {
        return this.homeServices.getDataHomeService('0')
    }
}
