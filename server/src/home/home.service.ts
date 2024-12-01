import { Injectable } from '@nestjs/common';
//import { DBService } from 'utils/db.service';

@Injectable()
export class HomeService {
    constructor(/*private readonly db: DBService*/) { }

    getDataHomeService(idResidence: string) {
        return {
            WaterFlow: {
                currentMonth: 0,
                LastMonth: 0
            },
            WaterPressure:{
                currentMonth: 0,
                LastMonth: 0
            },
            numberDevices:{
                currentMonth: 0,
                LastMonth: 0
            },
            OutputWaterPerMinute:{
                currentMonth: 0,
                LastMonth: 0
            }
        }
    }

    test(body: any){
        console.log(body)
        return { msg: "enviado com sucesso"}
    }
}
