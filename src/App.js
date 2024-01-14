// App.js
import React from 'react';
import Form from './components/FORM';
import Userlist from './components/Userlist';
function App() {
  return (
    <div className="App">
      {/* Hiển thị thành phần Form */}
      <Form />
      <Userlist />
    </div>
  );
}

export default App;
