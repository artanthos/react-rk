import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Row,
  Col,
  FormGroup,
} from 'reactstrap';
import {
  Button,
  Heading,
  Table,
  TextInput,
  TasksDeleteModal,
} from 'src/Components';
import {formatDate, fakeAsync} from 'src/Helpers';
import {Sizes, FontWeight, LineHeight} from 'src/Styles/Theme';
import {deleteTask, hydrateTasks, Task, TasksState} from 'src/Redux/features/tasks/tasksSlice';
import debounce from 'lodash/debounce';
import {FakeAllTasksResponse} from 'src/Helpers/_fakeAsync.helper.ts';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state: { tasks: TasksState }) => state.tasks.list);
  const {items = []} = data;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const list = useMemo(
    () =>
      items?.map((row: Task) => ({
        ...row,
        createDate: formatDate(row.createDate),
      })),
    [items]
  );

  const handleGetAllTasks = useCallback(() => {
    fakeAsync({asyncType: 'getAllTasks', payload: null}).then((answer) => {
      const {tasks} = answer as FakeAllTasksResponse;
      dispatch(hydrateTasks({tasks}));
    });
  }, [dispatch]);

  const handleDeleteTask = async () => {
    setModalIsOpen(false);

    fakeAsync({asyncType: 'deleteTask', payload: {id: selectedTask!.id}}).then(() => {
      dispatch(deleteTask({id: selectedTask!.id}));
    });

    setSelectedTask(null);
  };

  const handlePrepareDelete = (id: string) => {
    setSelectedTask(list.find((row) => Number(row.id) === Number(id))!);
    setModalIsOpen(true);

    return false;
  };

  const handleRedirectToNew = () => {
    navigate('/new-task');
  };

  const handleSortByDate = ({isAsc}: { isAsc: boolean }) => () => {
    fakeAsync({asyncType: 'sortAscByDate', payload: {isAsc, searchTerm}}).then((answer) => {
      const {tasks} = answer as FakeAllTasksResponse;

      dispatch(hydrateTasks({tasks}));
    });
  };

  const handleSearchByTaskTitleCallback = useCallback(
    debounce((title: string) => {
      setSearchTerm(title);
      fakeAsync({asyncType: 'searchForTaskByTitle', payload: {title}}).then((answer) => {
        const {tasks} = answer as FakeAllTasksResponse;
        dispatch(hydrateTasks({tasks}));
      });
    }, 500),
    []
  );

  const handleSearchByTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <Heading
            type='h2'
            fontSize={Sizes.xxxl}
            fontWeight={FontWeight.bold}
            lineHeight={LineHeight.xl}
            className='mb-4'
          >
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
              <Button type='button' isFullWidth onClick={handleSortByDate({isAsc: true})}>
                                Sort by date asc
              </Button>
            </Col>
            <Col>
              <Button type='button' isFullWidth onClick={handleSortByDate({isAsc: false})}>
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
            <p>No tasks found.</p>
          )}

          <Button type='submit' isFullWidth={false} onClick={handleRedirectToNew}>
                        Create New Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
