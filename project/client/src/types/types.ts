export interface IUser {
  id: number
  email: string
  token: string
}
export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
    email: string
    id: number
    createdAt: string
    updatedAt: string
    password: string
    

}

export interface IResponseUserData {
  // email: string | undefined,
  // password: string | undefined,
  // createdAt: string | undefined,
  // updatedAt: string | undefined,
  // __v?: number | undefined,
  // _id?: string | undefined,
  // message: string | undefined

  token: string
  user: IResponseUser
}

export interface ICategory {
  title: string
  id: number
  createdAt: string
  updatedAt: string
  transactions: []

}

export interface IResponseTransactionLoader {
  categories: ICategory[]
}