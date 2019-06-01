import React from "react";

import { Steps, Typography, Row, Col } from "antd";

const { Step } = Steps;
const { Title } = Typography;

export default class Signup extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Steps size="small" current={0}>
            <Step title="About You" />
            <Step title="Your Work" />
            <Step title="Finished!" />
          </Steps>
        </Row>
      </div>
    );
  }
}
