import React from 'react';
import { useFormik } from 'formik';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
} from 'reactstrap';
import {
  BackButton,
  TextInput,
  Button,
  Heading,
} from 'src/Components';
import { NewTaskValidationSchema } from 'src/Schemas';
import { Sizes, FontWeight, LineHeight } from 'src/Styles/Theme';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask } from 'src/Redux/features/tasks/tasksSlice';
import { fakeAsync } from 'src/Helpers';

const NewTaskPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    const { title, description } = values;

    fakeAsync({ asyncType: 'addTask', payload: { title, description } }).then(() => {
      dispatch(addTask({
        title,
        description,
      }));
    });


    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: NewTaskValidationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleBackBtnClick = () => {
    navigate('/');
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col xl={12} className='px-3 ps-xl-3 pe-xl-0 pt-xl-0'>
          <>
            <Heading type='h4' fontSize={Sizes.default} fontWeight={FontWeight.bold} textTransform='uppercase' useVerticalSpacer className='mb-4'>
              Tasks
            </Heading>
            <Heading type='h2' fontSize={Sizes.xxxl} fontWeight={FontWeight.bold} lineHeight={LineHeight.xl} className='mb-4'>
              <BackButton handleBackBtnClick={handleBackBtnClick} />
              &nbsp;
              Create New Task
            </Heading>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <TextInput
                  label='Title:'
                  id='title'
                  name='title'
                  type='text'
                  formik={formik}
                  maxLength={256}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  label='Description:'
                  id='description'
                  name='description'
                  type='text'
                  formik={formik}
                  maxLength={256}
                />
              </FormGroup>
              <div>
                <Button
                  type='submit'
                  isFullWidth={false}
                >
                  <span>Create new task</span>
                </Button>
              </div>
            </Form>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default NewTaskPage;
