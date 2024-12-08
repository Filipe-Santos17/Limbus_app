import FetchApiMessager from "./fetchProvider";

export default class ApiProvider {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;
    private readonly apiMessager: FetchApiMessager // Injeção de dependência

    constructor() {
        this.apiMessager = new FetchApiMessager()
        this.baseUrl = "http://18.231.62.156:8000/"; // Defina a URL base
        this.headers = {
            Authorization: `Bearer ${"aa"}`, //Cookies.get('NDT_TOKEN')
        };
    }

    async get(endpoint: string): Promise<unknown> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.get(url, { headers: this.headers });
    }

    async post(endpoint: string, body: any): Promise<unknown> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.post(url, body, { headers: this.headers });
    }

    async delete(endpoint: string): Promise<unknown> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.delete(url, { headers: this.headers });
    }
}
