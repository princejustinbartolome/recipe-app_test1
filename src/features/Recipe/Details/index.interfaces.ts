interface Directions {
  instructions: string
  optional: boolean
}

interface Ingredients {
  name: string
  uuid: string
  amount: number
  measurement: string
}

interface Images {
  full: string
  small: string
  medium: string
}

interface Servings {
  servings: number
  prepTime: number
  cookTime: number
}

interface RecipesProps extends Servings {
  uuid: string
  title: string
  images: Images
  editDate: string
  postDate?: string
  description: string
  directions: Array<Directions>
  ingredients: Array<Ingredients>
}

interface RecipesResponse {
  data: Array<RecipesProps>
}

export type {
  Images,
  Servings,
  Directions,
  Ingredients,
  RecipesProps,
  RecipesResponse,
}
