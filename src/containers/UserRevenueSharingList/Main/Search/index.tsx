import React from 'react';
import { Card, Row, Col, Button, Grid } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { SelectField, InputField } from 'src/components/Form';
import useForm from './useForm';
import {
  REVENUE_SHARING_TYPE_SEARCH,
  USER_SHARING_REVENUE_TYPE,
} from 'src/constants/optionsSelect/userRevenueSharingList';
import { t } from 'src/libs/I18nService';

const Search: React.FC = () => {
  const { formik, handleClear } = useForm();
  const { getFieldProps, setFieldValue, submitForm } = formik;
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
          <Col xl={7} md={10}>
            <SelectField
              label={t('label.search_type')}
              field={getFieldProps('search_type')}
              optionsSelect={REVENUE_SHARING_TYPE_SEARCH(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
            />
          </Col>
          <Col xl={9} md={14}>
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
          <Col xl={7} md={7}>
            <SelectField
              label={t('label.is_sharing_revenue')}
              field={getFieldProps('is_sharing_revenue')}
              optionsSelect={USER_SHARING_REVENUE_TYPE(t)}
              setFieldValue={setFieldValue}
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
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
