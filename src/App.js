import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('X7YEC7PC5R', 'd1dabfb189638e931541cea1b369722f');

class App extends Component {
  render() {
    return (
      <div className="UScongress-InstantSearch">
        <h1>React InstantSearch for US congress demo</h1>
        <InstantSearch indexName="demo_UScongress" searchClient={searchClient}>
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
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
