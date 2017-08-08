/*
*  Name :   BubbleConfig.jsx
*  Location : /imports/UI/Bubbles
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

import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";
import LineEdit from '../../SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../SingleComponents/PushButton/PushButton.jsx';



export default class ListBubbleConfig extends AbsBubbleConfig {
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:''}
        this.addOpt=this.addOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
        this.mandare=this.mandare.bind(this);
    }

    addOpt(){
        let n=this.state.num+1;
        this.setState({num:n});
    }

    titleChange(txt){
        this.setState({title:txt});

    }


    optChange(text,id) {
      let m={id:id,value:text,check:false};
      let v=this.state.op;
      v[id-1]=m;
      this.setState({op:v});
     //this.state.op[id-1]={id:id,val:text,check:false};

    }

    mandare(){
      let m=this.state;//{num: this.state.num, op: this.state.op, title:this.state.title}
      this.props.getList(m);
    }

    render() {
        var rows = [];
        var n=this.state.num+1;
        for (var i=1; i < n; i++) {
            rows.push(<div>
                Opzione {i}:<br/>
                <LineEdit id={i} placeholder="Inserisci un opzione" updateState={this.optChange}/>
            </div>);
        }
        return (
            <div>
                <h1>Nome lista:</h1><br/>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.mandare}/>
            </div>

        );
    }
}
