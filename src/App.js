import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import BorderCard from './components/common/BorderCard';
import CounterCard from './components/common/CounterCard';


function App() {
  const name = "Rich"

  return (
    <div className="App" style={{
      display: "flex",
      flex: "1",
      justifyContent: "center",
      alignItems: 'center',
      minHeight: "100vh",
    }}>
      <CounterCard />
    </div>
  );
}

export default App;
