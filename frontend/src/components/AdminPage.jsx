import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount = async () => {
        // this.fetchImg()
    }
    
    fetchImg = () => {    
        // fetch images     
        // axios.get()
        // set images to state
    }

    uploadImg = () => {
        // send out new img
        // this.fetchImg()
    }

    deleteImg = () => {        
        // send out ask to delete img
        // this.fetchImg()
    }

    render() {
        // loop over images in state
        return (
            <div>
                sweet list xD
                <ul>
                    <li>wow</li>
                    <li>wow</li>
                    <li>wow</li>
                    <li>wow</li>
                    <li>wow</li>
                </ul>
            </div>
        );
    }
}

export default AdminPage;