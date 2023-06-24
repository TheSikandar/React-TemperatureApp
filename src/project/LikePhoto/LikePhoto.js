import React, { useState } from 'react'
import LikeTitle from './LikeTitle'
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
import dog from './image/dog.png.jpg'
const LikePhoto = () => {
    // let like = false;
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    const toggleLike = () =>{
        if(!like){
            setLike(true);
            setCount(count + 1);
        }else
        {
            setLike(false);
            setCount(count - 1);
        }
    }
  return (
    <div className='container text-center'>
   <LikeTitle text={"Like Photo App"}/>
   <LikeTitle classes={"subtitle"} text={`Likes ${count}`}/>
   <div className='card card-dark m-auto'
   style={{width: 300, cursor: "pointer"}}>
 
   <div className='card-header fs-xl'>
   <AiFillSmile className='mr-2'/>
    <small>DogyDog</small>
   </div>
    <img src={dog} alt='' style={{height: "fit-content"}}   onDoubleClick={toggleLike}/>
    <div className='card-footer fs-xl d-flex' style={{justifyContent: "space-between"}}>

<AiOutlineComment /> {like ? (<AiFillHeart className='text-danger'  onClick={toggleLike}/>
) : (<AiOutlineHeart onClick={toggleLike}/>)}
    </div>
   </div>
  </div>
  )
}

export default LikePhoto
