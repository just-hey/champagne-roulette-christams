import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Contact from './Contact.jsx'

class CarouselModal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        switch(this.props.content) {
            case 'sevenk':
                return (
                    <Modal
                        className="modal-style"
                        onHide={ this.props.toggle }
                        aria-labelledby="modal-label"
                        show={ this.props.showModal } >
                        <div>sevenk</div>
                    </Modal>
                );
            case 'contact':
                return (
                    <Modal
                        className="modal-style"
                        onHide={ this.props.toggle }
                        aria-labelledby="modal-label"
                        show={ this.props.showModal }>
                        <button onClick={ this.props.toggle }>Close</button>
                        <Contact />
                    </Modal>
                );
            case 'industrial':
                return (
                    <Modal
                        className="modal-style"
                        onHide={ this.props.toggle }
                        aria-labelledby="modal-label"
                        show={ this.props.showModal }>
                        <button onClick={ this.props.toggle }>Close</button>
                        <div>industrial</div>
                    </Modal>
                );
            case 'graphic':
                return (
                    <Modal
                        className="modal-style"
                        onHide={ this.props.toggle }
                        aria-labelledby="modal-label"
                        show={ this.props.showModal } >
                        <button onClick={ this.props.toggle }>Close</button>
                        <div>graphic</div>
                    </Modal>
                );
            default:
                return (
                    null
                );
        }
       
    }
}

export default CarouselModal;

// IGNORE THIS FOR NOW?
/* <Modal
    className="modal-style"
    onHide={ this.props.toggle }
    aria-labelledby="modal-label"
    show={ this.props.showModal } >
    <button onClick={ this.props.toggle }>Close</button>
    <div>nothing to see here</div>
</Modal> */