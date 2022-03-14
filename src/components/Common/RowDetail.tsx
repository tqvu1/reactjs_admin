import React from 'react';
import { Row, Col, Typography, ColProps } from 'antd';

type Props = {
  title: string | React.ReactNode;
  value?: string | number | React.ReactNode;
  actions?: React.ReactNode;
  layout?: {
    titleCol?: ColProps;
    valueCol?: ColProps;
    actionsCol?: ColProps;
  };
  style?: React.CSSProperties;
};

const { Text } = Typography;

const RowDetail: React.FC<Props> = (props) => {
  const { title, value, actions, layout, style } = props;

  const defaultLayout: Props['layout'] = {
    titleCol: layout?.titleCol ?? { span: 7 },
    valueCol: layout?.valueCol ?? { span: 13 },
    actionsCol: layout?.actionsCol ?? { span: 4 },
  };

  return (
    <Row
      gutter={[24, 12]}
      justify="space-between"
      style={{ marginBottom: 6, ...style }}
    >
      <Col {...defaultLayout.titleCol}>
        <Text style={{ fontWeight: 500 }}>{title}</Text>
      </Col>
      <Col {...defaultLayout.valueCol}>
        <Text type="secondary">{value}</Text>
      </Col>
      <Col {...defaultLayout.actionsCol}>{actions}</Col>
    </Row>
  );
};

export default RowDetail;
