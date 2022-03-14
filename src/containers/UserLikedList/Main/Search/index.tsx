import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
} from 'src/components/Form';
import useForm from './useForm';
import {
  LIKE_TYPE_SEARCH,
  LIKE_TIME_TYPE,
  RANGE_PICKERS,
} from 'src/constants/optionsSelect/userLikedList';
import { DATE_TIME } from 'src/constants/app';
import { t } from 'src/libs/I18nService';

const Search: React.FC = () => {
  const { formik, onChangeQuickPeriod, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;

  return (
    <Wrapper>
      <Card
        title={
          <React.Fragment>
            <FilterOutlined />
            <span style={{ marginLeft: 8 }}>{t('title.basic_search')}</span>
          </React.Fragment>
        }
      >
        <Row gutter={24}>
          <Col span={6}>
            <SelectField
              label={t('label.search_type')}
              field={getFieldProps('search_type')}
              optionsSelect={LIKE_TYPE_SEARCH(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col span={10}>
            <InputField
              field={getFieldProps('search_text')}
              inputProps={{ prefix: <SearchOutlined />, allowClear: true }}
            />
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => submitForm()}
            >
              {t('button.search')}
            </Button>
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={() => handleClear()}
            >
              {t('button.clear')}
            </Button>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <SelectField
              label={t('label.period_search')}
              field={getFieldProps('period_search')}
              optionsSelect={LIKE_TIME_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col span={5}>
            <DatePickerField
              format={DATE_TIME}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
            />
          </Col>
          <Col span={5}>
            <DatePickerField
              format={DATE_TIME}
              setFieldValue={setFieldValue}
              field={getFieldProps('to_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
              error={errors.to_date}
              touched={touched.to_date}
            />
          </Col>
          <Col>
            <RadioGroupField
              field={getFieldProps('quick_period_search')}
              optionsSelect={RANGE_PICKERS(t)}
              radioProps={{
                optionType: 'button',
              }}
              onChange={onChangeQuickPeriod}
            />
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-form-item-label {
    text-align: left;
  }
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
`;

export default Search;
