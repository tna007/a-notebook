import React from 'react';

function Input({value, submit}) {
    return (
        <div>
            <form>
                <input type='text' name='content' onChange={value}></input>
                <button type='submit' onClick={submit}>Add</button>
            </form>
        </div>
    );
}

export default Input;