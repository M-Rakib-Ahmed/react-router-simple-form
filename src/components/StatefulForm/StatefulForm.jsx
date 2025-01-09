import { useState } from "react";



const StatefulForm = () => {
    const [name, setName]= useState('M Rakib Ahmed');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
          setError('Password must be 6 characters or longer')  
        }
        else{
            setError('')
        }


    }

    const handleEmailChange = e => {
        
        setEmail(e.target.value)

    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handlePasswordChange = e =>{
      
      setPassword(e.target.value)
      
    }
    console.log(name, email, password);
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input value={name} onChange={handleNameChange} type="text" name="name" /> <br />
                <input onChange={handleEmailChange} type="email" name="email" /> <br />
                <input onChange={handlePasswordChange} type="password" name="password" required/>
                <br />
                <button>Submit</button>

              {
                error && <p>{error}</p>
              }
            </form>
        </div>
    );
};

export default StatefulForm;