import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import {TextInput, Button, Heading, Link} from 'src/Components';
import {Sizes, FontWeight, LineHeight} from 'src/Styles/Theme';
import {fakeAsync} from 'src/Helpers';
import {LoginValidationSchema} from 'src/Schemas';
import {useAuthContext} from 'src/Hooks';
import {AuthState} from 'src/Redux/features/auth/authSlice.ts';
import {FakeLoginResponse} from 'src/Helpers/_fakeAsync.helper.ts';

interface FormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {
  const {userId} = useSelector((state: { auth: AuthState }) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const {login} = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitLogin = () => {
    setIsLoading(true);
    fakeAsync({asyncType: 'login', payload: null}).then((answer) => {
      const {accessToken, refreshToken} = answer as FakeLoginResponse;

      if (accessToken && refreshToken) {
        login({
          accessToken,
          refreshToken,
        });
      }
    });
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: () => {
      handleSubmitLogin();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (userId && location.pathname === '/login') {
      navigate('/');
    }
  }, [userId]);

  return (
    <Container className='pt-5'>
      <Row>
        <Col xl='6' className='px-3 ps-xl-0 pe-xl-3'>
          <Heading type='h2' fontSize={Sizes.xxxl} fontWeight={FontWeight.bold} lineHeight={LineHeight.xl}
            className='mb-5' useHorizontalSpacer>
                        Login
          </Heading>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextInput label='Your email:' id='email' name='email' type='text' formik={formik}
                maxLength={256}/>
            </FormGroup>
            <FormGroup>
              <TextInput
                label='Password:'
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                formik={formik}
                maxLength={256}
                handleShowPassword={handleClickShowPassword}
              />
            </FormGroup>
            <div>
              <Button type='submit' disabled={isLoading} isFullWidth={false}>
                <span>Login</span>
              </Button>
            </div>
            <div className='pt-3'>
              <p>{'Don\'t have an account yet?'}</p>
              <Link to='/register'>Register here</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
