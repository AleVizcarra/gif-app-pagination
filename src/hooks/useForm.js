import { useState } from "react"

export const useForm = (initialState = '') => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const reset = () => {
        setInputValue(initialState);
    }

    return [inputValue, handleInputChange, reset];
}