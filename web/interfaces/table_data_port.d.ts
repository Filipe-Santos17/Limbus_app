export type typeLinePort = {
    name: string,
    field: string,
    label: string,
}

export type typeRowTablePort = {
    pressMedio: number,
    condMedio: number,
    hora: number,
    preco: number,
}

export interface iTableDataPort<T> {
    getColumns(): typeLinePort[],
    getRows(): T[]
}