import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(private readonly homeServices: HomeService) { }

    @Get(":idResidence")
    getDataHome(@Param() { idResidence }) {
        return this.homeServices.getDataHomeService('0')
    }

    @Post()
    async postDataVazaoPressao(@Body() body: any) {
        return await this.homeServices.postDataApi(body)
    }

    @Get()
    async getDataVazaoPressao() {
        return await this.homeServices.getDataApi()
    }
}
