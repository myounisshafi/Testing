import {Card} from 'react-bootstrap';
import image from '../../../res/23619.jpeg';
const ItemTopLocations = () => {
  return (
    <Card
      class="locationItemCard"
      style={{
        width: 200,
        height: 170,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'column',
        borderRadius: 10,
        minWidth: 200,
      }}
    >
      <img
        src={image}
        style={{
          width: 200,
          height: 130,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          backgroundColor: '#eeeeee',
        }}
      ></img>
      <text style={{padding: 5}}>Location name</text>
    </Card>
  );
};
export default ItemTopLocations;
