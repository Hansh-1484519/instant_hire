import React, {useState} from 'react'
import './App.css';
import Button from './component/Button/Button';
import Jobs from './component/Jobs/Jobs';
import Sidebar from './component/Sidebar/Sidebar';


function App() {
  const [job, setJob] = useState(true);
  const showJobs = () =>{
    console.log(1);
    setJob(true);
  }
  return (
    <div className="Container">
      <div className="JobsInfo">
        <div className='Info'>
          <h1>INSTA-HIRE CAREERS</h1>
          <p>what do you want to do?</p>
          <Button onClick={() => console.log("Hi")} text = "View Job Openings"/>
        </div>
        {(job) && <Jobs/> }
      </div>
      <div className='UserInfo'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
