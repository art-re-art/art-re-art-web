import React from "react";
import ReactGA from "react-ga";
import { List, Typography, Row, Col } from "antd";

import Components from "../../components";
import Mockup from "../../images/mockup.png";

import "./Mobile.less";

const { Title, Paragraph, Text } = Typography;
const { Layout } = Components;

export default class NoMatch extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.props.setTitle("Mobile");
    this.props.finishLoading();
  }

  render() {
    return (
      <Layout.Container>
        <Row
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          gutter={24}
        >
          <Col lg={8} md={24} style={{ textAlign: "center" }}>
            <img
              src={Mockup}
              style={{
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                padding: "1em",
                maxHeight: "70vh"
              }}
            />
          </Col>
          <Col lg={16} md={24}>
            <Layout.Section title="Coming Soon">
              <Paragraph>
                The ART/RE/ART mobile app is coming soon to both iOS and
                Android, signup for our newsletter to get notified when it
                releases.
              </Paragraph>
              <List header={<Title level={3}>Features</Title>}>
                <List.Item>
                  <Text>Notifications for random popup events.</Text>
                </List.Item>
                <List.Item>
                  <Text>Scavenger hunts with rewards.</Text>
                </List.Item>
                <List.Item>
                  <Text>
                    Event QR code scanner for additional art and artist
                    information.
                  </Text>
                </List.Item>
              </List>
            </Layout.Section>
          </Col>
        </Row>
      </Layout.Container>
    );
  }
}
