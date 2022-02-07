export interface Person{
  name:string
  phone: string
  email: string
  gender: string
  contactOption: boolean[]
  bioInfo: BioData[]
  userId: string
}

export interface BioData{
  traits: String
  description: String

}

export interface ResponseMessage{
  message: string
}
