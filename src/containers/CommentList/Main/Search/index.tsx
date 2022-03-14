import React from 'react';
import { Card, Row, Col, Button, Grid } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import {
  SelectField,
  InputField,
  DatePickerField,
  RadioGroupField,
  // RadioGroupField,
} from 'src/components/Form';
import useForm from './useForm';
import {
  COMMENT_TYPE_SEARCH,
  RANGE_PICKERS,
  SERIES_OPTIONS,
} from 'src/constants/optionsSelect/commentList';
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
              optionsSelect={COMMENT_TYPE_SEARCH(t)}
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
          <Col xl={6} md={7}>
            <SelectField
              label={t('label.series')}
              field={getFieldProps('series')}
              optionsSelect={SERIES_OPTIONS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            />
          </Col>
          <Col xl={6} md={7}>
            <SelectField
              label={t('label.episode')}
              field={getFieldProps('episode')}
              optionsSelect={SERIES_OPTIONS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              selectProps={{ disabled: !getFieldProps('series').value }}
            />
          </Col>
          <Col xl={6} md={7}>
            <SelectField
              label={t('label.creator')}
              field={getFieldProps('creator')}
              optionsSelect={SERIES_OPTIONS(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              selectProps={{ disabled: !getFieldProps('episode').value }}
            />
          </Col>
          <Col xl={3} md={10}></Col>
        </Row>
        <Row gutter={24}>
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
