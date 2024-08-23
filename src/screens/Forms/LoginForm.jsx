import useForm from "../../hooks/useForm";
import {useSelector, useDispatch} from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/modalInfo";
import { useState } from "react";
const LoginForm = () => {
    const [values, handleChange]=useForm({username: '', email: '', password: ''});
    const [showModalInfo, setModalInfo] = useState(true);
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveFormData(values));
        console.log(values);
    }
    const hideModalInfo = () => {
        setModalInfo(false);
    }
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
        >
 
        <div className="container">
        <ModalInfo visible={showModalInfo} message="Bienvenido Hammel" onClose={hideModalInfo} />
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
                />
                </div>
                <div className="button-container">
                    <button type="submit" >Login</button>
                </div>
                
            </form>
        </div>
        </motion.div>
    );

};

export default LoginForm;