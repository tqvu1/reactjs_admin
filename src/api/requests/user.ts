import HTTPRequest from '../index';

const apiPath = '/admin/api/user';

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
    return this.get(`${apiPath}/likes`, { params });
  }
  saveUser({ id, data }: SaveUser) {
    return this.put(`${apiPath}/${id}`, { ...data });
  }
  getRevenueSharingList(params: GetRevenueSharingList) {
    return this.get(`${apiPath}/revenue_sharing`, { params });
  }
  getRevenueSharingDetail(id: string | number) {
    return this.get(`${apiPath}/${id}/revenue_sharing_detail`);
  }
  saveRevenueSharingSetting({ id, data }: SaveRevenueSharingSetting) {
    return this.put(`${apiPath}/${id}/revenue_sharing_setting`, { ...data });
  }
}

export default new UserRequest();
