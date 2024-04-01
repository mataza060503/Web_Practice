export interface FashionItem {
  _id:any;
  fashion_title: string;
  fashion_details: string;
  thumbnail: string;
  fashion_style: string;
  creation_date: string;
}
export interface CartItem {
  Item: FashionItem,
  Count: number,
  Quantity:number
}
