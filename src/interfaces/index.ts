export interface SneakType {
  id: number | undefined;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
}

export interface TeamType {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
}

// export interface DataType {
//   config: {};
//   data: SneakType[];
//   headers: {};
//   request: {};
//   status: string;
//   statusText: string;
// }
