import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            suggestions: [],
        };
    }


    handleInputChange = async (e) => {
        const input = e.target.value;
        this.setState({ input });


        if (input.length > 0) {
            try {
                const response = await axios.get('/countries', { params: { term: input } });
                this.setState({ suggestions: response.data });
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        } else {

            this.setState({ suggestions: [] });
        }
    };

    render() {
        const { input, suggestions } = this.state;

        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                        value={input}
                        onChange={this.handleInputChange}
                    />
                </form>
                {suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((country) => (
                            <li key={country}>{country}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default Autocomplete;
// END
