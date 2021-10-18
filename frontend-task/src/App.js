
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './bootstrap.css';
import InterviewPanel from './components/interviewee/InterviewPanel';

class App extends Component {
  render(){
  return (
    <div className="App">
      <InterviewPanel></InterviewPanel>
    </div>
  );
  }
}

export default App;
