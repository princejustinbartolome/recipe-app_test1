
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import RecipeForm from '../../features/Recipe/Form';

import StyledHeader from './index.styled'

function Header(): JSX.Element {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledHeader>
      <p>Recipes</p>
      <Button onClick={handleShow}>Add Recipe</Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeForm onClose={handleClose} />
        </Modal.Body>
      </Modal>
    </StyledHeader>
  )
   
 }
 
 export default Header