import { useEffect, useState } from "react";
import "./Login.css";
import { setUserSession } from "./Utils/Common";

const Login = (props: any) => {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('nizam@gmail.com');
    const password = useFormInput('123');
    const [error, setError] = useState(null);

    useEffect(() => {
        // username.setValue("jjj");
        // username.onChange("nizam@gmail.com");
        // password.value = "123";
    });

    // handle button click of login form
    const handleLogin = () => {
        console.log(username.value, password.value);
        setError(null);
        setLoading(true);
        // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        //   setLoading(false);
        //   setUserSession(response.data.token, response.data.user);
        //   props.history.push('/dashboard');
        // }).catch(error => {
        //   setLoading(false);
        //   if (error.response.status === 401) setError(error.response.data.message);
        //   else setError("Something went wrong. Please try again later.");
        // });
        setUserSession(username.value, password.value);
        props.history.push('/dashboard');
    }

    return (<div className="outer login">
        <div className="inner">
            {/* <form> */}
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" {...username} placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" {...password} placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="button" className="btn btn-secondary btn-block btn-login"
                value={loading ? 'Loading...' : 'Login'}
                onClick={handleLogin}
                disabled={loading}>Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            {/* </form> */}
        </div>
    </div>);
}

const useFormInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;