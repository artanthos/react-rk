import React from 'react';
import { InlineErrorListWrapper } from './InlineErrorList.style';

const InlineErrorList = (props) => {
  const { errors = [] } = props;

  return (
    <InlineErrorListWrapper>
      {(Array.isArray(errors))
        ? (
          <ul>
            {errors.map((item, index) => (
              <li key={`message-${String(index)}`}>
                {item.message}
              </li>
            ))}
          </ul>
        )
        : (
          <ul>
            <li>
              {`${errors}`}
            </li>
          </ul>
        )}
    </InlineErrorListWrapper>
  );
};

export default InlineErrorList;
