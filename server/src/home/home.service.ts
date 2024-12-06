import { Injectable } from '@nestjs/common';
import { DBService } from 'utils/db.service';
import { NotFoundException } from '@nestjs/common';

interface iDataVazPre {
    vazao: number
    pressao: number
}

@Injectable()
export class HomeService {
    constructor(private readonly db: DBService) { }

    getDataHomeService(idResidence: string) {
        return {
            WaterFlow: {
                currentMonth: 0,
                LastMonth: 0
            },
            WaterPressure: {
                currentMonth: 0,
                LastMonth: 0
            },
            numberDevices: {
                currentMonth: 0,
                LastMonth: 0
            },
            OutputWaterPerMinute: {
                currentMonth: 0,
                LastMonth: 0
            }
        }
    }

    async getDataApi() {
        const data = await this.db.dataDevice.findMany()

        return data
    }

    async postDataApi(body: iDataVazPre) {
        try {
            console.log(body)
            await this.db.dataDevice.create({
                data: {
                    vazao: body.vazao,
                    pressao: body.pressao,
                    data: new Date()
                }
            })

            return { msg: "enviado com sucesso" }
        } catch (e) {
            console.error(e)
            throw new NotFoundException('Data não enviado ao banco') 
        }
    }
}
