import React, {Component} from "react";

class GetRequestErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {totalReactPackages: null, errorMessage: null};
  }
  componentDidMount() {
    fetch("https://api.npms.io/v2/invalid-url")
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.setState({totalReactPackages: data.total});
      })
      .catch((error) => {
        this.setState({errorMessage: error.toString()});
        console.error("There was an error!");
      });
  }
  render() {
    const {errorMessage} = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Error Handling</h5>
        <div className="card-body">Error message: {errorMessage}</div>
      </div>
    );
  }
}

export default GetRequestErrorHandling;
