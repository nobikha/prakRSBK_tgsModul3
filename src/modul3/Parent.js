import {Component} from "react";
import React from "react";
import Child from "./Child";
import Kelompok from "./Kelompok";

class Parent extends Component{
state = {komponenMuncul : true}

ubahKomponenMuncul = () => {
this.setState((state) => {
return {komponenMuncul : !this.state.komponenMuncul}})}

render() {return (
<div>
{this.state.komponenMuncul ? <Child/> : ''}<br></br>
{this.state.komponenMuncul ? <Kelompok/> : ''}<br></br>
<button onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Hilangkan' : 'Munculkan'} komponen!</button>
</div>);}}
export default Parent;