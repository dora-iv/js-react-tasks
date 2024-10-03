import React from 'react';

// BEGIN (write your solution here)
export default function getCard({ title, text }) {
    if (!title && !text) {
        return null;
    }

    const cardTitle = title ? <h4 className="card-title">{title}</h4> : null;
    const cardText = text ? <p className="card-text">{text}</p> : null;

    return (
        <div className="card">
            <div className="card-body">
                {cardTitle}
                {cardText}
            </div>
        </div>
    );
}
// END
