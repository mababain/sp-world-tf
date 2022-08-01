export type Tents = Tent[]

export interface Tent {
  id: number
  status: string | ReservedTentStatus
}

export interface ReservedTentStatus {
  nickname: string
  expirationDate: string
}
