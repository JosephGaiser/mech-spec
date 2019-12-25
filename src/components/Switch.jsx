import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';

class Switch extends Component {
    render() {
        const { mySwitch } = this.props;

        return (
            <div className="mySwitch">
                <Card style={{ width: '18rem', height: '28rem' }} body outline color="warning">
                    <CardBody >
                        <CardImg top width="100%" style={{width: 200, height: 200}} src="https://images-na.ssl-images-amazon.com/images/I/413IgqCYr0L.jpg" alt="zealio switch" />
                        <CardTitle><h3>{mySwitch.name}</h3></CardTitle>
                        <CardSubtitle>
                            <Badge color="warning">{mySwitch.type}</Badge>
                        </CardSubtitle>
                        <CardText>{mySwitch.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Switch;
