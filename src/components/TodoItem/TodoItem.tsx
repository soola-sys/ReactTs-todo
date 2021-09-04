import React, { useState } from 'react';
import {Todo} from '../../shared/todo';
import './TodoItem.module.scss';

interface Props{
    todo: Todo;
    toggleTodo:(selectedTodo:Todo) => void;
}

const TodoItem: React.FC<Props> = (props:Props) => {
    const {todo,toggleTodo} = props

    return <div><label style={{textDecoration : todo.done ? "underline red" : "none"}}><input checked={todo.done} onChange={()=> toggleTodo(todo)} type="checkbox" />{todo.text}</label></div>
}

export default TodoItem;