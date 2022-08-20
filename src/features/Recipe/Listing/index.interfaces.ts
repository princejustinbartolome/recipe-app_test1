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

interface Recipes extends Servings{
  uuid: string
  title: string
  images: Images
  editDate: string
  postDate?: string
  description: string
}

interface RecipesProps {
  data: Array<Recipes>
}


export type {
  Images,
  Recipes,
  Servings,
  RecipesProps
}
