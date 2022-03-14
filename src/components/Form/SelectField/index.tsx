import React from 'react';
import { Form, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { SelectProps } from 'antd/lib/select';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  optionsSelect: {
    label: string | React.ReactElement;
    value: number | string;
    disabled?: boolean;
  }[];
  setFieldValue: (field: string, value: any) => void;
  placeholder?: string;
  selectProps?: SelectProps<any>;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  callbackOnChange?: (e) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View
const SelectField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    selectProps,
    optionsSelect,
    placeholder,
    setFieldValue,
    callbackOnChange,
    ...rest
  } = props;

  const onChange = (e) => {
    setFieldValue(field.name, e);
    callbackOnChange && callbackOnChange(e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <Select
        {...field}
        {...selectProps}
        placeholder={placeholder}
        options={optionsSelect}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default SelectField;
