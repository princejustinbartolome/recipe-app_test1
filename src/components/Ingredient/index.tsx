import Specials from '../../features/Recipe/Details/Specials'

import StyledIngredient from './index.styled'
import IngredientProps from './index.interfaces'

function Ingredient({name, measurement, amount, uuid }: IngredientProps): JSX.Element {

  return (
    <StyledIngredient>
      <p>
        <span>{name}, </span>
        <span>{amount} </span>
        <span>{measurement}</span>
      </p>
      <Specials ingredientId={uuid} />
    </StyledIngredient>
  )

}

export default Ingredient