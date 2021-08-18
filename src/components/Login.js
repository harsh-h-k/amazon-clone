import React ,{useState} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import "../components/css/loginstyle.css"
import { auth } from '../firebase'

function Login() {

    const history = useHistory();
 const [email, setemail] = useState("")
 const [password, setpassword] = useState("")

    const Alogin = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            //login and redirect

            history.push("/")
            
        })
        .catch((e) => alert(e.message))
    }

    const Asubmit = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then(auth=>{
        //register and redirect
        
        history.push("/")
        })
        .catch((e)=> alert(e.message))
    }

    return (
        <div className="login">
            <div className="login__logo" >
                <Link to="/" >
                    <img className="login__logo__img" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="login-logo" />
                </Link>
            </div>
            <div className="login__info">
                <h1>Sign In</h1>
                <form>
                    <p className="login_text">
                        Email:
                    </p>
                    <input value={email} type="text" onChange={
                        event => setemail(event.target.value)
                    }/>

                    <p className="login_text">
                        Password:
                    </p>
                    <input value={password} type="password" onChange={
                        event => setpassword(event.target.value)} />
                    <button className="login__signin__btn" onClick={Alogin}>Sign In</button>
                </form>
            </div>
            <div className="login__button">
                <p className="login__button__text">
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={Asubmit}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login