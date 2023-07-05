import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Heading } from 'src/Components';
import { Colors, Sizes, FontWeight } from 'src/Styles/Theme';

const NotFound = ({ shouldRedirect }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  if (shouldRedirect === true) {
    return (<Navigate to='/not-found' />);
  }

  return (
    <Container className='pt-5'>
      <Row>
        <Col>
          <div className='vh-75 d-flex flex-column justify-content-center'>
            <Heading
              type='h1'
              fontSize='13rem'
              fontWeight={FontWeight.bold}
              lineHeight='10rem'
              alignment='center'
              color={Colors.gradientStart}
              className='my-5'
            >
              404
            </Heading>
            <Heading
              type='h2'
              fontSize={Sizes.xxxl}
              fontWeight={FontWeight.medium}
              textTransform='uppercase'
              color={Colors.darkText}
              alignment='center'
              className='my-5'
            >
              Page Not Found
            </Heading>

            <div className='mt-5'>
              <Button
                type='button'
                isFullWidth={false}
                onClick={handleBack}
                className='mt-5 mx-auto'
              >
                Go back to homepage
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
