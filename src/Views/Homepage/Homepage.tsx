import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container, Row, Col, FormGroup,
} from 'reactstrap';
import {
  Button, Heading, Paragraph, Table, TextInput, TasksDeleteModal,
} from 'src/Components';
import {formatDate, fakeAsync} from 'src/Helpers';
import {Sizes, FontWeight, LineHeight} from 'src/Styles/Theme';
import {deleteTask, hydrateTasks} from 'src/Redux/features/tasks/tasksSlice';
import debounce from 'lodash/debounce';

const Homepage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks.list);
  const {items = []} = data;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const list = useMemo(() => items?.map((row) => ({...row, createDate: formatDate(row.createDate)})), [items]);

  const handleGetAllTasks = useCallback(() => {
    fakeAsync({asyncType: 'getAllTasks'}).then((answer) => {
      const {tasks} = answer;
      dispatch(hydrateTasks({
        tasks,
      }));
    });
  }, []);
  const handleDeleteTask = async () => {
    setModalIsOpen(false);

    fakeAsync({asyncType: 'deleteTask', payload: {id: selectedTask.id}}).then(() => {
      dispatch(deleteTask({id: selectedTask.id}));
    });
    setSelectedTask(null);
  };

  const handlePrepareDelete = (id) => (e) => {
    // eslint-disable-next-line no-console
    console.log(id)
    e.preventDefault();

    setSelectedTask(list.find((row) => row.id === id));
    setModalIsOpen(true);

    return false;
  };

  const handleRedirectToNew = () => {
    navigate('/new-task');
  };

  const handleSortByDate = ({isAsc}) => () => {
    fakeAsync({asyncType: 'sortAscByDate', payload: {isAsc, searchTerm}}).then((answer) => {
      const {tasks} = answer;

      dispatch(hydrateTasks({
        tasks,
      }));
    });
  };

  const handleSearchByTaskTitleCallback = useCallback(debounce((title) => {
    setSearchTerm(title);
    fakeAsync({asyncType: 'searchForTaskByTitle', payload: {title}}).then((answer) => {
      const {tasks} = answer;
      dispatch(hydrateTasks({
        tasks,
      }));
    });
  }, 500), []);


  const handleSearchByTaskTitle = (event) => {
    handleSearchByTaskTitleCallback(event.target.value);
  };

  useEffect(() => {
    handleGetAllTasks();
  }, []);

  return (
    <Container className='mt-5'>
      <Row>
        <Col className={`px-3 ${list.length > 0 ? 'mobile-scroll-overflow-x' : ''}`}>
          {selectedTask?.id && (
            <TasksDeleteModal
              task={selectedTask}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              handleDelete={handleDeleteTask}
            />
          )}
          <Heading type='h2' fontSize={Sizes.xxxl} fontWeight={FontWeight.bold} lineHeight={LineHeight.xl}
            className='mb-4'>
                        My tasks
          </Heading>

          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormGroup>
                <TextInput
                  label='Search tasks by title:'
                  id='title'
                  name='title'
                  type='text'
                  formik={null}
                  maxLength={256}
                  onChange={handleSearchByTaskTitle}
                  isMaxWidth
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                type='button'
                isFullWidth
                onClick={handleSortByDate({isAsc: true})}
              >
                                Sort by date asc
              </Button>
            </Col>
            <Col>
              <Button
                type='button'
                isFullWidth
                onClick={handleSortByDate({isAsc: false})}
              >
                                Sort by date desc
              </Button>
            </Col>
          </Row>


          {list.length > 0 ? (
            <Table
              className='text-left my-5 tasks'
              hasHeader
              hasOptions
              keyColumn='id'
              head={{
                title: 'Title',
                description: 'Description',
                createDate: 'Create Date',
              }}
              options={[
                {
                  icon: 'bi-trash',
                  field: 'id',
                  callbackFn: handlePrepareDelete,
                  tooltip: true,
                  tooltipText: 'Delete Task',
                  tooltipClassName: '',
                },
              ]}
              body={list}
            />
          ) : (
            <Paragraph type='p' fontSize={Sizes.default} className='mb-4'>No tasks found.</Paragraph>
          )}


          <Button
            type='submit'
            isFullWidth={false}
            onClick={handleRedirectToNew}
          >
                        Create New Task
          </Button>

        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
