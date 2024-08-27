import { useState } from 'react';

const useForm = (initialValue) => {
    const [values, setvalue] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } =event.target;
        setvalue({
            ...values,
            [name]: value
        });
        console.log(values);
    };
    return [values, handleChange];
};

export default useForm;