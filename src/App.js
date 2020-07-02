import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Menu,
  Panel,
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
      <InstantSearch indexName="USgov" searchClient={searchClient}>
      <div className="UScongress-InstantSearch">
        <h1>Instant Search for US representative *demo*</h1>
        <div className="content">
          <div className="left-panel">
            <Panel header="Filters">
              <RefinementList attribute="party" defaultRefinement={["Democrat"]}/>
            </Panel>
          </div>

        </div>
          <div>
            <SearchBox className="search-main" translations={{placeholder : "Search Representatives"}}  />
            <Hits hitComponent={Hit} />
          </div>
      </div>
        </InstantSearch>
    );
  }
}

function Hit(props) {
  console.log(props.hit.person);
  return (
    <article>
      <h1>
        <Highlight attribute="person.name" hit={props.hit} />
      </h1>
      <div>
        <Highlight attribute="party" hit={props.hit} />
      </div>
      <div>
        <Highlight attribute="state" hit={props.hit} />
      </div>
      <div className="links">
        <a href={props.hit.person.link} target="_blank" rel="noopener noreferrer">
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
