import React from 'react';
import {
  ModalBody, ModalFooter,
} from 'reactstrap';
import { Button, Modal } from 'src/Components/index';

const TasksDeleteModal = (props) => {
  const {
    task,
    modalIsOpen,
    setModalIsOpen,
    handleDelete,
  } = props;

  return (
    <Modal
      title=''
      isOpen={modalIsOpen}
    >
      <ModalBody>
        <p>
          Are you sure you want to delete this task?
          <br />
          <br />
          <strong>{task.title}</strong>
          <br />
          created at:
          {' '}
          <strong>{task.createDate}</strong>
          ?
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          key='yes'
          size='sm'
          className=''
          onClick={handleDelete}
        >
          Yes
        </Button>

        <Button
          key='no'
          size='sm'
          className=''
          onClick={() => setModalIsOpen(false)}
        >
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TasksDeleteModal;
