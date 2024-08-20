import React, { useContext } from 'react';
import './App.css';
import { FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime } from 'react-intl';
import { Context } from "./components/Wrapper";

// Import flag images

function App(props) {
  const context = useContext(Context);
  console.log("213"+context.locale);
  context.locale = context.locale === "en-US" ? "en" :context.locale
  // Map locale to flag images
  const flagMap = {
    en: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fr: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ar: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={`${flagMap[context.locale]}`} 
          className="App-flag" 
        />
        <select className="custom-select" value={context.locale} onChange={context.selectLanguage}>
          <option value='en'>English</option>
          <option value='fr'>French</option>
          <option value='ar'>Arabic</option>
        </select>
        <p>
          <FormattedMessage
              id="app.header"
              defaultMessage="Edit the files and save to reload"
              values={{ fileName: 'src/App.js', code: (word) => <strong>{word}</strong> }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id="app.content"
            defaultMessage="Learn React"
          />
        </a>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values={{ blogName: "Mrunal" }}
        />
        <br />
        <FormattedPlural
            id="app.plural"
            defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong format}}"
            values={{ amount: 90 }}
        />
        <br />
        <FormattedDate
            value={props.date}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />
        <br />
        <FormattedNumber
            value={20.42}
            style="currency"
            currencyDisplay="symbol"
            currency="USD"
        />
        <br />
        <FormattedNumber
            value={10000}
        />
        <br />
        <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            timeZoneName="long"
        />
      </header>
    </div>
  );
}

export default App;
