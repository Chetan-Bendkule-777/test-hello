import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText=text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase!","success");
  }
  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText='';
    setText(newText)
    props.showAlert("Clear all text!!","success");
  }

  const handleOnChange =(event)=>{
    //console.log("Onchange was clicked");
    setText(event.target.value);
  }
 const handleCopy =()=>{
      var text= document.getElementById('myBox');
      text.select();                              // Copy Text 
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard!","Success");
 }

 const handleExtraSpace =()=>{
   let newText= text.split(/[ ]+/);  // remove Extra White Space
   setText(newText.join(" "))
   props.showAlert("Removed Extra Spaces!","success");
 }

  const [text,setText]= useState('')
  return (
    <>
    <div className="container"> 
      <h6>{props.heading}</h6>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-warning mx-2" onClick={handleUpClick}> Uppercase </button>
      <button className="btn btn-info mx-2" onClick={handleLoClick} > Lowercase  </button>
      <button className="btn btn-info mx-2" onClick={handleClearClick} > Clear Text </button>
      <button className="btn btn-info mx-2" onClick={handleCopy} > Copy Text </button>
      <button className="btn btn-info mx-2" onClick={handleExtraSpace} > Remove Extra White spaces </button>
      
    </div>
    <div className="container">
      <h2> yours text summary </h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes read</p>
      <h2> Preview </h2>
      <p>{text.length>0?text:"enter somthing in the textbox above to preview"}</p>

    </div>
    </>
    
  );
}
