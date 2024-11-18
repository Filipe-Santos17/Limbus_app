export type typeLinePort = {
    name: string,
    field: string,
    label: string,
}

export interface iTableDataPort<T> {
    getColumns(): typeLinePort[],
    getRows(): T[]
}