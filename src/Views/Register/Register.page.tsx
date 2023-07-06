import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Col, Container, Form, FormGroup, Row} from 'reactstrap';
import {Button, Heading, Link, TextInput} from 'src/Components';
import {RegisterValidationSchema} from 'src/Schemas';
import {FontWeight, LineHeight, Sizes} from 'src/Styles/Theme';
import {fakeAsync} from 'src/Helpers';
import {FakeLoginResponse, FakeRegisterPayload} from 'src/Helpers/_fakeAsync.helper';
import {useAuthContext} from 'src/Hooks';
import {AuthState} from 'src/Redux/features/auth/authSlice.ts';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {userId} = useSelector((state: { auth: AuthState }) => state.auth);
  const {login} = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmitRegister = (payload: FakeRegisterPayload) => {
    fakeAsync({asyncType: 'login', payload}).then((answer) => {
      const {accessToken, refreshToken} = answer as FakeLoginResponse;

      if (accessToken && refreshToken) {
        login({
          accessToken,
          refreshToken,
        });
      }
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
    onSubmit: ({firstName, lastName, email, password}) => {
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
            <Heading
              type='h2'
              fontSize={Sizes.xxxl}
              fontWeight={FontWeight.bold}
              lineHeight={LineHeight.xl}
              className='mb-5'
              useHorizontalSpacer
            >
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
                  isFullWidth={false}
                >
                  <span>Register</span>
                </Button>
              </div>
              <div className='pt-5'>
                <p>Already have an account?</p>
                <Link to='/login'>Log In</Link>
              </div>
            </Form>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
