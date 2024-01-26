import { React, useState } from 'react';
import uuid from 'react-uuid';
export const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodos = {
            id: uuid(),
            title: title,
            content: content,
            isDone: false,
          };
          setTodos([...todos, newTodos]);
        }}
      >
        <input
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={content}
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
};
