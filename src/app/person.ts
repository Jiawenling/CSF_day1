export interface Person{
  name:String
  phone: String
  email: String
  gender: String
  contactOption: boolean[]
  bioInfo: BioData[]
}

export interface BioData{
  traits: String
  description: String

}
