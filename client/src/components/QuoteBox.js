import React from "react";
import "./QuoteBox.css";

const QuoteBox = ({ quote, image }) => {
  return (
    <div className="quote-box" style={{backgroundImage: `url(${image})`}}>
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  )
}

export default QuoteBox;
