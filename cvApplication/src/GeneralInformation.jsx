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
Once submit button is clicked add option for delete and edit to edit the information for each -> got by this.id of information to determine which button is clicked.

Once this information is determined update with a useState hook to correctly update information.

Do sme process for both Education and work experiance


*/