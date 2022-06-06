import React from 'react'
import './App.css';
import Button from './component/Button/Button';
import Jobs from './component/Jobs/Jobs';
import Sidebar from './component/Sidebar/Sidebar';


function App() {
  return (
    <div className="Container">
      <div className="JobsInfo">
        <div className='Info'>
          <h1>INSTA-HIRE CAREERS</h1>
          <p>what do you want to do?</p>
          <Button  text = "View Job Openings"/>
        </div>
        <Jobs/>
      </div>
      <div className='UserInfo'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
