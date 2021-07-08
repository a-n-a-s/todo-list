import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSumbit({
        id : Date.now(),
        text : input
    });
    
        
    
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        name="text"
        value={input}
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
