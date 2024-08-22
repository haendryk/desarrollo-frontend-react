import useForm from "../../hooks/useForm";
import {useSelector, useDispatch} from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
const LoginForm = () => {
    const [values, handleChange]=useForm({username: '', email: '', password: ''});
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveFormData(values));
        console.log(values);
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>username:{form.formData.username}</h5>
                    <h5>email:{form.formData.email}</h5>
                <label htmlFor="username">username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required
                    value ={values.username}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="email">email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value ={values.email}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    value ={values.password}
                    onChange={handleChange}
                />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;