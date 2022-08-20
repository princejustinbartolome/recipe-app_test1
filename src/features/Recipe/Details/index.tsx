
import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { axiosGet } from '../../../utils'

import Directions from './Directions'
import Ingredients from './Ingredients'
import DishInfo from './DishInfo'

import StyledDetails from './index.styled'
import { RecipesResponse, RecipesProps } from './index.interfaces'

function Details(): JSX.Element {

  const [details, setDetails] = useState<RecipesProps>()
  const { id = '' } = useParams()

  const getDetails = useCallback(() => {
    axiosGet({url:'http://localhost:3001/recipes'}).then(({data}:RecipesResponse) => {
      const fetchDetails = data.find((result: RecipesProps) => result?.uuid! === id )
      setDetails(fetchDetails);
    })
  }, [id])
  
  useEffect(()=>{
    getDetails()
  }, [getDetails])

  return (
    <StyledDetails>
      <Row>
        <Col xs lg='12'>
          <DishInfo 
            title={details?.title!}
            image={details?.images!}
            servings={details?.servings!}
            prepTime={details?.prepTime!}
            cookTime={details?.cookTime!}
            description={details?.description!}
          />
        </Col>
      </Row>
      <Row>
        <Col xs lg='6'>
          <Ingredients data={details?.ingredients!}/>
        </Col>
        <Col xs lg='6'>
          <Directions data={details?.directions!} />
        </Col>
      </Row>
    </StyledDetails>
  )

}
export default Details