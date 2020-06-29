import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import { connectSearchBox } from 'react-instantsearch-dom';
import SearchBoxC from './components/SearchBoxC';


const searchClient = algoliasearch(
  'X7YEC7PC5R',
  '0dc7b12bb6c95839607db7255ad59503'
);

const CustomSearchBox = connectSearchBox(SearchBoxC);

class App extends Component {
  render() {
    return (
      <div className="UScongress-InstantSearch">
        <h1>React InstantSearch for US representative demo</h1>
        <InstantSearch indexName="USgov" searchClient={searchClient}>
          <div className="right-panel">
            <CustomSearchBox
           className="search-main"/>
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
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
        {/* <Highlight attribute="person.name" hit={props.hit} /> */}
      </div>
      <div>
        <Highlight attribute="state" hit={props.hit}/>
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
