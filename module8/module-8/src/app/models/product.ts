export interface Datas {
  Cateid: string,
  CateName: string,
  Products: IProduct[]
}
export interface IProduct {
  ProductId: string,
  ProductName: string,
  Price: number,
  Image: string,
}
export interface Customer {
  Id: string,
  Name: string,
  Email: string,
  Age: number,
  Image: string
}
export interface CustomerCategory {
  CustomerTypeId: string,
  CustomterTypeName: string,
  Customers: Customer[]
}
