import React from 'react';
//import dotenv from 'dotenv';
//dotenv.config();
//require('dotenv').config()

function App() {
  let apikey = process.env.REACT_APP_API_KEY;
  console.log(typeof apikey, apikey, 'key is this', process.cwd(), process.env.NODE_ENV);
  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
