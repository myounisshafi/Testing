import './App.css';
import Home from './modules/home/Home';
import MainHeader from './common/components/MainHeader';
import LeafsComponents from './common/components/LeafsComponents';
import HotelsList from './modules/hotelslist/HotelsList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from './modules/navigation/Routes';

function App() {
  return (
    <div style={{minWidth: 450, width: '100%', height: 100}}>
      <MainHeader />

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/hotels" component={HotelsList} />
      </Router>
      <LeafsComponents />
    </div>
  );
}
/* 
 <div style={{minWidth: 450, width: '100%', height: 100}}>{Routes}</div>
<MainHeader />
      <LeafsComponents />
      <Home />
      <LeafsComponents /> */
export default App;
