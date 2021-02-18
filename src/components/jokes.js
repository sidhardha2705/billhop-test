import React from "react";
import axios from "axios";
import { Typography } from "antd";

const { Text } = Typography;

class Jokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: null,
      hasError: false,
    };

    this.fetchJokes = this.fetchJokes.bind(this);
    this.jokesMapper = this.jokesMapper.bind(this);
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes() {
    axios
      .get("https://official-joke-api.appspot.com/random_ten")
      .then((res) => {
        this.setState({ jokes: res.data });
      })
      .catch((err) => {
        this.setState({ hasError: err });
      });
  }

  jokesMapper() {
    const { jokes } = this.state;
    return jokes.map((joke) => {
      return (
        <div className="jokes_text_wrapper">
          <Text strong>{joke.setup}</Text>
          <div>{joke.punchline}</div>
        </div>
      );
    });
  }

  render() {
    if (!this.state.hasError) {
      if (this.state.jokes !== null) {
        return (
          <div className="jokes_wrapper util_flex_c">{this.jokesMapper()}</div>
        );
      } else return <div>Loading..</div>;
    } else return <div>Error fetching jokes!</div>;
  }
}

export default Jokes;
