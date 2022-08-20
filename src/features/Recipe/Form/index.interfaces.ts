interface FormProps {
  onClose(): void
}

interface RecipeFormProps {
  title: string
  servings: number
  prepTime: number
  cookTime: number
  description: string
}

interface Images {
  full: string
  small: string
  medium: string
}

interface Directions {
  optional: boolean
  instructions: string
  uuid: string
}

interface Ingredients {
  name: string
  uuid: string
  amount: number
  measurement: string
  special: boolean
}

interface Specials {
  uuid: string
  text?: string
  type?: string
  title?: string
  ingredientId?: string
}

export type {
  Images,
  Specials,
  FormProps,
  Directions,
  Ingredients,
  RecipeFormProps
}