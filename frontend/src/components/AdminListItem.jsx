import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class AdminListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Row>
                <Col md="auto"><img src={ this.props.image.url } alt={ this.props.image.name } /></Col>
                <Col md="auto">{ this.props.image.name }</Col>
                <Col md="auto"><span onClick={ () => console.log("clicked but need to delete using () => this.props.deleteImg(imageIdentifier)")}> X </span></Col>
                <hr/>
            </Row>
        );
    }
}

export default AdminListItem;