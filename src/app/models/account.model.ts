
export interface AccountDetail{
  accountId : number;
  balance : number;
  currency : string;
  currentPage : number;
  totalPages : number;
  pageSize : number;
  operationDtoList : AccountOperation[];
}

export interface AccountOperation{
  id : bigint;
  operationDate : Date;
  amount : number;
  type : string;
  description : string;
}


