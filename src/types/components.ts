export type market = {
  name: string;
  icon: Object;
  unite: string;
  price: Number;
  chanee: Number;
  marketCap: Number;
  watch: boolean;
};

export type assets = {
  quantity: Number;
  color: String;
  value: Number;
  logo: String;
  percentage: Number;
  unite: String;
};

export enum colors {
  purple = "rgba(137, 106, 185, 0.6)",
  green = "rgba(147, 194, 175, 0.6)",
  beige = "rgba(246, 240, 216,0.6)",
}

export type navbar = {
  route: string;
  icon: Object;
};
