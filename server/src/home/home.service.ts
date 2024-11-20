import { Injectable } from '@nestjs/common';
import { DBService } from 'utils/db.service';

@Injectable()
export class HomeService {
    constructor(private readonly db: DBService){}

    getDataHome(idResidence: string){

    }
}
