import {render} from '@testing-library/react';
import './../css/common.css';
import mapleLeaf from '../../res/logo_maple.png';

const LeafsComponents = () => {
  render();

  return (
    <div
      style={{
        position: 'absolute',
      }}
    >
      <img
        src={mapleLeaf}
        className="leafAnimation"
        style={{
          marginTop: 0,
          width: 100,
          height: 100,
          marginLeft: 400,
          position: 'absolute',
        }}
      />
      <img
        src={mapleLeaf}
        className="leaf2Animation"
        style={{
          position: 'absolute',
          marginTop: 100,
          width: 100,
          height: 100,
        }}
      />
    </div>
  );
};
export default LeafsComponents;
