import React from 'react'

function Text(props) {
  return (
    <div className="m-4 p-4 mx-auto text-center">
        <div className="text-4xl text-blue-500 font-bold">
        {props.text}
        </div>
    </div>
  )
}

export default Text