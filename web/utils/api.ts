import type {iApiMessage}

class FetchApiMessager implements iApiMessager {
    async get(url: string, options?: RequestInit): Promise<Response> {
        return fetch(url, { method: 'GET', ...options });
    }

    async post(url: string, body: any, options?: RequestInit): Promise<Response> {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
            ...options,
        });
    }

    async delete(url: string, options?: RequestInit): Promise<Response> {
        return fetch(url, { method: 'DELETE', ...options });
    }
}

// Provedor de API que depende da abstração
export default class ApiProvider {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor(
        private readonly apiMessager: IApiMessager // Injeção de dependência
    ) {
        this.baseUrl = ""; // Defina a URL base
        this.headers = {
            Authorization: `Bearer ${Cookies.get('NDT_TOKEN')}`,
        };
    }

    async get(endpoint: string): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return this.apiMessager.get(url, { headers: this.headers });
    }

    async post(endpoint: string, body: any): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return this.apiMessager.post(url, body, { headers: this.headers });
    }

    async delete(endpoint: string): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        return this.apiMessager.delete(url, { headers: this.headers });
    }
}

// Constantes de URL
const URLS = {
    user: 'home/user/usuario_logado/',
    redefinir_senha: 'usuario_djoser/reset_password/',
    confirmar_senha: 'usuario_djoser/reset_password_confirm/',
    home: 'home/home/',
    premissa: 'cadastro/premissas/',
    regioes: 'cadastro/regioes/',
    colecoes: 'cadastro/colecoes/',
    mapas: 'cadastro/mapa/',
};

// Exemplo de uso
const apiProvider = new ApiProvider(new FetchApiMessager());
apiProvider.get(URLS.user).then((response) => console.log(response));
