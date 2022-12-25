export type PartsOfSpeech = "noun" | "adjective" | "adverb" | "verb" | "pronoun";

//
export interface ICard {
  id: number;
  partOfSpeech: PartsOfSpeech;
  word: string;
  example: string;
  translate: string;
}

//
export interface IUser {
  id: number;
  login: string;
  password: string;

  address?: string;
  age?: string;
  birthday?: Date;
  city?: string;
  country?: string;
  description?: string;
  email?: string;
  fax?: string;
  firstName?: string;
  gender?: string;
  lastName?: string;
  organization?: string;
  phone?: string;
  pinCode?: string;
  street?: string;
  zip?: string;
  accept1: boolean;
  accept2: boolean;
}
