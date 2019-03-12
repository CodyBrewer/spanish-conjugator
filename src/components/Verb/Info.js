import React from 'react';

const Info = props => {
  return (
    <div className='verb-info'>
      <div className='twelve'>Verb:</div>
      <div className='twenty-four'>{props.infinitive}</div>
      <div className='twelve'>Tense:</div>
      <div className='twenty-four'>{props.tense_english}{' '}
            {props.mood_english === 'Subjunctive'
              ? `(${props.mood_english})`
              : null}</div>
    </div>
  );
};

export default Info;