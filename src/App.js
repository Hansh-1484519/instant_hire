import './App.css';
import Button from './component/Button/Button';
import Jobs from './component/Jobs/Jobs';
import Sidebar from './component/Sidebar/Sidebar';


function App() {
  return (
    <div>
      <h2>INSTA-HIRE CAREERS</h2>
      <p>what do you want to do?</p>
      <Button/>
      <Jobs/>
      <Sidebar/>
    </div>
  );
}

export default App;
