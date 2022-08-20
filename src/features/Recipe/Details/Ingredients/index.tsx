import Ingredient from '../../../../components/Ingredient'

import { IngredientsProps } from './index.interfaces'
import StyledIngredients from './index.styled'

function Ingredients({data}: IngredientsProps): JSX.Element {

  return (
    <StyledIngredients>
      <p>Ingredients:</p>
      <ul>
        { (data || []).map((ingredient) => (
          <Ingredient key={ingredient.uuid} {...ingredient} />
        )) }
      </ul>
    </StyledIngredients>
  )

}

export default Ingredients