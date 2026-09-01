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
  role: string;
  passType: string;
  description?: string;
};

export type User = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
  status: string;
  includeAllClubs: boolean;
  passStartDate: string;
  finalPrice: number;
  avatar: string;

  selectedClub: {
    _id: string;
    city: string;
    name: string;
    address: string;
  };

  selectedPass: {
    _id: string;
    description: string;
    name: string;
    openingHours: string;
    price: number;
    role: string;
    passType: string;
  };
};
