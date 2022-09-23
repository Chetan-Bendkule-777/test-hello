import React, { useState } from 'react'

export default function About() {

    const [myStyle,setMyStyle ] = useState(
        {
            color:'black',
            backgroundColor: 'white'
        }
    )

    const[btnText , setBtnText ]= useState ('Enable light Mode')

    const toggleStyle = () =>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border : '1px solid white'
            })
            setBtnText('Enable Dark Mode ')

        }
        else{
            setMyStyle({
                color: "white",
                backgroundColor:'black'
            })
            setBtnText('Enable Light Mode ')
        }
    }
    
  return (
    <div>
        <>
        <div classNameName="container" style={myStyle}>
            <h2 classNameName='my-3'> About Us</h2>
            <form>
                <div className="form-group" style={myStyle} >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        <button type="button" onClick={toggleStyle} className="btn btn-primary my-2">{btnText} </button>
      
        </>
      
    </div>
  )
}
