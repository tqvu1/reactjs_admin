import React from 'react';
import { Card, Row, Col, Button, Grid } from 'antd';
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
  TRANSACTION_TYPE_SEARCH,
  TRANSACTION_TYPE,
  TRANSACTION_SALE_STATUS,
  TRANSACTION_TIME_TYPE,
  RANGE_PICKERS,
} from 'src/constants/optionsSelect/transactionList';
import { DATE_TIME } from 'src/constants/app';
import { t } from 'src/libs/I18nService';

const Search: React.FC = () => {
  const { formik, onChangeQuickPeriod, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm, errors, touched } = formik;
  const { xl } = Grid.useBreakpoint();

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
          <Col xl={6} md={10}>
            <SelectField
              label={t('label.search_type')}
              field={getFieldProps('search_type')}
              optionsSelect={TRANSACTION_TYPE_SEARCH(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col xl={10} md={14}>
            <InputField
              field={getFieldProps('search_text')}
              inputProps={{ prefix: <SearchOutlined />, allowClear: true }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={6} md={7}>
            <SelectField
              label={t('label.transaction_type')}
              field={getFieldProps('type')}
              optionsSelect={TRANSACTION_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col xl={7} md={7}>
            <SelectField
              label={t('label.transaction_sale_status')}
              field={getFieldProps('status')}
              optionsSelect={TRANSACTION_SALE_STATUS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
            />
          </Col>
          <Col xl={3} md={10}></Col>
          {xl && (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </Row>
        <Row gutter={24}>
          <Col xl={6} md={10}>
            <SelectField
              label={t('label.period_search')}
              field={getFieldProps('period_search')}
              optionsSelect={TRANSACTION_TIME_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col xl={5} md={7}>
            <DatePickerField
              format={DATE_TIME}
              setFieldValue={setFieldValue}
              field={getFieldProps('from_date')}
              callBackOnChange={() =>
                setFieldValue('quick_period_search', undefined)
              }
            />
          </Col>
          <Col xl={5} md={7}>
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
          {!xl && (
            <React.Fragment>
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
            </React.Fragment>
          )}
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
