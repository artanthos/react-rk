import React from 'react';
import {StyledHeading} from './Heading.style';

interface HeadingProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontSize: string;
    alignment?: 'left' | 'center' | 'right';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    fontWeight?: 300 | 500 | 700;
    lineHeight?: string;
    color?: string;
    useVerticalSpacer?: boolean;
    useHorizontalSpacer?: boolean;
    withNumbering?: boolean;
    order?: number;
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  type,
  useVerticalSpacer,
  useHorizontalSpacer,
  withNumbering,
  order,
  children,
  ...rest
}) => (
  <StyledHeading
    as={type}
    {...rest}
  >
    {useVerticalSpacer && <span className='v-spacer me-3'/>}
    {useHorizontalSpacer && <span className='h-spacer me-3'/>}
    {withNumbering && (<span className='order-wrapper me-3'><span className='order'>{order}</span></span>)}
    {children}
  </StyledHeading>
);


export default Heading;
