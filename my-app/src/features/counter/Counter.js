import React, { useState } from 'react'
import { Button } from '../../components/atoms/Button'
import { Text } from '../../components/atoms/Text'

export const Counter = () => {
    const [count, setcount] = useState(0)
    const handleUp = () => setcount(count +1);
    const handleDown = () => setcount (count -1);
  return (
    <>
    <div style={style.container} >

    <Button up onClick={handleUp}/>
   <Text text={count} />
    <Button down onClick={handleDown} />
    </div>
    </>
  )
}


const style = {
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        gap:"2rem",
    }
}