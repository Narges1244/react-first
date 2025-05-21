import './App.css';
import Calendar from './components/Calendar';
const App = ()=>{
  return(
    <div className = "App">
      <h1>Personal Productivity Planner🗂️</h1> 
      <h2>A calendar for tracking daily to-do items and one-hour work blocks.</h2>
      <Calendar />

    </div>
  )
}
export default App