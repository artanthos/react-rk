import React from 'react';
import PropTypes from 'prop-types';
import {Icon, InlineErrorList} from 'src/Components';
import {Colors, Sizes} from 'src/Styles/Theme';
import {
  StyledInputWrapper,
  StyledTextarea,
  StyledInput,
  StyledLabel,
} from './TextInput.style';

const TextInput = (props) => {
  const {
    errors: receivedErrors = [], id, name, type, label, value, onChange, rows, maxLength,
    formik, disabled, handleShowPassword, isMaxWidth, className = '', ...rest
  } = props;

  let errors = [...receivedErrors];

  if (formik && formik.touched[name] && formik.errors[name]) {
    errors = [...errors, {name, message: formik.errors[name]}];
  }

  const getInputFieldClassNames = () => {
    let inputClassName = [' ', className];

    if (errors.length > 0) {
      inputClassName = [...inputClassName, ' errors '];
    }

    return inputClassName.join('');
  };

  return (
    <StyledInputWrapper isMaxWidth={isMaxWidth}>
      {label && (
        <StyledLabel
          htmlFor={id}
          disabled={disabled}
          className={`${errors.length > 0 && 'errors'}`}
        >
          {label}
        </StyledLabel>
      )}
      <div>
        {type === 'textarea' ? (
          <StyledTextarea
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            className={getInputFieldClassNames()}
            value={formik ? formik.values[name] : value}
            onChange={formik ? formik.handleChange : onChange}
            rows={rows}
            maxLength={maxLength}
            {...rest}
            hasSuffixIcon={handleShowPassword}
            // eslint-disable-next-line
                        multiline
          />
        ) : (
          <StyledInput
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            className={getInputFieldClassNames()}
            value={formik ? formik.values[name] : value}
            onChange={formik ? formik.handleChange : onChange}
            {...rest}
            hasSuffixIcon={handleShowPassword}
            // eslint-disable-next-line
                        multiline
          />
        )}

        {handleShowPassword && (
          <Icon
            name={type === 'password' ? 'bi-eye' : 'bi-eye-slash'}
            size={1.5}
            color={Colors.text}
            className='pointer p-1 append'
            onClick={handleShowPassword}
          />
        )}
      </div>
      {errors.length > 0 && <InlineErrorList errors={errors}/>}
    </StyledInputWrapper>
  );
};

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  fontSize: PropTypes.string,
  isMaxWidth: PropTypes.bool,
  errors: PropTypes.array,

};

TextInput.defaultProps = {
  fontSize: Sizes.default,
  label: undefined,
  isMaxWidth: true,
  errors: [],
};
