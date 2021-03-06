import React from "react";
import "../styles/Badge.css";

import logoConf from "../images/badge-header.svg";
import Gravatar from "../components/Gravatar";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConf} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email}/>
          <h1>
            {firstName} <br />
            {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>{jobTitle}</p>
          <p>@{twitter}</p>
        </div>

        <div className="Badge__footer">#fupconf</div>
      </div>
    );
  }
}

export default Badge;
