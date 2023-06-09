import './App.css';
import EntryForm from './EntryForm';

function App() {
  return (
    <div className="App bg-[rgb(79,79,101)] min-h-screen pb-10">
      <nav className="navbar bg-[rgb(59,59,76)] w-full">
        <div to="/" className="navbar-logo  font-bold text-green-400 text-left text-6xl font-size-20 p-3 w-full">
          Your Carbon Footprint
          <i className="fab fa-firstdraft" />
        </div>
        <div className="menu-icon">
          <i className={"fas fa-times"} />
        </div>
      </nav>
      <EntryForm />
    </div>
  );
}

export default App;
