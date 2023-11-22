import  {  useState } from "react";
import DisplayInformation from "./DisplayInformation";

function GeneralInformation(){
    const [nameState, setNameState] = useState('')
    const [emailState, setEmailState] = useState('')
    //Starts with Label
    return(
      <>
        <form>
          <label>Name:</label>
          <input type="text" value={nameState} placeholder="Enter Your Name" id="name"
          onChange={event =>{
            setNameState(event.target.value)
          }}
          />
          <button>Submit
          </button>
          <label>Email: </label>
          <input type="text" value={emailState} placeholder="Enter Your Email" id="email"
          onChange={event =>{
            setEmailState(event.target.value)
          }}
          />
        </form>
          <DisplayInformation name={nameState} email={emailState} />
      </>

    )
       
            
    
    

}

export default GeneralInformation;



/*
<div> General Information <br />
          <label htmlFor={'my-name'}>Enter Name: </label>  
          <input
            id={'my-name'}
            type={'text'}
            value={state}
            placeholder={'Enter Your Name'}
            onChange={event => {
            setState(event.target.value)
          }}
          />
      <br />
      <br />
      You entered: {state}
    </div>


*/