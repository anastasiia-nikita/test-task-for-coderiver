/// <reference types="react-scripts" />

export interface ActivBlock {
  status: string,
  number: number;
}

interface Geo {
  lat: string,
  lng: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface UpdateUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  photo: string,
  distance: string,
  website: string,
  company: Company,
}

export interface AdditionalInfo {
  photo: string,
  distance: string,
}
