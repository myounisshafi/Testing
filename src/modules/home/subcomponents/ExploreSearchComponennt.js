import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Card, Row, Button, Image, Col} from 'react-bootstrap';

import {SwiperSlide, Swiper} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';

import 'swiper/swiper-bundle.css';

import logo from '../../../res/Canada_landscape.jpeg';
import {useHistory} from 'react-router-dom';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ExploreSearchComponent = () => {
  const history = useHistory();
  return (
    <div
      style={{
        justifyContent: 'center',
        justifyItems: 'center',
        display: 'flex',
      }}
    >
      <Swiper
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        style={{zIndex: 0}}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{clickable: true}}
      >
        <SwiperSlide style={{width: '100%', maxHeight: 500, minHeight: 300}}>
          <img
            object-fit="contain"
            src={logo}
            class="sliderImage"
            style={{width: '100%', maxHeight: 500, minHeight: 300}}
          />
        </SwiperSlide>
        <SwiperSlide style={{width: '100%', maxHeight: 500, minHeight: 300}}>
          <img
            object-fit="contain"
            src={logo}
            class="sliderImage"
            style={{width: '100%', maxHeight: 500, minHeight: 300}}
          />
        </SwiperSlide>
        <SwiperSlide style={{width: '100%', maxHeight: 500, minHeight: 300}}>
          <img
            object-fit="contain"
            src={logo}
            class="sliderImage"
            style={{width: '100%', maxHeight: 500, minHeight: 300}}
          />
        </SwiperSlide>
      </Swiper>
      <Card
        style={{
          width: '90%',
          margin: 20,
          borderRadius: 10,
          position: 'absolute',
          minWidth: 420,
        }}
      >
        <Card.Header as="h5">EXPLORE CANADA</Card.Header>
        <Form
          inline
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Form.Row style={{width: '100%'}}>
            <Col
              lg={4}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Form.Control
                type="text"
                placeholder="SEARCH BY CITY NAME"
                style={{width: '100%', marginTop: 10}}
              />
            </Col>
            <Col
              lg={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Form.Row
                controlId="formfGroupCheckIn"
                style={{
                  width: '100%',
                  marginTop: 10,
                  alignItems: 'center',
                }}
              >
                <Form.Label
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    width: '20%',
                    minWidth: 60,
                    display: 'flex',
                    justifyContent: 'inherit',
                  }}
                >
                  Check In
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Start Date"
                  style={{width: '30%', height: 40}}
                />
                <Form.Label
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    width: '20%',
                    minWidth: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Check Out
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="End Date"
                  style={{width: '30%'}}
                />
              </Form.Row>
            </Col>

            <Col lg={2}>
              <Button
                style={{width: '100%', height: 38, marginTop: 10}}
                onClick={() => {
                  history.push('/hotels');
                }}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card>
    </div>
  );
};

export default ExploreSearchComponent;
