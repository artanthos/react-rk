import React, {FC} from 'react';
import {InlineErrorListWrapper} from './InlineErrorList.style';

interface InlineErrorListProps {
    errors?: Array<{ message: string }> | string;
}

const InlineErrorList: FC<InlineErrorListProps> = ({errors = []}) => {
  return (
    <InlineErrorListWrapper>
      {Array.isArray(errors) ? (
        <ul>
          {errors.map((item, index) => (
            <li key={`message-${String(index)}`}>{item.message}</li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>{`${errors}`}</li>
        </ul>
      )}
    </InlineErrorListWrapper>
  );
};

export default InlineErrorList;
