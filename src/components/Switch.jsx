import React, {Component} from 'react';

class Switch extends Component {
    render() {
        const { mySwitch } = this.props;

        return (
            <div className="mySwitch">
                <h2>{mySwitch.name}</h2>
                <p>{mySwitch.type}</p>
                <h4>{mySwitch.description}</h4>
            </div>
        );
    }
}

export default Switch;
