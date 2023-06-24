import React from 'react'

const TestimoTitle = ({classes, text}) => {
  return (
    <div>
    <h1 className={!classes ?  "title text-center" : classes}>
    {!text ? "Titel" : text}</h1>
  </div>
  )
}

export default TestimoTitle
