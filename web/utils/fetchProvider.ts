import type iApiMessager from "@/interfaces/api_port";

export default class FetchApiMessager implements iApiMessager {
    async get(url: string, options?: RequestInit): Promise<Response> {
        const dataFetch = await fetch(url, { method: 'GET', ...options });
        return this.jsonFormatter(dataFetch)
    }

    async post(url: string, body: any, options?: RequestInit): Promise<Response> {
        const dataFetch = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
            ...options,
        });

        return this.jsonFormatter(dataFetch)
    }

    async delete(url: string, options?: RequestInit): Promise<Response> {
        const dataFetch = await fetch(url, { method: 'DELETE', ...options });
        return this.jsonFormatter(dataFetch)
    }

    private jsonFormatter(dataFet: Response){
        return dataFet.json()
    }
}
