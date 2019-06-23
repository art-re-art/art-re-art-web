import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Typography, Tag, Modal, Row, Icon } from "antd";
import moment from "moment";

import "../styles/Work.less";

const { Meta } = Card;
const { Paragraph, Title } = Typography;

export class Artist extends React.Component {
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

export class Event extends React.Component {
  render() {
    return (
      <Col xl={8} lg={12} md={12} sm={24} style={{ padding: "1rem" }}>
        <Link to={`/events/${this.props.id}/`}>
          <Card
            hoverable
            cover={<img src={this.props.featured_image.square.url} />}
            style={{ height: "100%" }}
          >
            <Meta
              title={this.props.title}
              description={moment(this.props.datetime).format("LLLL")}
            />
          </Card>
        </Link>
      </Col>
    );
  }
}

export class Work extends React.Component {
  state = {
    image: null,
    isLoading: true,
    modalVisible: false
  };

  componentDidMount() {
    this.setState({
      image: this.props.images[0],
      isLoading: false
    });
  }

  _showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  _hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Col xl={8} lg={8} md={12} sm={12} xs={12} style={{ padding: "1rem" }}>
        <Card
          hoverable
          className="work"
          cover={
            <img
              src={this.state.image.image.square.url}
              alt={this.state.image.description}
            />
          }
          onClick={this._showModal}
          style={{ height: "100%" }}
        >
          {this.props.images.length > 1 && (
            <Icon type="copy" style={{ float: "right", color: "#ff0000" }} />
          )}
          <Title className="work-title" level={4}>
            {this.props.title}
          </Title>
          <Paragraph className="work-year">{this.props.year}</Paragraph>
          <Paragraph className="work-artist">{this.props.artistName}</Paragraph>
        </Card>
        <Modal
          title={this.props.title}
          visible={this.state.modalVisible}
          onCancel={this._hideModal}
          footer={null}
          width={"90vw"}
        >
          <Paragraph>{this.props.year}</Paragraph>
          <Paragraph>{this.props.artistName}</Paragraph>
          {this.props.description && (
            <Paragraph>{this.props.description}</Paragraph>
          )}
          <Row className="work-mediums">
            {this.props.medium &&
              this.props.medium.map(medium => (
                <Tag key={medium.id} color="#ff0000">
                  {medium.title}
                </Tag>
              ))}
          </Row>
          <Row className="work-images">
            {this.props.images &&
              this.props.images.map(image => {
                return (
                  <Col key={image.id} sm={12} xs={24}>
                    <img src={image.image.small.url} alt={image.description} />
                  </Col>
                );
              })}
          </Row>
        </Modal>
      </Col>
    );
  }
}

const Cards = {
  Artist: Artist,
  Event: Event,
  Work: Work
};

export default Cards;