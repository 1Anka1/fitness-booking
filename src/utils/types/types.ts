export type Club = {
  _id: string;
  city: string;
  name: string;
  address: string;
};

export type Pass = {
  _id: string;
  name: string;
  price: number;
  openingHours: string;
  description?: string;
};
