
import { useState, Fragment } from 'react'
import { Form, InputGroup, Row, Col, Button } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { v4 as uuidv4 } from 'uuid'
import { axiosPost } from '../../../utils'

import StyledRecipeForm from './index.styled'
import { FormProps, Ingredients, RecipeFormProps, Directions, Specials } from './index.interfaces'
import { MdClose } from 'react-icons/md'

function RecipeForm({onClose}: FormProps): JSX.Element {
  const initialDishInfo = {
    title: '',
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    description: '',
  }
  const initialIngredient: Ingredients = {
    name: '',
    amount: 0,
    uuid: uuidv4(),
    special: false,
    measurement: '',
  }
  const initialDirection: Directions = {
    uuid: uuidv4(),
    optional: false,
    instructions: '',
  }

  const [recipeFormData, setRecipeFormData] = useState(initialDishInfo)
  const [recipeFormSpecials, setRecipeFormSpecials] = useState<Array<Specials>>([])
  const [recipeFormDirections, setRecipeFormDirections] = useState<Array<Directions>>([initialDirection])
  const [recipeFormIngredients, setRecipeFormIngredients] = useState<Array<Ingredients>>([initialIngredient])
  const handleChange = (event: any) => {
    const { target: { name, value } } = event
    setRecipeFormData((state: RecipeFormProps) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  const handleChangeFieldIngredients = (e: any) => {
    const { target: { name, value, id } } = e

    setRecipeFormIngredients((state) => {
      return state.map((item) => {
        if (item.uuid === id) {
          return {
            ...item,
            [name]: value
          }
        }

        return item
      })
    })
  }

  const handleChangeDirection = (e: any) => {
    const { target: { name, value, id, checked } } = e
    const val = name === 'optional' ? checked : value

    setRecipeFormDirections((state) => {
      return state.map((item) => {
        if (item.uuid === id) {
          return {
            ...item,
            [name]: val
          }
        }

        return item
      })
    })
  }

  const handleChangeFieldSpecial = (e: any) => {
    const { target: { name, value, id } } = e

    setRecipeFormSpecials((state) => {
      const specialExist = state.find(item => item.ingredientId === id)
      if (specialExist) {
        return state.map((special) => {
          if (special.ingredientId === id) {
            return {
              ...special,
              [name]: value
            }
          }

          return special
        })
      }

      return [
        ...state, {
          geo: '',
          text: '',
          type: '',
          title: '',
          [name]: value,
          uuid: uuidv4(),
          ingredientId: id,
        }
      ]
    })
  }

  const handleAddFieldIngredient = (e: any) => {
    e.preventDefault()
    setRecipeFormIngredients((state) => {
      return [
        ...state,
        {
          name: '',
          amount: 0,
          uuid: uuidv4(),
          special: false,
          measurement: '',
        }
      ]
    })
  }

  const handleAddFieldDirection = (e: any) => {
    e.preventDefault()
    setRecipeFormDirections((state) => {
      return [
        ...state,
        {
          uuid: uuidv4(),
          optional: false,
          instructions: '',
        }
      ]
    })
  }

  const handleToggleSpecial = (e: any) => {
    const id = e.target.dataset.id
    const special = e.target.checked

    setRecipeFormIngredients((state: any) => {
      return state.map((item: any) => {
        if (item.uuid === id) {
          return {
            ...item,
            special
          }
        }
        return item
      })
    })
  }

  const handleRemoveIngredient = (e: any) => {
    const id = e.currentTarget.id
    setRecipeFormIngredients((state) => {
      return state.filter((item) => item.uuid !== id)
    })
  }

  const handleRemoveDirection = (e: any) => {
    const id = e.currentTarget.id
    setRecipeFormDirections((state) => {
      return state.filter((item) => item.uuid !== id)
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const date = new Date().toLocaleString()
    const payload = {
      ...recipeFormData,
      ingredients: recipeFormIngredients,
      directions: recipeFormDirections,
      images: {
        full: '/img/queso_brat_scramble.jpg',
        small: '/img/queso_brat_scramble--m.jpg',
        medium: '/img/queso_brat_scramble--s.jpg',
      },
      postDate: date,
      editDate: date,
      uuid: uuidv4(),
    }

    axiosPost({url:'http://localhost:3001/recipes', payload})

    recipeFormSpecials.forEach(payload => {
      if (payload.ingredientId) {
        axiosPost({url:'http://localhost:3001/specials', payload})
      }
    })

    onClose()
    window.location.reload()
  }

  return (
    <StyledRecipeForm>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control name='title' value={recipeFormData.title} onChange={handleChange} type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' value={recipeFormData.description} onChange={handleChange} type='text' />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className='mb-3'>
            <Form.Label>Prep Time</Form.Label>
            <Form.Control 
              type='text'
              name='prepTime'
              onChange={handleChange}
              value={recipeFormData.prepTime!}
            />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
            <Form.Label>Cook Time</Form.Label>
            <Form.Control 
              name='cookTime' 
              value={recipeFormData.cookTime!} 
              onChange={handleChange} 
              type='text' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
            <Form.Label>Servings</Form.Label>
            <Form.Control
              type='text'
              name='servings'
              onChange={handleChange}
              value={recipeFormData.servings!}
            />
            </Form.Group>
          </Col>
        </Row>
        <div>
          <div className='ttlBtnContainer'>
            <Form.Label>Ingredients</Form.Label>
            <button onClick={handleAddFieldIngredient}><GoPlus /> Add Field</button>
          </div>
          {
            recipeFormIngredients.map((ingredient) => {
              return (
                <Fragment key={ingredient.uuid}>
                  <Row key={ingredient.uuid}>
                    <Col className='mb-2'>
                      <InputGroup>
                        <InputGroup.Checkbox 
                          data-id={ingredient.uuid} 
                          checked={ingredient.special} 
                          onChange={handleToggleSpecial} 
                          aria-label='Checkbox for following text input' 
                        />
                        <Form.Control 
                          aria-label='Text input with checkbox' 
                          name='name' 
                          placeholder='Name'
                          id={ingredient.uuid}
                          onChange={handleChangeFieldIngredients}
                        />
                      </InputGroup>
                      <Form.Text className='text-muted'>
                        Checkbox is for special ingredients
                      </Form.Text>
                    </Col>
                    <Col>
                      <Form.Group className='mb-3'>
                        <Form.Control 
                          type='text'
                          name='measurement'
                          placeholder='Measurement'
                          id={ingredient.uuid}
                          onChange={handleChangeFieldIngredients}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='mb-3 closeContainer'>
                        <Form.Control 
                          type='text'
                          name='amount'
                          placeholder='Amount'
                          id={ingredient.uuid}
                          onChange={handleChangeFieldIngredients}
                        />
                        { 
                      recipeFormIngredients.length > 1 ? 
                      (<MdClose className='closeField'
                            onClick={handleRemoveIngredient}
                            id={ingredient.uuid}
                          />) : ''
                    }
                      </Form.Group>
                    </Col>
                    
                  </Row>
                {
                  ingredient.special ? (
                      <Row key={`special-${ingredient.uuid}`}>
                        <Col>
                          <Form.Select aria-label='Default select example' name='type' id={ingredient.uuid} onChange={handleChangeFieldSpecial}>
                            <option>Type</option>
                            <option value='sale'>Sale</option>
                            <option value='local'>Local</option>
                            <option value='event'>Event</option>
                            <option value='promocode'>Promo Code</option>
                          </Form.Select>
                        </Col>
                        <Col>
                          <Form.Group className='mb-3'>
                            <Form.Control type='text' placeholder='Title' name='title' id={ingredient.uuid} onChange={handleChangeFieldSpecial} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className='mb-3'>
                            <Form.Control type='text' placeholder='Text' name='text' id={ingredient.uuid} onChange={handleChangeFieldSpecial} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className='mb-3'>
                            <Form.Control type='text' placeholder='Code' name='code' onChange={handleChangeFieldSpecial} />
                          </Form.Group>
                        </Col>
                      </Row>
                    )
                  : ''
                }
              </Fragment>
              )
            })
          }
        </div>
        <Row>
          <div className='ttlBtnContainer mt-1'>
            <Form.Label>Directions</Form.Label>
            <button onClick={handleAddFieldDirection}><GoPlus /> Add Field</button>
          </div>
          {
            recipeFormDirections.map((direction) => {
              return (
                <div key={direction.uuid} className='directionCloseContainer mb-3'>
                  <InputGroup>
                    <InputGroup.Checkbox aria-label='Checkbox for following text input' name='optional' id={direction.uuid} onChange={handleChangeDirection} />
                    <Form.Control aria-label='Text input with checkbox' name='instructions' id={direction.uuid} onChange={handleChangeDirection} />
                  </InputGroup>
                  <Form.Text className='text-muted'>
                    Checkbox is for optional direction
                  </Form.Text>
                  { 
                    recipeFormDirections.length > 1 ? 
                    (<MdClose className='closeField'
                        onClick={handleRemoveDirection}
                        id={direction.uuid}
                      />) : ''
                  }
                </div>
              )
            })
          }
        </Row>
        <div className='btn-save'>
          <Button variant='primary' type='submit' className='btn-add'>Save Changes</Button>
        </div>
      </Form>
    </StyledRecipeForm>
  )
}

export default RecipeForm