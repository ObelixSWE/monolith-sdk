/*
*  Name :   LineEdit.jsx
*  Location : /imports/UI/SingleComponents/LineEdit
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit html element
*  ----------------------------------------------
*  History :
*  Version: 0.0.1
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'

export class LineEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.updateState(event.target.value);
    }
    render(){
        return <input type="text" onChange={this.handleChange}/>;
    }
}

/*
How to use:
 <LineEdit updateState={this."function name"}/>
*/