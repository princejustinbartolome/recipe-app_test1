import Direction from '../../../../components/Direction'
import { DirectionsProps } from './index.interfaces'
import StyledDirections from './index.styled'

function Ingredients({data}: DirectionsProps): JSX.Element {

  return (
    <StyledDirections>
      <p className='ttl'>Directions:</p>
      <ul>
        { (data || []).map((direction) => (
          <Direction key={direction.instructions} {...direction} />
        )) }
      </ul>
    </StyledDirections>
  )

}

export default Ingredients