import styled from 'styled-components'

const StyledDishInfo = styled.div`
  margin-top: 10px;
  border-radius: 8px;
  margin-bottom: 50px;
  background: #e4163d;
  .row {
    align-items: center;
    justify-item: center;
    .col {
      > span {
        color: #fff;
        display: block;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      > p {
        color: #e4163d;
        padding: 0 10px;
        font-size: 20px;
        margin-bottom: 0;
        background: #fff;
        font-weight: bold;
        border-radius: 6px;
        display: inline-block;
      }
      > img {
        width: 640.5px;
        height: 347.98;
        border-radius: 8px;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    margin-bottom: 30px;
    list-style-type: none;
    grid-template-columns: repeat(3,1fr);
    li {
      span {
        :first-child {
          color: #fff;
          font-size: 20px;
          margin-right: 10px;
        }
        :nth-child(2) {
          color: #fff;
          font-size: 30px;
        }
      }
    }
  }
`

export default StyledDishInfo
