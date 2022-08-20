import styled from 'styled-components'

const StyledRecipeForm = styled.div`
  padding: 0 15px;
  .modal-title {
    color: red;
  }
  .ttlBtnContainer {
    overflow: hidden;
    label {
      float: left;
      width: initial;
    }
    button {
      border: none;
      float: right;
      color: #f29500;
      width: initial;
      background: none;
      svg {
        margin-bottom: 3px;
      }
      :hover {
        cursor: pointer;
        color: #ff620f;
        transition: 0.5s all ease;
      }
    }
  }
  .closeContainer,
  .directionCloseContainer {
    position: relative;
    .closeField {
      color: #f29500;
      position: absolute;
      right: -25px;
      top: 10px;
      font-size: 20px;
      :hover {
        cursor: pointer;
        color: #ff620f;
        transition: 0.5s all ease;
      }
    }
  }
  .directionCloseContainer {
    .closeField {
      right: -13px;
    }
  }
  .btn-save {
    text-align: right;
    padding-top: 15px;
    margin-top: 15px;
    border-top: 1px solid #ccc;
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
  }
`

export default StyledRecipeForm
