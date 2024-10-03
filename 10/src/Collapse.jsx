import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Collapse = ({ text, opened = true }) => {
    const [isOpen, setIsOpen] = React.useState(opened);

    const handleToggle = (event) => {
        event.preventDefault();
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <p>
                <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-expanded={isOpen}
                    data-bs-toggle="collapse"  // Добавлено
                    onClick={handleToggle}
                >
                    Link with href
                </a>
            </p>
            <div className={cn('collapse', { 'show': isOpen })}>
                <div className="card card-body">{text}</div>
            </div>
        </div>
    );
};

export default Collapse;
// END
