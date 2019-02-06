import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions"

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return(
        <h3>...loading</h3>
      )  
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  }
}

export default connect(mapStateToProps, {getCharacters})(CharacterListView);
