////(b) For the second part I updated the application so that it displays the time under Hello World!.
//// I also updated it so that the time can be shown under Hello World!.
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Hello World!</h1>
       <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
