import React, { Component } from "react";
import { Text, View, TextInput } from 'react-native';


// component
class Header extends Component {

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
    constructor(props) {
        super(props);
        this.state = {
            umur: this.props.usia,
            inputan: '',
        }
    }
    //end state dengan constructor


    handleInput = (events) => {
        this.setState({
            inputan: events
        })
    }

    render() {
        return (
            <View>
                <Text>Ini Header + state: {this.state.umur}</Text>
                {/* <TextInput onChangeText={
                    // inline handle change
                    (events) => { 
                        this.setState({ inputan: events }) 
                    }} 
                /> */}
                <TextInput onChangeText={this.handleInput} placeholder="masukan inputan" value={this.state.inputan}/>
                <Text>ini adalah text inputan: {this.state.inputan}</Text>
            </View>
        )
    }
}

export default Header;