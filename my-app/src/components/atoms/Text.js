import React from 'react'

export const Text = (props) => {
  return <span style={style} >{props.text}</span>
}

const style = {
    fontSize:"3rem",
    fontWeight:"bold",
    color:"#fad000",
}
export default Text;