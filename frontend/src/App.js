import React from 'react';

import './global.css';

import Routes from './routes';

function App(){
  return(
    <Routes/>
  )
};




  /*
function App() {

  let [counter, setCounter] = useState(0);
  // array [valor, função de atualização do estado]

  function increment(){
    setCounter(counter + 1);

    console.log(counter);
  }

  return (
    <div>
      <Header> Contador : {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}*/

export default App;
