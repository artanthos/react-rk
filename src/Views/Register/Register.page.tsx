import {
  Button,
  Heading,
  Link,
  Paragraph,
  TextInput,
} from 'src/Components';

import { RegisterValidationSchema } from 'src/Schemas';
import { FontWeight, LineHeight, Sizes } from 'src/Styles/Theme';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Col,
  Container,
  Form, FormGroup,
  Row,
} from 'reactstrap';
import { fakeAsync } from 'src/Helpers';
import { useAuthContext } from 'src/Hooks';


const Register = () => {
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);
  const {
    login,
  } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmitRegister = () => {
    fakeAsync({ asyncType: 'login' }).then(({ accessToken, refreshToken }) => {
      login({
        accessToken,
        refreshToken,
      });
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: ({
      firstName, lastName, email, password,
    }) => {
      handleSubmitRegister({
        firstName,
        lastName,
        email: email?.toLowerCase(),
        password,
      });
    },
  });

  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, [userId]);

  return (
    <Container className='pt-5'>
      <Row>
        <Col xl='6' className='px-3 ps-xl-0 pe-xl-3'>
          <>
            <Heading type='h2' fontSize={Sizes.xxxl} fontWeight={FontWeight.bold} lineHeight={LineHeight.xl} className='mb-5' useHorizontalSpacer>
              Sign up
            </Heading>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <TextInput
                  label='Your first name:'
                  id='firstName'
                  name='firstName'
                  type='text'
                  formik={formik}
                />
              </FormGroup>

              <FormGroup>
                <TextInput
                  label='Your last name:'
                  id='lastName'
                  name='lastName'
                  type='text'
                  formik={formik}
                />
              </FormGroup>

              <FormGroup>
                <TextInput
                  label='Your email:'
                  id='email'
                  name='email'
                  type='text'
                  formik={formik}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  label='Your password:'
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  formik={formik}
                  handleShowPassword={handleClickShowPassword}
                  maxLength={256}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  label='Repeat password:'
                  id='repeatPassword'
                  name='repeatPassword'
                  type={showPassword ? 'text' : 'password'}
                  formik={formik}
                  handleShowPassword={handleClickShowPassword}
                  maxLength={256}
                />
              </FormGroup>
              <div>
                <Button
                  type='submit'
                  disabled={false}
                  isFullWidth={false}
                >
                  <span>Register</span>
                </Button>
              </div>
              <div className='pt-5'>
                <Paragraph
                  textTransform='uppercase'
                  type='span'
                  fontSize={Sizes.default}
                  fontWeight={FontWeight.bold}
                  className='pe-1'
                >
                  Already have an account?
                </Paragraph>
                <Link to='/login' textTransform='uppercase'>
                  Log In
                </Link>
              </div>
            </Form>
          </>
        </Col>

      </Row>
    </Container>
  );
};

export default Register;
