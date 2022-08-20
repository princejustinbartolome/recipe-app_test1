import Recipe from './pages/Recipe';
import RecipeDetails from './pages/RecipeDetails';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import StyledApp from './app.styled';
<link href='https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap' rel='stylesheet'></link>

function App(): JSX.Element {

  return (
    <StyledApp>
      <Routes>
        <Route path='/' element={ <Recipe /> } />
        <Route path=':id' element={ <RecipeDetails /> } />
      </Routes>
    </StyledApp>
  )

}

export default App