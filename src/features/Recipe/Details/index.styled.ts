import styled from 'styled-components'

const StyledDetails = styled.div`
  color: #000;
  padding-top: 50px;
  > div.row {
    justify-content: center;
  }
  button {
    border: none;
    box-shadow: none;
    background: #f29500;
    &:hover,
    &:focus,
    &:active {
      border: none;
      box-shadow: none;
      background: #ff620f;
      transition: 0.5s all ease;
    }
  }
`

export default StyledDetails
