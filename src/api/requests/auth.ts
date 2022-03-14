import HTTPRequest from 'src/api/index';

const apiPath = `/admin/api/auth`;

interface Credentials {
  email?: string;
  password?: string;
}

class AuthRequest extends HTTPRequest {
  postLogin(credentials: Credentials) {
    return this.post(`${apiPath}/login`, { ...credentials });
  }
  me() {
    return this.get(`${apiPath}/v1/me`);
  }
}

export default new AuthRequest();
