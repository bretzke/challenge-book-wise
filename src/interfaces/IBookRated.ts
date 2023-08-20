import IBook from "./IBook";
import IUser from "./IUser";

export default interface IBookRated {
  id: string;
  rate: number;
  description: string;
  book: IBook;
  user: IUser;
  created_at: Date;
}
