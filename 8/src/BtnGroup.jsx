import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.activeButton = null; // Изначально ни одна кнопка не активна
    }

    setActiveButton = (button) => {
        this.activeButton = button;
        this.forceUpdate(); // Принудительное обновление компонента
    };

    render() {
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={cn('btn', 'btn-secondary', 'left', { active: this.activeButton === 'left' })}
                    onClick={() => this.setActiveButton('left')}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={cn('btn', 'btn-secondary', 'right', { active: this.activeButton === 'right' })}
                    onClick={() => this.setActiveButton('right')}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;
// END
