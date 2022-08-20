import { useEffect, useState } from 'react';

import { axiosGet } from '../../../utils'
import Recipe from '../../../components/Recipe';
import { Recipes, RecipesProps } from './index.interfaces';

import StyledRecipesContainer from './index.styled';

function Listing(): JSX.Element {

  const [recipes, setRecipes] = useState<Array<Recipes>>([])

  useEffect(()=>{
    getRecipe()
  }, [])

  const getRecipe = () => {
    axiosGet({url:'http://localhost:3001/recipes'}).then(({data}:RecipesProps) => {
      setRecipes(data);
    })
  }

 return (
    <StyledRecipesContainer>
      { 
        recipes.map((data) => {
          return (
            <Recipe key={data.uuid} { ...data } />
          )
        }) 
      }
    </StyledRecipesContainer>
  )

}

export default Listing