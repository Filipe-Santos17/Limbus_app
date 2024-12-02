export type typeLinePort = {
    name: string,
    field: string,
    label: string,
}

export type typeRowTablePort = {
    pressao: number,
    vazao: number,
    data: Date,
    preco: number,
}

export interface iTableDataPort<T> {
    getColumns(): typeLinePort[],
    getRows(): T[]
}