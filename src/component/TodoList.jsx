import React from 'react';

function TodoList({ todos, setTodos, listIsDone }) {
  return (
    <>
      <div>
        <h2>{listIsDone ? 'Done🎉' : 'Working...🔥'}</h2>
        {todos
          .filter((item) => {
            return item.isDone === listIsDone;
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: '1px solid black',
                  margin: '10px',
                  paddingLeft: '10px',
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <p>완료여부 : {item.isDone.toString()}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.map((todo) => {
                      if (todo.id === item.id) {
                        return {
                          ...todo,
                          isDone: !todo.isDone,
                        };
                      } else {
                        return todo;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  {listIsDone ? '취소' : '완료'}
                </button>
                <button
                  onClick={() => {
                    const deletedTodos = todos.filter((todo) => {
                      return todo.id !== item.id;
                    });
                    setTodos(deletedTodos);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TodoList;
