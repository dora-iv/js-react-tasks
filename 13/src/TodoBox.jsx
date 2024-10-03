import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ newTask: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { tasks, newTask } = this.state;

        if (newTask.trim() === '') return;

        const newTaskObj = { id: uniqueId(), text: newTask };
        this.setState({
            tasks: [...tasks, newTaskObj],
            newTask: '',
        });
    };

    handleRemove = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task.id !== id),
        }));
    };

    render() {
        const { tasks, newTask } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={newTask}
                                onChange={this.handleInputChange}
                                required
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>

                <div>
                    {tasks.map((task) => (
                        <Item
                            key={task.id}
                            task={task.text}
                            onRemove={() => this.handleRemove(task.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
// END
