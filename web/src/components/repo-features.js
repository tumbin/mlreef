import React, { Component } from "react";
import arrow_down_blue_01 from "./../images/arrow_down_blue_01.svg";
import plus_01 from "./../images/plus_01.svg";
import { Link } from "react-router-dom";

export default class RepoFeatures extends Component {
  state = {
    isOpen: false,
    branchSelected: "Master",
    projectId: null
  };

  handleBlur = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleBranch();
  };

  handleBranch = e => {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.handleBlur, false);
    } else {
      document.removeEventListener("click", this.handleBlur, false);
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  componentWillMount() {
    this.setState({
      projectId: window.location.href.split("/my-projects/")[1].split("/")[0]
    })
  }

  render() {
    return (
      <>
        <div id="repo-features">
          <div>
            <div className="reference">
              <button
                className="white-button"
                onClick={this.handleBranch}
                ref={node => {
                  this.node = node;
                }}
              >
                {this.state.branchSelected}
                <img id="leftfeature-image" src={arrow_down_blue_01} alt="" />
              </button>
              {this.state.isOpen && (
                <BranchDropdown />
              )}
            </div>
            <button className="white-button">
              <img id="plus" src={plus_01} alt="" />
              <img id="leftfeature-image" src={arrow_down_blue_01} alt="" />
            </button>
            <button className="blue-button">
              Data Visualisation
            </button>

            <button className="blue-button">
              <Link to={`/my-projects/${this.state.projectId}/pipe-line`}><p>Data Pipeline</p></Link>
            </button>
          </div>
          <div>
            <button className="white-button">
              History
                </button>

            <button className="white-button">
              Web IDE
                </button>

            <button className="white-button">
              <img id="leftfeature-image" src={arrow_down_blue_01} alt="" />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export function BranchDropdown() {
  const Branches = ["Master", "feature/28-repo", "feature/41-pipeline"];
  return (
    <div className="select-branch">
      <div
        style={{ margin: "0 50px", fontSize: "14px", padding: "0 40px" }}>
        <p>Switch Branches</p>
      </div>
      <hr />
      <div className="search-branch">
        <input
          autoFocus={true}
          type="text"
          placeholder="Search branches or tags"
        />
        <div className="branches">
          <ul>
            <li className="branch-header">Branches</li>
            {Branches.map((branch, index) => (
              <li key={index}>
                <p>{branch}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}