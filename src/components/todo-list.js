import React from 'react';
import TodoListItem from './todo-list-item';
//работаем со всей коллексией ДЕЛ

const TodoList = ({todos}) => {
    return (
        <ul>
            <li><TodoListItem label = {todos[0].label}
                              important = {todos[0].important}/></li>
            <li><TodoListItem label = {todos[1].label}
                              important = {todos[1].important}/></li>
        </ul>
    )
};

export default  TodoList;