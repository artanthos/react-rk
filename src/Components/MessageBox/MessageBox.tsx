import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledMessageBox } from './MessageBox.style';

const MessageBox = (props) => {
  const { text, kind, values } = props;
  const isArray = Array.isArray(text);

  const displayMessage = () => (isArray
    ? (
      <ul>
        {text.map((item, index) => (
          <li key={`message-${String(index)}`}>
            <FormattedMessage
              key={item}
              id={item}
              values={values}
            />
          </li>
        ))}
      </ul>
    ) : (
      <p>
        {kind === 'success' && <i className='bi bi-check2-circle mx-2 my-2' />}
        <FormattedMessage key={text} id={text} />
      </p>
    ));

  return (
    <StyledMessageBox className={`message-${kind}`}>
      {displayMessage()}
    </StyledMessageBox>
  );
};

export default MessageBox;
