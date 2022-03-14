import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

const { TextArea } = Input;

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  textAreaProps?: TextAreaProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const TextAreaField: React.FC<Props> = (props) => {
  const { label, touched, error, field, textAreaProps, ...rest } = props;
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <TextArea {...field} {...textAreaProps} style={{ fontSize: 'inherit' }} />
    </Form.Item>
  );
};

export default TextAreaField;
