import HTTPRequest from './';

const apiPath = '/user';

interface GetCreatorList {
  name?: string;
  limit?: number;
  page?: number;
}

interface GetLikedList {
  name?: string;
  limit?: number;
  page?: number;
}

interface SaveUser {
  id: string;
  data: {
    block?: boolean;
  };
}

interface GetRevenueSharingList {
  name?: string;
  limit?: number;
  page?: number;
}

interface SaveRevenueSharingSetting {
  id: string;
  data: {
    id: number;
    platform_percent: number;
    creator_percent: number;
  }[];
}

class UserRequest extends HTTPRequest {
  getCreatorList(params: GetCreatorList) {
    return this.get(apiPath, { params });
  }
  getDetail(id: string | number) {
    return this.get(`${apiPath}/${id}`);
  }
  getLikedList(params: GetLikedList) {
    return this.get(`${apiPath}`, { params });
  }
  saveUser({ id, data }: SaveUser) {
    return this.put(`${apiPath}/${id}`, { ...data });
  }
  getRevenueSharingList(params: GetRevenueSharingList) {
    return this.get(`${apiPath}`, { params });
  }
  getRevenueSharingDetail(id: string | number) {
    return this.get(`${apiPath}/${id}`);
  }
  saveRevenueSharingSetting({ id, data }: SaveRevenueSharingSetting) {
    return this.put(`${apiPath}/${id}`, { ...data });
  }
}

export default new UserRequest();
