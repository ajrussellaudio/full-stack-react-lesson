import React from "react";
import QuoteBox from "./QuoteBox";
import "./QuotesList.css";

class QuotesList extends React.Component {
  render() {
    const quoteBoxes = this.props.quotes.map(quote => (
      <li key={quote._id}>
        <QuoteBox
          quote={quote}
          image="https://source.unsplash.com/random" />
      </li>
    ))

    return (
      <ul>
        {quoteBoxes}
      </ul>
    )
  }
}

export default QuotesList;
