import React from 'react'
import TitleColor from '../components/TitleColor'

const RandomColor = () => {

    const handelClick = (e) => {
        console.log(e.target);
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }
    function getRandomColor() {
        let letters = "123456789ABCDEF";
        let color ="#";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
  return (
    <div className='container margin-auto text-center'>
     <TitleColor text={"RandomColor"} classes={"mb-4"}/>
     <button className='btn btn-danger' onClick={handelClick}>Click Me</button>
     <button className='btn btn-success' onClick={handelClick}>Click Me</button>
     <button className='btn btn-primary' onClick={handelClick}>Click Me</button>
     <button className='btn btn-warning' onClick={handelClick}>Click Me</button>
    </div>
  )
}

export default RandomColor
