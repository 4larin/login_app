import react, {useState} from 'react'


const Login = () => {

    let [credentials, setCredentials] = useState({username:null, password:null})
    const formHandler = (e)=>{
        setCredentials(prevState =>{
            return({
                ...prevState,
                [e.name]: e.value
            })
        })
    }

  return <div>Login here</div>;
};

export default Login;
