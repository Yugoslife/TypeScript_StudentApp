export interface AppName {
    name?: string;
  }
  
  export interface Adress {
    address?: {
      houseNo: number;
      street: string;
      town: string;
  }
  }
  
  export interface Student {
    name?: string;
    surname?: string;
    age?: number;
    address?: Adress;
    level?: string;
  }

  export enum Level {
    Undergraduate = "Undergraduate",
    Postgraduate = 'Postgraduate'
}