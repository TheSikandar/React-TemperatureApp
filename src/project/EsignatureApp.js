import React,{useState} from 'react'
import Title from '../components/Title'

const EsignatureApp = () => {

    const [name, setName] = useState("Your Signature");
    const [date, setDate] = useState("Select Date");

    const handelNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handelDateChange = (e) => {
       setDate(e.target.value);
    }
    const inputStyle ={
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: "0.35rem 0",
    };
    document.body.style.background = "#eee";
  return (
    <div>
      <Title classes={"title"} text={name}/>
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date}/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <footer className='d-flex' 
      style={{
        justifyContent: "space-around",
        position: "relative",
        top: "40vh",
        }}>
      <input type='date' value={date} style={inputStyle} onChange={handelDateChange}/>
      <input type='text' 
      value={name} 
      style={inputStyle} 
      onChange={handelNameChange}/>
      </footer>
    </div>
  )
}

export default EsignatureApp
