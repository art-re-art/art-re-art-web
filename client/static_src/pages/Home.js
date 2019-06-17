import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";

import Background from "../images/bg.jpg";

import "../styles/Home.less";

export default class Home extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.props.setTitle(
      "A series of pop up art events in downtown Morganton, NC."
    );
  }

  render() {
    return (
      <header>
        <div
          style={{
            backgroundColor: "black",
            backgroundImage: `url('${Background}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              flexDirection: "column",
              height: "500px",
              padding: "2em"
            }}
          >
            <Link to="/events/" className="home__link">
              Shows
            </Link>
            <Link to="/artists/" className="home__link">
              Artists
            </Link>
            <Link to="/about/" className="home__link">
              About
            </Link>
          </div>
        </div>

        <div className="home__content">
          <p>
            ART/RE/ART is a series of one-night-only, contemporary art
            experiences taking place in downtown Morganton, NC. These free
            events, held in non-art spaces, offer an alternative way to interact
            with and experience art in the community.
          </p>

          <p style={{ marginBottom: 0 }}>
            Featuring local and regional artists, ART/RE/ART includes work from
            multiple disciplines and mediums including performance,
            installation, sculpture, interactive, video, painting, drawing, and
            photography.
          </p>
        </div>
      </header>
    );
  }
}
