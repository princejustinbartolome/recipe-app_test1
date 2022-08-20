import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import DishInfoProps from './index.interfaces'
import StyledDishInfo from './index.styled'

function DishInfo({title, description, prepTime, ...props}: DishInfoProps): JSX.Element {

  const navigate = useNavigate()
  const serverURL = 'http://localhost:3001/'

  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      <StyledDishInfo>
        <Row>
          <Col>
            <img src={`${serverURL}${props.image?.medium}`} alt='' /></Col>
          <Col>
            <p>{description}</p>
            <span>{title}</span>
            <ul>
              <li>
                <span>Prep Time</span>
                <span>{prepTime}</span>
              </li>
              <li>
                <span>Cook Time</span>
                <span>{props.cookTime}</span>
              </li>
              <li>
                <span>Servings</span>
                <span>{props.servings}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </StyledDishInfo>
    </>
  )
  
}

export default DishInfo