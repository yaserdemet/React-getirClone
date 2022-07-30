import React from 'react'
import notFound from "../assets/no-data.png"

const NotFound = () => {
  return (
    <div>

        <div>
            <h2>Opps...</h2>
        </div>
        <div>
            <img src={notFound} alt="noInfo" />
        </div>
    </div>
  )
}

export default NotFound