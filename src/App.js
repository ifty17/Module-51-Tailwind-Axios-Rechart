import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Pricing></Pricing>
     <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
