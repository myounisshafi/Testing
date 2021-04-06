import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Card, Row, Button, Image, Col} from 'react-bootstrap';

import './home.css';
import ExploreSearchComponent from './subcomponents/ExploreSearchComponennt';
import TopLocations from './subcomponents/TopLocations';
const Home = () => {
  return (
    <div style={{minWidth: 450, position: 'absolute', width: '100%'}}>
      <ExploreSearchComponent />

      <TopLocations />
    </div>
  );
};
export default Home;
