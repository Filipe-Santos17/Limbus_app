export default interface iApiMessager {
    get(url: string, options?: RequestInit): Promise<Response>;
    post(url: string, body: any, options?: RequestInit): Promise<Response>;
    delete(url: string, options?: RequestInit): Promise<Response>;
}