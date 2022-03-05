import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        // console.log("uppercase clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        // console.log("uppercase clicked"+text);
        let newText=" ";
        setText(newText);
    }
    const handleOnChange=(e)=>{
        // console.log("onChanged");
        setText(e.target.value);
    }
    const [text,setText]=useState("");
//   setText("new-text"); 
  return (
   <>
   <div className='container' style={{Color:props.mode==='dark'?'white':'black'}}>
   <h1 >{props.heading}</h1>
    <div className="mb-3" >
        <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"gray":"white",Color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
   
   </div>
   <div className="container my-3" style={{Color:props.mode==='dark'?'white':'black'}} >
       <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} Minute to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
