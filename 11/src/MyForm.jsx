import React from 'react';

// BEGIN (write your solution here)
const MyForm = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
    });
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const handleBack = () => {
        setSubmitted(false);
    };

    return (
        <>
            {submitted ? (
                <div>
                    <button type="button" className="btn btn-primary" onClick={handleBack}>Back</button>
                    <table className="table">
                        <tbody>
                        {Object.entries(formData)
                            .map(([key, value]) => ({
                                key,
                                value: value === true ? 'true' : value === false ? 'false' : value || '',
                            }))
                            .sort((a, b) => a.key.localeCompare(b.key))
                            .map(({ key, value }) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <form name="myForm" onSubmit={handleSubmit}>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="1234 Main St"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select
                            id="country"
                            name="country"
                            className="form-control"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="russia">Russia</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input
                                    id="rules"
                                    type="checkbox"
                                    name="acceptRules"
                                    className="form-check-input"
                                    checked={formData.acceptRules}
                                    onChange={handleChange}
                                />
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            )}
        </>
    );
};

export default MyForm;
// END
