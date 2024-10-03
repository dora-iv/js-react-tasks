import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    render() {
        const { themes, selectedTheme, switchTheme } = this.context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map(theme => (
                    <ToggleButton
                        key={theme.id}
                        id={`theme-${theme.id}`}
                        type="radio"
                        variant="secondary"
                        checked={selectedTheme.id === theme.id}
                        value={theme.id}
                        onChange={() => switchTheme(theme.id)}
                    >
                        {theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;
