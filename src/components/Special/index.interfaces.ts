interface SpecialState {
  geo: string
  uuid: string
  type: string
  text: string
  code: string
  title: string
  ingredientId: string
}

interface SpecialResponse {
  data: Array<SpecialState>
}

export type {
  SpecialState,
  SpecialResponse
}