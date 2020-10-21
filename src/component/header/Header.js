import React from 'react';
import { addTodo, addTodo2 } from '../../action/todo';
import { useDispatch } from 'react-redux';

function Header(){
    let input;
    const dispatch = useDispatch();

    const onClick = () => {
        input.value = '';
        dispatch(addTodo(input.value));
    };

    return <div>
              <input ref={node => {
                input = node;
              }}/>
              <button onClick={onClick}>Add</button>
          </div>;
}

export default Header;
