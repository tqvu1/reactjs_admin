import HTTPRequest from '../index';

const apiPath = '/admin/api/user';

interface GetTransactionList {
  name?: string;
  limit?: number;
  page?: number;
}

class TransactionRequest extends HTTPRequest {
  getTransactionList(params: GetTransactionList) {
    return this.get(apiPath, { params });
  }
}

export default new TransactionRequest();
