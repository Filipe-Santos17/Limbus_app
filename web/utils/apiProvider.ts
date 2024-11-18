import FetchApiMessager from "./fetchProvider";

// const URLS = {
//     user: 'home/user/usuario_logado/',
//     redefinir_senha: 'usuario_djoser/reset_password/',
//     confirmar_senha: 'usuario_djoser/reset_password_confirm/',
//     home: 'home/home/',
//     premissa: 'cadastro/premissas/',
//     regioes: 'cadastro/regioes/',
//     colecoes: 'cadastro/colecoes/',
//     mapas: 'cadastro/mapa/',
// }

// function isKey<T extends object>(
//     x: T,
//     k: PropertyKey
// ): k is keyof T {
//     return k in x;
// }

export default class ApiProvider {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;
    private readonly urls: object;

    constructor(
        private readonly apiMessager: FetchApiMessager // Injeção de dependência
    ) {
        this.baseUrl = ""; // Defina a URL base
        this.headers = {
            Authorization: `Bearer ${"aa"}`, //Cookies.get('NDT_TOKEN')
        };
        this.urls = []
    }

    async get(endpoint: string): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.get(url, { headers: this.headers });
    }

    async post(endpoint: string, body: any): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.post(url, body, { headers: this.headers });
    }

    async delete(endpoint: string): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiMessager.delete(url, { headers: this.headers });
    }
}
