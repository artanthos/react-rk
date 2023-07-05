import React, {ReactNode} from 'react';
import {Icon} from 'src/Components';
import {Colors} from 'src/Styles/Theme';
import {UncontrolledTooltip} from 'reactstrap';
import {StyledTable} from './Table.style';

interface TableColumn {
    [key: string]: string;
}

interface TableOption {
    icon: string;
    field: string;
    callbackFn?: () => void;
    tooltip?: boolean;
    tooltipText?: string;
    tooltipClassName?: string;
}

interface TableProps {
    children?: ReactNode;
    head?: TableColumn;
    body?: Record<string, any>[];
    hasHeader?: boolean;
    keyColumn?: string;
    options?: TableOption[];
    className?: string;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    children,
    head = {},
    body = [],
    hasHeader = false,
    keyColumn = 'id',
    options = [],
    className = '',
  } = props;

  if (children) {
    return (
      <StyledTable className={className}>
        {children}
      </StyledTable>
    );
  }

  return (
    <StyledTable className={className}>
      {hasHeader && (
        <thead>
          <tr>
            {Object.keys(head).map((col) => (
              <th key={`${col}`}>{head[col]}</th>
            ))}
            {options.length > 0 && <th width='7%'/>}
          </tr>
        </thead>
      )}
      <tbody>
        {body.map((row, index) => {
          const rowItem = Object.keys(head).map((col) => (
            <td key={`${row[keyColumn]}-${col}`}>{row[col]}</td>
          ));

          if (rowItem) {
            return (
              <tr key={`${row[keyColumn]}-${String(index)}`}>
                {rowItem}
                {options.length > 0 && (
                  <td>
                    {options.map((option) => {
                      const {
                        icon,
                        field,
                        callbackFn,
                        tooltip = false,
                        tooltipText = '',
                        tooltipClassName = '',
                      } = option;
                      return callbackFn && (
                        <React.Fragment key={icon}>
                          {tooltip && tooltipText && (
                            <UncontrolledTooltip placement='right' target={`${icon}-${row.id}`}>
                              {tooltipText}
                            </UncontrolledTooltip>
                          )}
                          <Icon
                            id={`${icon}-${row.id}`}
                            name={icon}
                            size={1.11}
                            color={Colors.darkText}
                            onClick={() => callbackFn(row[field])}
                            className={`${tooltipClassName} bi-gradient pointer me-1 p-1`}
                          />
                        </React.Fragment>
                      );
                    })}
                  </td>
                )}
              </tr>
            );
          }

          return null;
        })}
      </tbody>
    </StyledTable>
  );
};


export default Table;
