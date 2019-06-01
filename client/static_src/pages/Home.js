import React from "react";
import { Link } from "react-router-dom";

import Background from "../images/bg.png";

export default class Home extends React.Component {
  render() {
    return (
      <header>
        <div
          style={{
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
              height: "50vh",
              padding: "2em"
            }}
          >
            <Link
              to="/events/"
              style={{
                backgroundColor: "red",
                padding: ".5em",
                color: "white",
                fontSize: "3em",
                margin: ".5em"
              }}
            >
              Shows
            </Link>
            <Link
              to="/artists/"
              style={{
                backgroundColor: "red",
                padding: ".5em",
                color: "white",
                fontSize: "3em",
                margin: ".5em"
              }}
            >
              Artists
            </Link>
            <Link
              to="/about/"
              style={{
                backgroundColor: "red",
                padding: ".5em",
                color: "white",
                fontSize: "3em",
                margin: ".5em"
              }}
            >
              About
            </Link>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "1.5em",
            padding: "2em"
          }}
        >
          <p>
            ART/RE/ART is a contemporary art experience taking place in downtown
            Morganton, NC for one night only. This free event, held in a non-art
            space, offers an alternative way to interact with and experience art
            in the community.
          </p>

          <p>
            Featuring local and regional artists, ART/RE/ART will include work
            from multiple disciplines and mediums including performance,
            installation, sculpture, interactive, video, painting, drawing, and
            photography.
          </p>
        </div>
      </header>
    );
  }
}
