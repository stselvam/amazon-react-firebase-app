// Start Node imports
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
// End Node imports

// Start Components
// End Components

// Start Services
import { auth } from '../../Services/Firebase';
import { useStateValue } from '../../Services/StateProvider';
// End Services

// Start Stylesheet
import "./Signin.css";
// End Stylesheet

function Signin() {

    const [{cart, user}, dispath] = useStateValue();

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="page__signin">
            <Link to="/">
                <img className="logo" src="/images/logo/full_logo__dark.webp" alt="Amamzon"/>
            </Link>

            <div className="container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" valuue={password} onChange={e => setPassword(e.target.value)}/>

                    <button typ="submit" onClick={signIn} className="signInButton">Sign in</button>

                    <p>
                        By signing-in you agree to the STS AMAZON FAKE CLONE MODEL Conditions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className="registerButton">Create your Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signin