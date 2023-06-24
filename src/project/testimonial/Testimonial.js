import React,{useState, useEffect} from 'react'
import TestimoTitle from './TestimoTitle'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import Button from './Button'

const Testimonial = () => {
    // const "" = () =>{
    // }
    const [testimonials, setTestimonials] = useState();

    const [items, setItems] = useState();
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[testimonials]);
  return (
    <div className='container m-auto'>
      <TestimoTitle text={"TestimonialApp"}/>

      <Button text={"posts"} 
      btnClass="btn-info" 
        icon={<BsFillFileEarmarkPostFill />}
        onClick={()=> setTestimonials("posts")}
      />{""}
      <Button text={"Users"} btnClass="btn-info" icon={<FaUserAlt />}  
      onClick={()=> setTestimonials("Users")}/>

        <Button text={"Comments"} btnClass="btn-info"icon={<BiCommentDetail />}  
        onClick={()=> setTestimonials("Comments")}/>

        <TestimoTitle classes={"subtitle text-primary"} 
        text={!testimonials ? "Select from above" : testimonials} />

        {!items 
        ? null 
        : items.map((item) => {
          return <div className='card card-primary mb-2' key={item.id}>{item.name}</div>
        })}
        
    </div>
  )
}

export default Testimonial
