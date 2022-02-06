export interface Person{
  name:String
  phone: String
  email: String
  gender: String
  contactOption: boolean[]
  bioInfo: BioData[]
  userId: string
}

export interface BioData{
  traits: String
  description: String

}
