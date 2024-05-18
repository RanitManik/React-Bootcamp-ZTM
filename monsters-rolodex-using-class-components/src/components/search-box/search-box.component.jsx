import React, { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input type="search" placeholder={this.props.placeholder} className={this.props.className}
             onChange={this.props.onChangeHandler} />
    );
  }
}

export default SearchBox;