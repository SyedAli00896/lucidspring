import React, { Component } from "react"

import Header from "../header"
import Jumbotron from "../Jumbotron"

class TopContent extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Jumbotron {...this.props} />
      </div>
    )
  }
}
export default TopContent
