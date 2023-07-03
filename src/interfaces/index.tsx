export interface IImage {
  id: string;
  URL: string;
}
export interface IComment {
  id: string;
  comment: string;
  created_at: string;
  user: IUser;
}

export interface ICar {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  km: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  images: IImage[];
  comments: IComment[];
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  cep: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  seller: boolean;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserAPI {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  cep: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  seller: boolean;
  password: string;
  createdAt: string;
  updatedAt: string;
  cars: ICar[];
}

export interface ICarComments{
  id: string;
  comment: string;
  created_at: string;
  user: IUser
}

export interface ICarRetrieve {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  km: string;
  color: string;
  fipe_price: string;
  price: string;
  description: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  images: IImage[];
  comments: IComment[];
  user: IUser;
}

export interface IFipeCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}
