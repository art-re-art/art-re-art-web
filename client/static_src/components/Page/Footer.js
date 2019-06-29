import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, List, Icon } from "antd";

import Mailchimp from "../Mailchimp/Mailchimp";

import "./Footer.less";

export default class Footer extends React.Component {
  render() {
    return (
      <Layout.Footer
        style={{
          backgroundColor: "red",
          color: "white",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "100px",
            height: "100vh",
            position: "absolute",
            transform: "rotate(-30deg)",
            right: "5em"
          }}
        ></div>
        <Row gutter={36}>
          <Col xl={12} lg={24}>
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "2rem",
                fontWeight: "bold"
              }}
            >
              Make a Connection
            </div>
            <List split={false}>
              <List.Item style={{ padding: 0 }}>
                <a href="mailto:hello@artreart.com" className="footer__link">
                  <Icon type="mail" /> hello@artreart.com
                </a>
              </List.Item>
              <List.Item style={{ padding: 0 }}>
                <a
                  href="https://www.instagram.com/art_re_art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <Icon type="instagram" /> art_re_art
                </a>
              </List.Item>
            </List>
          </Col>
          <Col xl={12} lg={24}>
            <Mailchimp />
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: "1em" }}>
            <Link to="/privacy/" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Privacy Policy
            </Link>
            <span
              style={{
                marginLeft: "4px",
                marginRight: "4px",
                color: "rgba(255, 255, 255, 0.6)"
              }}
            >
              |
            </span>
            <Link to="/terms/" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Terms & Conditions
            </Link>
          </Col>
        </Row>
      </Layout.Footer>
    );
  }
}