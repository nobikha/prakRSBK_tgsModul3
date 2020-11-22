import React, {Component} from "react";
class Child extends Component {
    state = {angka: 0}
    
    componentDidMount() {alert(`Mount triggered!`)}

    tambahAngka = () => {
        this.setState((state) => {return {angka: state.angka + 1}})}
                
    kurangAngka = () => {
        this.setState((state) => {return {angka: state.angka - 1}})}
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Nilai sebelumnya: ${prevState.angka}`)}

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Ubah nilai?');}

    componentWillUnmount() {alert('Komponen akan dihilangkan...')}
    
    render() {return (
<div><button onClick={this.tambahAngka}>Tambah Nilai</button>
<button onClick={this.kurangAngka}>Kurangi Nilai</button><br/>
<span>Nilai : {this.state.angka}</span>
</div>);}}
export default Child;

