import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import AdminListItem from './AdminListItem.jsx'
import '../styles/App.css'

// update me later plz
const BASEURL = 'http://localhost:3000'

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                { name: 'bill1', url: 'https://via.placeholder.com/150x150' },
                { name: 'bill2', url: 'https://via.placeholder.com/150x150' },
                { name: 'bill3', url: 'https://via.placeholder.com/150x150' }
            ]
        }
    }

    componentDidMount = async () => {
        // this.fetchImg()
    }
    
    fetchImg = async () => {
        // const images = await axios.get(`${ BASEURL }/images`)
        // this.setState({ images: images.data })
    }

    uploadImg = () => {
        // send out new img
        // this.fetchImg()
    }

    deleteImg = (img) => {        
        // send out ask to delete img
        // this.fetchImg()
    }

    render() {
        return (
            <Container>
                <hr/>
                { this.state.images.map((image, i) => <AdminListItem key={ i } image={ image } deleteImg={ this.deleteImg } />) }
            </Container>
        );
    }
}

export default AdminPage;