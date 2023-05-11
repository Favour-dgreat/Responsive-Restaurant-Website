import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

    const{useState}=React;
    
    const[inputs,setinputs]=useState({
    email:"",
    password:""
    });
    
    const[warnemail,setwarnemail]=useState(false);
    const[warnpass,setwarnpass]=useState(false);
    const[danger,setdanger]=useState(true);
    
    const[eye,seteye]=useState(true);
    const[pass,setpass]=useState("password");
    
    
    const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    if(name=="email"){
    if(value.length>0){
    setdanger(true);
    }
    }
    setinputs((lastValue)=>{
    return{
    ...lastValue,
    [name]:value
    }
    });
    };
    
    const submitForm=(e)=>{
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if(inputs.email.length<1){ setdanger(false); } if(inputs.email=="" ){ setwarnemail(true); } else if(inputs.password=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
        if(pass=="password"){
        setpass("text");
        seteye(false);
        }else{
        setpass("password");
        seteye(true);
        }
        }; 
    
        return(
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                    <div className="left-side">
                            
  
                            <div className="hello">
                                <p className='my__txt'>Sign up</p>

                                <p className='my__txt1'>Let's get you started </p>
                            </div>
                            <br/>
                            <form onSubmit={submitForm}>
                                <label className='my__lbl1' htmlFor="">E-mail</label>
                                <div className="input_text1">
                                    <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="temi@gmail.com" name="email" value={inputs.email} onChange={inputEvent} />
                                    <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                                </div>
                                <br/>
                                <label className='my__lbl1' htmlFor="">Password</label>
                                <div className="input_text1">
                                    <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                                </div>
                                <br/>

                                <label className='my__lbl1' htmlFor="">Confirm Password</label>
                                <div className="input_text1">
                                    <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                                </div>
                                <div className="recovery">
                                    <p>Recovery Password</p>
                                </div>
                                <div className="btn">
                                <Button className='my__btns' style={{ height: '40px', fontSize: '15px', width: '100%', cursor: 'pointer'}} onClick={() => navigate('register')}>Create account</Button>
                                </div>
    
                            </form>
    
                            
                        </div>
                        <div className="right-side">
                        <img src={images.frame14}/>
                        </div>
    
                    
                    </div>
                </div>
            </div>
    
    
    
        </>
        );
        }
      
export default AboutUs;
