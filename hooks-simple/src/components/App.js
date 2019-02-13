import React, { Component, useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');
  const [currentCount, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts') }>Posts</button>
        <button onClick={() => setResource('todos') }>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
