import { Document } from "@contentful/rich-text-types";

export interface IUser {
  username: string;
  email: string;
  avatar: string;
}

export interface IBlog {
  id: string;
  title: string;
  image: string;
  category: string;
  slug: string;
  content: Document;
  createdAt: string;
  user: IUser;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignIn {
  data: string;
  password: string;
}