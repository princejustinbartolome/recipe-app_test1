import styled from 'styled-components'

const StyledRecipesContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
`

export default StyledRecipesContainer