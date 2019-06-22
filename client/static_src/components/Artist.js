import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Tag } from "antd";

const { Meta } = Card;

export default class Artist extends React.Component {
  render() {
    return (
      <Col xl={8} lg={12} md={12} sm={24} style={{ padding: "1rem" }}>
        <Link to={`/artists/${this.props.id}/`}>
          <Card
            hoverable
            style={{ height: "100%" }}
            cover={
              this.props.image ? (
                <img src={this.props.image.square.url} />
              ) : (
                <img src={this.props.qrcode.medium.url} />
              )
            }
          >
            <Meta
              title={this.props.name}
              description={this.props.medium.map(medium => {
                return (
                  <Tag key={medium.title} color="#ff0000">
                    {medium.title}
                  </Tag>
                );
              })}
            />
          </Card>
        </Link>
      </Col>
    );
  }
}
