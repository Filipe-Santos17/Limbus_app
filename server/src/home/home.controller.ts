import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(private readonly homeServices: HomeService) { }

    @Get("/data-box")
    getDataHome() {
        return "ok"
        //return this.homeServices.getDataHomeService('0')
    }

    @Post()
    async postDataVazaoPressao(@Body() body: any) {
        return await this.homeServices.postDataApi(body)
    }

    @Get()
    async getDataVazaoPressao() {
        return await this.homeServices.getDataApi()
    }

    @Delete(":id")
    async deleteDataVazaoPressao(@Param() { id } : { id:number }) {
        return await this.homeServices.deleteDataApi(id)
    }
}
