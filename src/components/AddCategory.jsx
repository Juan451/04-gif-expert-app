import { useState } from "react"


// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target }) => {

        setInputValue(target.value)
    }

    const handlePress = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
            onNewCategory( inputValue.trim() );
            setInputValue('');
    }

    return (
        <form onSubmit={ handlePress} >
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>

    )
}
