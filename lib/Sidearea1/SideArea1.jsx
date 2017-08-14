/*
 *  Name :   SideArea1.jsx
 *  Location : /imports/UI/SideArea1
 *  Author: Nicolò Rigato
 *  Creation Data: 2017-06-27
 *  Description: {Breve descrizione del file}
 *  ----------------------------------------------
 *  History :
 *  Version: {Versione del file}
 *  Update data: {Data ultima modifica}
 *  Description: {descrizione della modifica}
 *  Author: {Autore della modifica}
 */


import React, {Component} from 'react';
import BubbleMenu from './BubbleMenu.jsx';
import {BubbleCollection} from "../database/databaseInitialization.js";
import { createContainer } from 'meteor/react-meteor-data';
import {BubbleDiscriminator} from "../uiConstruction/BubbleDiscriminator";
import ConfigArea from './ConfigArea';
import SentBubbles from './SentBubbles';



class Sidearea1 extends React.Component {
  constructor(props) {
    super(props);
    this.createConfigArea = this.createConfigArea.bind(this);
    this.closeConfig = this.closeConfig.bind(this);
    this.state = {
        openedConfigMenu : <div></div>//null
    }
  }

  closeConfig(){
      this.setState({openedConfigMenu: <div></div>});
  }

  createConfigArea(buttonType){
      this.setState({openedConfigMenu: BubbleDiscriminator.useDoMakeBubbleConfigurationMenu(buttonType, this.closeConfig)});
  }


  render() {
      console.log(this.props.bubbles);
    return (
      <div>
         <BubbleMenu createConfigArea={this.createConfigArea}/>

      </div>
    );
  }
}
/*
 <ConfigArea menu={this.state.openedConfigMenu} />
          <SentBubbles bubbles={this.props.bubbles}/>
 */

export default Sidearea1Container = createContainer(() => {
     Meteor.subscribe('bubbles');
   // console.log(BubbleCollection.find({}).fetch());
    return {
        bubbles: BubbleCollection.find({}).fetch(),
        currentUser: Meteor.user()
    };
}, Sidearea1);

