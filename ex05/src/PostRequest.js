import React, {Component} from "react";

class PostRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {articleId: null};
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: "React POST Request Example"}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({articleId: data.id}));
  }
  render() {
    const {articleId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple POST Request</h5>
        <div className="card-body">Article Id: {articleId}</div>
      </div>
    );
  }
}

export default PostRequest;
