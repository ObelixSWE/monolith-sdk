import React, {Component} from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';

export default class BubbleMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let BubbleList = Object.keys(BubbleDiscriminator.BubbleCreatorMap);
    return (
      <div id="bubble_button_menu" className="bubbleborder bubble-creation-button">
        <ul>
          {BubbleList.map((button) => { return (<li key={button}> {BubbleDiscriminator.useDoMakeButton(button, this.props.createConfigArea)} </li>);})}
        </ul>
      </div>
    );
  }
}


/*
createConfigArea function to create config menu
 */
