import { Listing } from '../../features/Recipe'
import Header from '../../sections/Header'

function Recipe(): JSX.Element {
 return (
    <div className='container'>
      <Header />
      <Listing />
    </div>
  )
}

export default Recipe