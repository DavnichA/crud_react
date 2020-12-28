import React from 'react';
import s from './Crud.module.css';

function Crud(props) {

    return (
        <div className={s.crudWrapper}>
            <h2>Admin</h2>
            <form className={s.crudForm}>
                <div className={s.inputWrapper}>
                    <input type="text" value={props.inputTextName}
                        onChange={props.inputTextHandlerName} placeholder="Name" className={s.inputField} />
                    <input type="text" value={props.inputTextAddress}
                        onChange={props.inputTextHandlerAddress} placeholder="Address" className={s.inputField} />
                </div>
                <button onClick={props.submitCrudHandler} className={s.crudBtnSub}>Submit</button>
            </form>

            <div>
                {props.data.map((item, i) =>
                    <li key={i} className={s.list}>
                        <p>{i + 1}.</p> <p>{item.name}</p> <p> {item.address} </p>
                        <div className={s.btnWrap}>
                            <button onClick={() => props.deleteHandler(item.id)} className={s.crudBtnDel}>Delete</button>
                            <button onClick={() => props.updateHandler(item.id, i)} className={s.crudBtnUpd}>Update</button>
                        </div>
                    </li>
                )}
            </div>

        </div>

    );
}

export default Crud;
