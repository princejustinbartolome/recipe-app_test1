import styled from 'styled-components'

const StyledRecipe = styled.li`
  padding: 15px;
  border-radius: 8px;
  background: #e4163d;
  box-shadow: 1px 2px 15px #dadada;
  .imgContainer {
    img {
      width: 247px;
      height: 175px;
    }
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px dashed #fff;
  }
  .servingTimeUl {
    margin: 0;
    padding: 0;
    display: grid;
    margin-bottom: 10px;
    padding-bottom: 10px;
    list-style-type: none;
    border-bottom: 1px solid #f29500;
    grid-template-columns: repeat(2, 1fr);
    li {
      span {
        color: #fff;
        font-size: 14px;
        svg {
          color: #fff;
          margin-bottom: 3px;
        }
      }
      &.prepTime {
        text-align: right;
      }
      &.cookTime {
        text-align: left;
      }
    }
  }
  div {
    span.ttl { 
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
    p.desc {
      color: #fff;
      font-size: 18px;
      min-height: 55px;
    }
    button {
      width: 100%;
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

export default StyledRecipe
