import React from "react";
import QuotesList from "../components/QuotesList";

class QuotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    const url = "/api/quotes";
    fetch(url)
      .then(res => res.json())
      .then(quotes => this.setState({
        quotes: quotes
      }));
  }

  render() {
    return (
      <QuotesList quotes={this.state.quotes} />
    )
  }
}

export default QuotesContainer;
