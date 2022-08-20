import { useCallback, useEffect, useState } from 'react'
import Special from '../../../../components/Special'
import { axiosGet } from '../../../../utils'

import { SpecialProps, SpecialState, SpecialResponse } from './index.interfaces'
import StyledSpecials from './index.styled'

function Specials({ingredientId}: SpecialProps): JSX.Element {

  const [special, setSpecial] = useState<SpecialState>()

  const getSpecials = useCallback(() => {
    axiosGet({url:'http://localhost:3001/specials'}).then(({data}:SpecialResponse) => {
      const fetchSpecials = data.find((result: SpecialState) => result?.ingredientId! === ingredientId )
      setSpecial(fetchSpecials);
    })
  }, [])
  
  useEffect(()=>{
    getSpecials()
  }, [getSpecials])

 return (
    <>
      <StyledSpecials>
        { special ? <Special key={special?.uuid} {...special!} /> : '' }
      </StyledSpecials>
    </>
  )

}

export default Specials