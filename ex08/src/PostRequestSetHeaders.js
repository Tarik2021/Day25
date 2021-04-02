import React, {Component} from "react";

class PostRequestSetHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {articleId: null};
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify({title: "React POST Request Example"}),
    };

    fetch("https://api.npms.io/v2/search?q=react", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({articleId: data.total}));
  }
  render() {
    const {articleId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">Article Id: {articleId}</div>
      </div>
    );
  }
}

export default PostRequestSetHeaders;
