
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { BiTimeFive } from 'react-icons/bi'
import { CgSmartHomeCooker } from 'react-icons/cg'

import { Recipes } from './index.interfaces'
import StyledRecipe from './index.styled'

function Recipe({title, images, description, ...props }: Recipes): JSX.Element {
  const navigate = useNavigate()
  const handleRecipeClick = () => {
    navigate(props.uuid)
  }
  return (
    <StyledRecipe>
      <div className='imgContainer'><img src={`http://localhost:3001${images.small}`} alt={title}/></div>
      <div>
        <ul className='servingTimeUl'>
          <li className='cookTime'><span><CgSmartHomeCooker /></span> <span>Servings: {props.servings}</span></li>
          <li className='prepTime'><span><BiTimeFive /> </span><span>Cook time: {props.cookTime} mins</span></li>
        </ul>
        <span className='ttl'>{title}</span>
        <p className='desc'>{description}</p>
        <Button onClick={handleRecipeClick}>View Recipe</Button>
      </div>
    </StyledRecipe>
  )

}

export default Recipe