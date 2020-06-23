import React, { Component } from "react"
import { Link } from "gatsby"

import "../Styles/styles.css"
import { ORANGE_COLOUR } from "../Constants"
class Header extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-collapse "
        style={{
          flexDirection: "row",
          backgroundColor: ORANGE_COLOUR,
        }}
      >
        <div
          class="container"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img
                src={require("../images/shrine_horizontal_white.png")}
                width="146"
                height="51"
                alt="Shrine"
              />
            </a>
          </div>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link>
                <a href="./" id="anchor">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a id="anchor" href="./">
                  Portfolio
                </a>
              </Link>
            </li>

            <li>
              <Link>
                <a id="anchor" href="./">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a id="anchor" href="./">
                  Insights
                </a>
              </Link>
            </li>
            <li>
              <Link>
                <a id="contact" href="./">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
