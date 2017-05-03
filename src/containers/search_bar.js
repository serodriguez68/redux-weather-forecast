import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    // State here is COMPONENT level state, NOT
    // app level state (AS IN REDUX)
    this.state = { term: '' };

    // Take the existing onInputChange function, bind it to this (the component)
    // and replace the existing fuction with the result.
    // It's like overwritting the onInputChange function.
    // The binding is done to have the correct context of 'this' inside the function.
    // This solution is an alternative to using a callback function on 'onChange'
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // convinience for
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          // This state is COMPONENT LEVEL STATE, NOT app level state
          // as in redux
          value={this.state.term}
          // If you pass directly a function to an event (without a wrapper function)
          // you need to bind the 'this' context int the constructor.
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button  type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

// first argument is for mapStateToProps, however this container does not need
// any app level state mapping, that is why it is null
export default connect(null, mapDispatchtoProps)(SearchBar);
