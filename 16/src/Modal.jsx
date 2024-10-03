import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Modal extends React.Component {
    render() {
        const { isOpen, children } = this.props;

        const modalClass = cn('modal', {
            'fade show': isOpen,
        });

        const modalStyle = {
            display: isOpen ? 'block' : 'none',
        };

        return (
            <div className={modalClass} style={modalStyle} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.Header = ({ toggle, children }) => (
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toggle}
        />
    </div>
);

Modal.Body = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
);

Modal.Footer = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);

export default Modal;
// END
