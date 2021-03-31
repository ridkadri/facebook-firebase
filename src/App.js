import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Login from './components/login/login';
import Feed from './components/feed/feed';
import Widget from './components/widget/widget';

function App() {
  return (
    <div className="app">
      <Header/>
            
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
    </div>
  );
}

export default App;
