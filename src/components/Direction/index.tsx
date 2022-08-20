import StyledDirection from './index.styled'
import DirectionProps from './index.interfaces'

function Direction({ instructions, optional }: DirectionProps): JSX.Element {

  const isOptional = optional ? '(optional)' : ''

  return (
    <StyledDirection>
      <p>
        <span>{instructions}</span>
        <span> {isOptional}</span>
      </p>
    </StyledDirection>
  )

}

export default Direction