import type { CurrencyCode } from "./exchange";

export interface BankAccount {
  id: string;
  name: string;
  code: string;
  logo?: string;
}

export interface SourceFund {
  id: string;
  name: string;
}

export type AccountType = "savings" | "credit";

export interface DestinationAccount {
  bankId: string;
  accountType: AccountType;
  accountNumber: string;
}

export interface TransactionPayload {
  originAmount: number;
  destinationAmount: number;
  originCurrency: CurrencyCode;
  destinationCurrency: CurrencyCode;
  sourceFundId: string;
  originBankId: string;
  destinationAccount: DestinationAccount;
}
