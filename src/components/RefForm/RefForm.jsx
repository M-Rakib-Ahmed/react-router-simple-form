import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {

const nameRef = useRef(null);
const emailRef = useRef(null);
const passWordRef = useRef(null);

useEffect(()=>{
    nameRef.current.focus()
},[])

    const handleSubmit = e =>{
      e.preventDefault();
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passWordRef.current.value);
      
      
      
      
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef} type="text" name="name" /> <br />
                <input defaultValue={'mrakibahemd20@gmailcome'} ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passWordRef} type="password" name="password" /> <br />
                <button>Submit</button>


            </form>  
        </div>
    );
};

export default RefForm;