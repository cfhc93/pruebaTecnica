import { APIRequestContext } from '@playwright/test';

export class AuthClient {
    constructor(private request: APIRequestContext) {}
    async login() {
        return await this.request.post('/api/auth/login', {
            data: {
                username: 'admin',
                password: 'password'
            }
        });
    }
}