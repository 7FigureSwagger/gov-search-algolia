import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  Menu,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'X7YEC7PC5R',
  '0dc7b12bb6c95839607db7255ad59503'
);

class App extends Component {
  render() {
    return (
      <div className="UScongress-InstantSearch">
        <h1>React InstantSearch for US congress demo</h1>
        <InstantSearch indexName="USgov" searchClient={searchClient}>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  console.log(props);
  return (
    <article>
      <h1>
        <Highlight attribute="party" hit={props.hit} />
      </h1>
      <div>
        <Highlight attribute="person.name" hit={props.hit} />
        <Highlight attribute="person.gender" hit={props.hit}/>
      </div>
      <div className="links">
        <a href={props.hit.person.link}>
          link
        </a>
      </div>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
