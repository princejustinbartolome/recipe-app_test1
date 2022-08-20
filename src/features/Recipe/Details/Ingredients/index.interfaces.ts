interface Ingredients {
  name: string
  uuid: string
  amount: number
  measurement: string
}

interface IngredientsProps {
  data: Array<Ingredients>
}

export type {
  Ingredients,
  IngredientsProps
}
