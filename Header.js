import React, { Component } from "react";
import { Text } from 'react-native';


// component
class Header extends Component{

    //state secara langsung
    // state = {
    //     // name: "thomas",
    //     // atau
    //     //props didalam state
    //     name: this.props.usia,
    // }
    //end state secara langsung

    //state dengan constructor
    //tanpa props
    // constructor(){
    //     super();
    //     this.state = {
    //         name: "thomas",
    //     }
    // }
    //dengan props
    constructor(props){
        super(props);
        this.state = {
            umur: this.props.usia,
        }
    }
    //end state dengan constructor

    render(){
      return(
      <Text>Ini Header + props: {this.props.person} + state: {this.state.umur}</Text>
      )
    }
}
  
export default Header;