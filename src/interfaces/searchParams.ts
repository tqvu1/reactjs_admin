export interface UserCreatorList {
  search_type?: string;
  search_text?: string;

  is_block?: boolean | string;
  is_sharing_revenue?: boolean | string;

  period_search?: string;
  from_date?: string;
  to_date?: string;

  quick_period_search?: string;
}

export interface UserLikedList {
  search_type?: string;
  search_text?: string;

  period_search?: string;
  from_date?: string;
  to_date?: string;

  quick_period_search?: string;
}

export interface UserRevenueSharingList {
  search_type?: string;
  search_text?: string;
  is_sharing_revenue?: boolean | string;
}

export interface CommentList {
  search_type?: string;
  search_text?: string;
  period_search?: string;
  series?: string;
  episode?: string;
  creator?: string;
  from_date?: string;
  to_date?: string;
  quick_period_search?: string;
}
export interface TransactionList {
  search_type?: string;
  search_text?: string;

  type?: number | string;
  status?: number | string;

  period_search?: string;
  from_date?: string;
  to_date?: string;

  quick_period_search?: string;
}
