namespace app.Interfaces {
  export interface IGuest {
    id: number;
    author: string;
    dateCreated: Date | number;
    message: string;
  }

}
