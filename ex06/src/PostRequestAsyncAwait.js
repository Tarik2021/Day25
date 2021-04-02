import React, {Component} from "react";

class PostRequestAsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = {articleId: null};
  }
  async componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: "React POST Request Example"}),
    };
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
    const data = await response.json();
    this.setState({articleId: data.id});
  }
  render() {
    const {articleId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POST Request with Async Await</h5>
        <div className="card-body">Article Id: {articleId}</div>
      </div>
    );
  }
}

export default PostRequestAsyncAwait;
