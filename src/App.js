import React, { useReducer, useState } from 'react'

const ACTIONS = {
  ADD_TODO: 'add-todo'
};

function reducer(state, action) {
};


export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
    </>
  );
};


