import { SpecialState } from './index.interfaces'
import {StyledSpecial, StyleSpecialTag} from './index.styled'

function Special({ type, title, text, ...props }: SpecialState): JSX.Element {

  return (
    <>
      <StyleSpecialTag>Special</StyleSpecialTag>
      <StyledSpecial>
        <li>Type: {type}</li>
        <li>Title: {title}</li>
        <li>Text: {text}</li>
        {props.code ? (<li>Code: {props.code}</li>) : ''}
      </StyledSpecial>
    </>
  )

}

export default Special