/*
*  Name :   ComboBox.jsx
*  Location : /imports/UI/SingleComponents/ComboBox
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a ComboBox
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

export default class ComboBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:this.props.options[0],
        }
        this.optChange=this.optChange.bind(this);
    }

    optChange(event) {
        let selInd= event.target.selectedIndex;
        this.setState({selected:this.props.options[selInd]});
        this.props.getSelection(this.props.options[selInd]);
    }

    render(){
        const el = this.props.options.map((myvalue,i) => ( <option key={i} value={i}>{myvalue}</option>));
		var cbClass = classNames("",this.props.classes);
        return(
            <select id={this.props.id} className={cbClass} onChange={this.optChange}>
                {el}
            </select>

                    );
    }
}

/*
<ComboBox
	id= // like HTML id
	classes= // CSS classes
    options={["a","b","c"]} //array of options
    getSelection={this."function name"}
/>
*/