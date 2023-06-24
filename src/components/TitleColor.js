import React from 'react'

const TitleColor = ({classes, text}) => {
  return (
    <div>
      <h1 className={!classes ?  "title text-center" : 
      classes && "title"}>
      {!text ? "Titel" : text}</h1>
    </div>
  )
}

export default TitleColor
