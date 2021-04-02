import React, {Component} from "react";

class PutRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {postId: null};
  }
  componentDidMount() {
    const requestOptions = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: "React PUT Request Example"}),
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({postId: data.id}));
  }
  render() {
    const {postId} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple PUT Request</h5>
        <div className="card-body">Post Id: {postId}</div>
      </div>
    );
  }
}

export default PutRequest;
