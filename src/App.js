import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";

import './styles.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='container'>
        <SideBar />
        <div className='container__others'> others pages</div>
      </div>
    </div>
  );
}

export default App;
