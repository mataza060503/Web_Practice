export interface BPIData {
  time: Time,
  disclaimer: string,
  chartName: string,
  bpi: BPI
}
export interface Time {
  updated: string,
  updatedISO: string,
  updateduk: string,
}
export interface BPI {
  USD: Currency,
  GBP: Currency,
  EUR: Currency
}
interface Currency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}