import styled from 'styled-components'

const StyledHeader = styled.div`
  overflow: hidden;
  padding: 50px 15px 15px 15px;
  p {    
    margin: 0;
    float: left;
    color: #e4163d;
    font-size: 26px;
    font-weight: bold;
  }
  button {
    float: right;
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

export default StyledHeader
