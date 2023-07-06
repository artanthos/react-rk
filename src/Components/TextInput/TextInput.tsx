import React from 'react';
import {Icon, InlineErrorList} from 'src/Components';
import {Colors} from 'src/Styles/Theme';
import {
  StyledInputWrapper,
  StyledTextarea,
  StyledInput,
  StyledLabel,
} from './TextInput.style';
import {FormikConfig, FormikValues} from 'formik';

interface TextInputProps {
    id: string;
    name: string;
    type: string;
    label?: string;
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rows?: number;
    maxLength?: number;
    formik?: FormikConfig<FormikValues> | any | null;
    disabled?: boolean;
    handleShowPassword?: () => void | null;
    isMaxWidth?: boolean;
    className?: string;
    errors?: { name: string; message: string }[];
}


const TextInput: React.FC<TextInputProps> = ({
  errors: receivedErrors = [],
  id,
  name,
  type,
  label,
  value,
  onChange,
  rows,
  maxLength,
  formik,
  disabled = false,
  handleShowPassword = null,
  isMaxWidth,
  className = '',
  ...rest
}) => {
  let errors = [...receivedErrors];

  if (formik && formik.touched[name] && formik.errors[name]) {
    errors = [...errors, {name, message: formik.errors[name]}];
  }

  const getInputFieldClassNames = (): string => {
    let inputClassName = [' ', className];

    if (errors.length > 0) {
      inputClassName = [...inputClassName, ' errors '];
    }

    return inputClassName.join('');
  };

  return (
    <StyledInputWrapper
      isMaxWidth={isMaxWidth}>
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
            hasSuffixIcon={!!handleShowPassword}
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
            hasSuffixIcon={!!handleShowPassword}
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
