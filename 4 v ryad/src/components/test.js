import React from 'react';

class Hello extends React.Component {

    sayHello(name) {
        return `Hello, ${name}!`;
    }

    render() {
        
        return (
            <div>
                {this.sayHello(this.props.name)}
            </div>
        )
    }
};

export default Hello;