export interface TransactionsModel {
  transactions: Transaction[];

}

export interface Transaction {
  id: string;
  merchantName: string;
  purchaseDate: Date;
  amount: number;
  symbol: string;
  debitDate: Date;
  merchantAddress: string;
  numOfPayments: number;
  transTypeComment: string;
  transactionType: string;
  insertDate: Date;
}
