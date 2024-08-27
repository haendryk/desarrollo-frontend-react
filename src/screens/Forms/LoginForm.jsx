import useForm from "../../hooks/useForm";
import {useSelector, useDispatch} from "react-redux";
import { saveFormData, resetFormData } from "../../redux/form/formActions";
import { color, motion } from "framer-motion";
import ModalInfo from "../../components/modalInfo";
import { useState } from "react";
const LoginForm = () => {
    const [values, handleChange, resetForm]=useForm({username: '', email: '', password: ''});
    const [show, setShow] = useState('show');
    const [message, setMessage] = useState('');
    const [showModalInfo, setModalInfo] = useState(false);
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.authPassword){
            if(form.authPassword.trim() === values.password.trim()){

                return dispatch(saveFormData(values));
            }  
            setMessage( <>Password incorrecto</>);
            return  showModal() ;
            
        }
        
    }
    const showModalLogout = () => {
        event.preventDefault();
        if(form.formData.username!==''){
                setModalInfo(true);
               return setMessage(
                    <>
                    Presione lara salir
                    <button onClick={logout}>Salir</button>
                    </>
                );
        }
        setModalInfo(true);
        return setMessage(
            <>
            No existe una session!!!
            </>
        );
    }

    const logout = () => {
        
        dispatch(resetFormData());
        setModalInfo(false);
        resetForm();
    }

    const showModal = () => {
        setModalInfo(true);
      };
    
      const hideModal = () => {
        setModalInfo(false);
      };

    const showPassword = () => {
        event.preventDefault();
        const input = document.getElementById('password');
        if (input.type === 'password') {
            input.type = 'text';
            setShow('hide');
            

        } else {
            input.type = 'password';
            values.show = 'show';
            setShow('show');
        }
    }
   
    return (
        <motion.div
        initial={{opacity: 0, y: -70}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}    
        >
        <ModalInfo visible={showModalInfo} message={message} onClose={hideModal}><p>asdasd</p></ModalInfo>
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Login</h2>
                <h2>UserName: {form.formData.username}</h2>
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
                /> 
                <button onClick={showPassword} >{show}</button>
                </div>
                <div className="button-container">
                    <button type="submit" >Login</button>
                    <a href="#" className="logout" onClick={showModalLogout}>Logout</a>
                </div>
                
            </form>
        </div>
        </motion.div>
    );

};

export default LoginForm;