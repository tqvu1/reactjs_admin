import React from 'react';
import { Form, Rate, RateProps, Space } from 'antd';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { FormItemProps } from 'antd/lib/form';

type Props = {
  field?: FieldInputProps<any>;
  label?: string;
  rateProps?: RateProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
} & Omit<FormItemProps, 'children'>;

const StarRateField: React.FC<Props> = (props) => {
  const { label, touched, error, field, rateProps, ...rest } = props;

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={touched && error}
      {...rest}
    >
      <Space>
        <Rate allowHalf {...field} {...rateProps} />
        <span style={{ lineHeight: '30px', fontWeight: 700 }}>
          {rateProps?.value || field?.value}
        </span>
      </Space>
    </Form.Item>
  );
};

export default StarRateField;
