import React, { useEffect } from 'react';
import { Form, Upload, Button } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { UploadProps } from 'antd/lib/upload';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import { UploadOutlined } from '@ant-design/icons';
import { t } from 'src/libs/I18nService';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field?: FieldInputProps<any>;
  uploadProps?: UploadProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  type?: 'button' | 'image';
  src?: string;
  submitCount?: number;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const UploadField: React.FC<Props> = (props) => {
  const {
    label,
    error,
    uploadProps,
    type = 'button',
    touched,
    src,
    field,
    submitCount,
    ...rest
  } = props;

  useEffect(() => {
    const ref = document.getElementsByClassName('ant-upload')[0];

    if (field?.value) {
      ref.classList.add('d-none');
    } else {
      ref.classList.remove('d-none');
    }
  }, [field?.value, src]);

  return (
    <FormItemStyled
      colon={false}
      label={label}
      validateStatus={error ? 'error' : ''}
      help={(touched || submitCount! > 0) && error}
      {...rest}
    >
      <Upload {...uploadProps} className="upload_image">
        {type === 'button' && (
          <Button icon={<UploadOutlined />}>{t('button.upload')}</Button>
        )}
        {type === 'image' &&
          (src ? (
            <img
              style={{ width: 100, height: 100, objectFit: 'cover' }}
              src={src}
              alt="banner"
            />
          ) : (
            <UploadOutlined />
          ))}
      </Upload>
    </FormItemStyled>
  );
};

const FormItemStyled = styled(Form.Item)`
  &.ant-form-item-has-error {
    .ant-upload {
      border-color: red;
    }
  }
`;

export default UploadField;
