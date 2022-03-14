import React from 'react';
import { Form, InputNumber, InputNumberProps } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { FormikTouched, FormikErrors, FormikProps } from 'formik';
import _ from 'lodash';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  name?: string;
  inputProps?: InputNumberProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  callbackOnChange?: () => void;
  formik?: FormikProps<any>;
  width?: string | number;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const InputNumberField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    name,
    formik,
    inputProps,
    callbackOnChange,
    width,
    ...rest
  } = props;

  const onChange = (e) => {
    formik?.setFieldValue(name as string, e);
    callbackOnChange && callbackOnChange();
  };

  const value = _.get(formik?.values, name!);

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <InputNumber
        min={1}
        value={value}
        {...inputProps}
        style={{ fontSize: 'inherit', width }}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default InputNumberField;
