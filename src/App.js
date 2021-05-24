import "./styles.css";
import React from "react";
import { Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { generateRandomQuote } from "./quotes/QuoteGenerator";
import { buildLink } from "./quotes/LinkBuilder";

export default function App() {
  return (
    <div className="App quote-generator">
      <RandomQuoteMachine />
    </div>
  );
}

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    let randomQuoteInitial = generateRandomQuote();
    this.state = {
      quoteCurrent: randomQuoteInitial.quote,
      authorCurrent: randomQuoteInitial.author
    };

    this.generateNewQuote = this.generateNewQuote.bind(this);
  }
  generateNewQuote() {
    let randomQuote = generateRandomQuote();
    this.setState({
      quoteCurrent: randomQuote.quote,
      authorCurrent: randomQuote.author
    });
  }
  render() {
    return (
      <div id="quote-box">
        <p id="text" className="quote-text">
          {this.state.quoteCurrent}
        </p>
        <p id="author" style={{ textAlign: "right" }}>
          - {this.state.authorCurrent}
        </p>
        <Button
          id="new-quote"
          onClick={this.generateNewQuote}
          variant="primary"
        >
          New Quote
        </Button>
        <Button
          id="tweet-quote"
          href={buildLink(this.state.quoteCurrent, this.state.authorCurrent)}
          target="_blank"
          variant="primary"
          role="button"
        >
          <FaTwitter />
        </Button>
      </div>
    );
  }
}
