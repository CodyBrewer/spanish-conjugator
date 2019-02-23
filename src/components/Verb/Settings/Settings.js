import React, { Component } from 'react';
import VerbTenses from './VerbTenses';
import NumberPerson from './VerbNumberPerson';
import './settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSettings: false
    };
  }
  changeSettings = event => {
    event.preventDefault();
    this.setState({
      updateSettings: !this.state.updateSettings
    });
  };

  render() {
    const hide = 'settings-buttons-hide';
    const display = 'settings-buttons-display';
    return (
      <div className="settings">
        <div className={this.state.updateSettings ? display : hide}>
          <div>
            <VerbTenses updateVerbTenses={this.props.updateVerbTenses} />
            <NumberPerson updateNumPerson={this.props.updateNumPerson} />
          </div>
          <button className="settings-button" onClick={this.props.filterData}>
            Update
          </button>
        </div>
        <div>
          <i
            className="fas fa-cog"
            onClick={this.changeSettings}
            // onClick={this.props.filterData}
          />
        </div>
      </div>
    );
  }
}

export default Settings;