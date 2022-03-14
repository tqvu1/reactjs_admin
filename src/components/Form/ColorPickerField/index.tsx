import React from 'react';
import { SketchPicker } from 'react-color';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { FormItemProps } from 'antd/lib/form';
import { Form } from 'antd';

type Props = {
  label?: string;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  setFieldValue: (field: string, value: any) => void;
  field: FieldInputProps<any>;
} & Omit<FormItemProps, 'children'>;

const ColorPickerField: React.FC<Props> = ({
  label,
  touched,
  field,
  setFieldValue,
  error,
  ...rest
}) => {
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <div
        style={{
          width: 220,
          height: 20,
          background: `${field.value}`,
          marginBottom: 12,
        }}
      />
      <SketchPicker
        color={field.value}
        onChange={(c) => setFieldValue(field.name, c.hex)}
      />
    </Form.Item>
  );
};

export default ColorPickerField;
