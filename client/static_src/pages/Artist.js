import React from "react";

import Loading from "../components/Loading";

export default class Artist extends React.Component {
  state = { artist: {}, isLoading: true };

  componentDidMount() {
    fetch(`/api/artists/${this.props.match.params.id}/`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        document.title = `${data.name} | Artist | Art/Re/Art`;
        this.setState({
          artist: data,
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{this.state.artist.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {this.state.artist.events
                ? this.state.artist.events.join(", ")
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
