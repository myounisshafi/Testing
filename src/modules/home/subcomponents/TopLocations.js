import 'bootstrap/dist/css/bootstrap.min.css';
import mapleLeaf from '../../../res/logo_maple.png';
import {Container, Form, Card, Row, Button, Image, Col} from 'react-bootstrap';
import ItemTopLocations from './ItemTopLocation';
import ScrollArea from 'react-scrollbar';

const TopLocations = () => {
  return (
    <div style={{height: 100, width: '100%', marginTop: 20}}>
      <strong
        style={{
          margin: 30,
        }}
      >
        Top Locations
      </strong>
      <ScrollArea
        style={{marginTop: 20}}
        speed={0.8}
        className="scroll-area"
        contentClassName="scroll-content"
        minScrollSize={10}
        horizontalScrollbarStyle={{
          width: 10,
          maxWidth: 50,
          height: 5,
          backgroundColor: '#ff0000',
        }}
        horizontalContainerStyle={{height: 5}}
      >
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
        <ItemTopLocations />
      </ScrollArea>
    </div>
  );
};

export default TopLocations;
