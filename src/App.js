import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import Video1 from './screens/Video1';
import Video2 from './screens/Video2';
import Video3 from './screens/Video3';
import Video4 from './screens/Video4';
import Video5 from './screens/Video5';
import Image from './screens/Image';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ' '}>
       {/*Navigation Bar*/}
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src="resources/logo.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/">This is Home!!</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/image">One more Gift</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*Router*/}
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/about" component={AboutScreen}/>
            <Route path="/video1" component={Video1}/>
            <Route path="/video2" component={Video2}/>
            <Route path="/video3" component={Video3}/>
            <Route path="/video4" component={Video4}/>
            <Route path="/video5" component={Video5}/>
            <Route path="/image" component={Image}/>
          </div>
        </main>
        {/*Footer*/}
        <footer className="footer">
          <div className="container-fluid padding">
            <h1 className="footerheading">You made my life beautiful. Happy Birthday my Love !</h1>
          </div>
        </footer>
      </BrowserRouter>

  );
}

export default App;
