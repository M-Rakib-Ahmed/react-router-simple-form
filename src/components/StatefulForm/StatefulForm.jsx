import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const handleSubmit = e => {
    //    console.log(e);
       
    }
    
    const handleEmailChange = e =>{
console.log(e.target.value);
setEmail(e.target.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" /> <br />
                <input onChange={handleEmailChange} type="email" name="email" /> <br />
                <input type="password" name="password" />
                <br />
                <button>Submit</button>


            </form> 
        </div>
    );
};

export default StatefulForm;