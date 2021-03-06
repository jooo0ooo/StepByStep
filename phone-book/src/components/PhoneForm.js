import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // prevent page reload
        e.preventDefault();

        this.props.onCreate(this.state);
        // state init
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="phone number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">register</button>
            </form>
        );
    }
}

export default PhoneForm;