import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setvalue] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } =event.target;
        setvalue({
            ...values,
            [name]: value
        });
    };
    const resetForm = () => {
        setvalue(initialValue);
    };
    return [values, handleChange, resetForm];
   
};

export default useForm;