import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({todoList, setTodoList}) => (
  <div className="TodoList">

      {todoList && 
        todoList.map((todoItem) => {

          return (
            <TodoItem
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
       })}
  </div>
);

export default TodoItemList;
