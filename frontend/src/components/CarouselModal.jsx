import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class CarouselModal extends Component {

    render() {
        switch(this.props.name) {
            case 'sevenk':
                return (
                    <Modal
                        className="modal-style"
                        onHide={this.props.toggle}
                        aria-labelledby="modal-label"
                        show={this.props.showModal} >
                        <div>sevenk</div>
                    </Modal>
                );
            case 'contact':
                return (
                    <Modal
                        className="modal-style"
                        onHide={this.props.toggle}
                        aria-labelledby="modal-label"
                        show={this.props.showModal}>>
                        <div>contact</div>
                    </Modal>
                );
            case 'industrial':
                return (
                    <Modal
                        className="modal-style"
                        onHide={this.props.toggle}
                        aria-labelledby="modal-label"
                        show={this.props.showModal}>
                        <div>industrial</div>
                    </Modal>
                );
            case 'graphic':
                return (
                    <Modal
                        className="modal-style"
                        onHide={this.props.toggle}
                        aria-labelledby="modal-label"
                        show={this.props.showModal} >
                        <div>graphic</div>
                    </Modal>
                );
            default:
                return (
                    <Modal
                        className="modal-style"
                        onHide={this.props.toggle}
                        aria-labelledby="modal-label"
                        show={this.props.showModal} >
                        <div>nothing to see here</div>
                    </Modal>
                );
        }
       
    }
}

export default CarouselModal;