interface DishInfoProps {
  title: string
  image: Images
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

export default DishInfoProps