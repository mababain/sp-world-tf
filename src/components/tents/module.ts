export type Tents = Tent[]

export interface Tent {
  id: number
  status: string | ReservedTentStatus
}

interface ReservedTentStatus {
  nickname: string
  expirationDate: string
}
