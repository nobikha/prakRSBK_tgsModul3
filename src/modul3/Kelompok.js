import React, {Component} from "react";
class Kelompok extends Component {
    state = {  
        nama : '...',
        nim : '...'}
    
    anggotaKelompok = () => {
        this.setState((state) => { 
            if (state.nama === "...") {
                return {nama : "Nobi Kharisma || Agung Budi P."}
            } else {
                return {nama: "..."}}})}

    nimKelompok = () => {
        this.setState((state) => { 
            if (state.nim === "...") {
                return {nim : "(21120117130048) || (21120117140004)"}
            } else {
                return {nim: "..."}}})}
        
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillUnmount() { }
                
    render() {
        return (
            <div>
            <button onClick={this.anggotaKelompok}>Anggota</button>
            <button onClick={this.nimKelompok}>NIM</button>
            <br/>Kelompok 1<br/>
            <span>{this.state.nama}</span><br/>
            <span>{this.state.nim}</span>
            </div>);}}

export default Kelompok;