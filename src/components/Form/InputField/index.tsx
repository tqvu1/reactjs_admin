import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  inputProps?: InputProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  callbackOnChange?: () => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const InputField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    inputProps,
    callbackOnChange,
    ...rest
  } = props;

  const onChange = (e) => {
    field.onChange(e);
    callbackOnChange && callbackOnChange();
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <Input
        {...field}
        {...inputProps}
        style={{ fontSize: 'inherit' }}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default InputField;
