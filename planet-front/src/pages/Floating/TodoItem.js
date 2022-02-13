import React, { useEffect, useRef, useState } from 'react';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const [newText, setNewTest] = useState(todoItem.text);

  const onClickSubmitButton = (e) => {
    if (e.key === 'Enter') {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        text: item.id === todoItem.id ? newText : item.text, // 새로운 아이템 내용을 넣어줌
      }));
      setTodoList(nextTodoList);
    }
  };

  return (
    <div className="TodoListItem">
      {/* 아이템 완료 체크 / 체크 해제를 위한 체크박스 */}

          <input
            style={{
              width: "150px",
              background: "#ffffff",
              border: "1.5px solid #A6ACAF",
              borderRadius: "8px",
              outline: "none",
              padding: "3px",
              fontSize: "15.5px",
              color: "#606264",
              fontFamily: "kita",
              marginLeft: "5px",
            }}
            type="text"
            value={newText}
            onKeyPress={onClickSubmitButton}
          />
    </div>
  );
};

export default TodoItem;
