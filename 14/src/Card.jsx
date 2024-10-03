import React from 'react';

// BEGIN (write your solution here)
class Card extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="card">
                {children}
            </div>
        );
    }
}

class CardBody extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="card-body">
                {children}
            </div>
        );
    }
}

class CardTitle extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <h4 className="card-title">
                {children}
            </h4>
        );
    }
}

class CardText extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <p className="card-text">
                {children}
            </p>
        );
    }
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
// END
