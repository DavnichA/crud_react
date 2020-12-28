import React, { useState } from 'react';

//component
import Crud from './Crud';


function CrudContainer(props) {
    const [inputTextName, setInputTextName] = useState("");
    const [inputTextAddress, setInputTextAddress] = useState("");

    const inputTextHandlerName = (e) => {
        setInputTextName(e.target.value);
    }
    const inputTextHandlerAddress = (e) => {
        setInputTextAddress(e.target.value);
    }

    const submitCrudHandler = (e) => {
        e.preventDefault();
        if (props.status === 0) {
            props.setData(inputTextName, inputTextAddress);
        }
        else {
            props.updateData( inputTextName, inputTextAddress);
            props.changeData(0, '');
        }
        setInputTextName('');
        setInputTextAddress('');
    }

    const deleteHandler = (e) => {
        console.log(e );
         props.delData(e);
    }

    const updateHandler = (id, e) => {
        setInputTextName(props.data[e].name);
        setInputTextAddress(props.data[e].address);
        props.changeData(1, id);        
    }
    return (
        <Crud
            inputTextName={inputTextName}
            inputTextHandlerName={inputTextHandlerName}
            inputTextAddress={inputTextAddress}
            inputTextHandlerAddress={inputTextHandlerAddress}
            submitCrudHandler={submitCrudHandler} 
            data={props.data}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}/>
    );
}

export default CrudContainer;