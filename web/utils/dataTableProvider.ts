import type { iTableDataPort } from "@/interfaces/table_data_port";

type iDataRowTable = {
    vazao: number
    pressao: number
    preco: number
}

export default class TableDataProvider implements iTableDataPort<iDataRowTable> {
    getColumns(){ 
        return [{
            name:"a", field:"a", label:"a", 
        }]
    };

    getRows() {
        return [

        ]
    }
}
