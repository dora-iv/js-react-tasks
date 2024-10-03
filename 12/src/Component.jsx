import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

// BEGIN (write your solution here)
const CounterLog = () => {
    const [log, setLog] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);

    const addLogEntry = (value) => {
        setLog((prevLog) => [{ id: uniqueId(), value }, ...prevLog]);
        setCurrentValue(value);
    };

    const handleIncrement = () => {
        addLogEntry(currentValue + 1);
    };

    const handleDecrement = () => {
        addLogEntry(currentValue - 1);
    };

    const handleRemoveEntry = (id) => {
        const newLog = log.filter(entry => get(entry, 'id') !== id);
        setLog(newLog);
        setCurrentValue(newLog.length > 0 ? get(newLog[0], 'value') : 0);
    };

    return (
        <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={handleIncrement}>+</button>
                <button type="button" className="btn btn-outline-danger" onClick={handleDecrement}>-</button>
            </div>
            {log.length > 0 && (
                <div className="list-group">
                    {log.map(({ id, value }) => (
                        <button
                            key={id}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleRemoveEntry(id)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
// END

export default CounterLog;
// END
