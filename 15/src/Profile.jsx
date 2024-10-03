import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    render() {
        const { selectedTheme } = this.context;

        return (
            <article className={selectedTheme.className}>
                {content}
            </article>
        );
    }
  // END
}

export default Profile;
