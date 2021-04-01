import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Feed from './components/feed/feed';
import Login from './components/login/login';
import Widget from './components/widget/widget';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ): (
        <>
          <Header/>
              
          <div className='app_body'>
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </>
      )
      }
    </div>
  );
}

export default App;
