import useForm from "../../hooks/useForm";
import {useSelector, useDispatch} from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { color, motion } from "framer-motion";
import ModalInfo from "../../components/modalInfo";
import { useState } from "react";
const LoginForm = () => {
    const [values, handleChange]=useForm({username: '', email: '', password: ''});
    const [showModalInfo, setModalInfo] = useState(false);
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.authPassword){
            if(form.authPassword.trim() === values.password.trim())  
                return dispatch(saveFormData(values));
            return alert('Password incorrecto');
        }
        
    }
    const hideModalInfo = (status) => {
        event.preventDefault();
        setModalInfo(status);
    }

    const showPassword = () => {
        event.preventDefault();
        const input = document.getElementById('password');
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }
    
    return (
        <motion.div
        initial={{opacity: 0, y: -70}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}    
        >
        <ModalInfo visible={showModalInfo} message="Bienvenido Hammel" onClose={() => hideModalInfo(false)} />
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Login</h2>
                <h2>{form.formData.username}</h2>
                <div>
                
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
                /> <button onClick={showPassword} >ShowPassword</button>
                </div>
                <div className="button-container">
                    <button type="submit" >Login</button>
                    <button onClick={() => hideModalInfo(true)} >Show</button>
                </div>
                
            </form>
        </div>
        </motion.div>
    );

};

export default LoginForm;