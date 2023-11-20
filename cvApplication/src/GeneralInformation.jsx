import  { createElement, useState } from "react";

function GeneralInformation(){
    const [state, setState] = useState('')

    return(
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

    )
       
            
    
    

}

export default GeneralInformation;