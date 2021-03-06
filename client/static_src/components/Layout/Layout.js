import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Layout.less";

class Container extends React.Component {
  render() {
    return <div className="layout__container">{this.props.children}</div>;
  }
}

class Section extends React.Component {
  render() {
    const transitionDelay = this.props.transitionDelay
      ? this.props.transitionDelay
      : 0;

    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="transition--fadeup"
      >
        <div
          className="layout__section"
          style={{ transitionDelay: `${transitionDelay}ms` }}
          className="transition--fadeup-enter-initial"
        >
          <div className="section__title">{this.props.title}</div>
          <div className="section__content">{this.props.children}</div>
        </div>
      </CSSTransition>
    );
  }
}

const Layout = { Container: Container, Section: Section };

export default Layout;
