import React, { Component } from 'react';
import miniData from '../../miniData';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import RandomButton from '../home/Options/RandomButton';
import ConversationButton from '../home/Options/ConversationButton';
import { spainSpanish, latamSpanish } from '../../components/NumPersonFilters';
import { Beginner, Intermediate } from '../../components/VerbTensesFilters';
import { Route, Link } from 'react-router-dom';
import RandomFiltered from './RandomFiltered/RandomFiltered'

class OptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: miniData,
      tempData: [],
      NumberPerson: 'Latam',
      VerbTenses: 'Intermediate'
    };
  }

  updateNumPerson = event => {
    this.setState({
      NumberPerson: event.target.value
    });
  };

  updateVerbTenses = event => {
    this.setState({
      VerbTenses: event.target.value
    });
  };

  filterData = event => {
    event.preventDefault();

    if (this.state.VerbTenses === 'Beginner') {
      this.setState({
        data: Beginner
      });
    } else if (this.state.VerbTenses === 'Intermediate') {
      this.setState({
        data: Intermediate
      });
    } else if (this.state.VerbTenses === 'Advanced') {
      this.setState({
        data: miniData
      });
    }

    const spainSpanishFiltered = spainSpanish(this.state.data);
    if (this.state.NumberPerson === 'Spain') {
      this.setState({
        tempData: spainSpanishFiltered
      });
    }
    const latamFiltered = latamSpanish(this.state.data);
    if (this.state.NumberPerson === 'Latam') {
      this.setState({
        tempData: latamFiltered
      });
    }
  };

  render() {
    console.log('Data', this.state.data)
    console.log('Temp', this.state.tempData)

    return (
        <div>
            <form onSubmit={ this.filterData }>
                <div>
                    <h3>Verb Frequency</h3>
                    <VerbFrequency />
                </div>
                <div>
                    <h3>Verb Tenses</h3>
                    <VerbTenses updateVerbTenses={ this.updateVerbTenses } />
                </div>
                <div>
                    <h3>Number and Person</h3>
                    <NumberPerson updateNumPerson={ this.updateNumPerson } />
                </div>
                <button type="submit">Update Settings</button>
            </form>
            <Link to={ { pathname: '/randomFiltered', state: { data: this.state.data } } }>
                <h4 type="submit">Begin Verb Pratice</h4>
            </Link>
            {/* <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link> */}
            <Link to="/AdvancedOptions">
                <h4 type="submit">Advanced Settings</h4>
            </Link>
            <RandomButton />
            <ConversationButton />
        </div>
    );
  }
}

export default OptionsContainer;
