import React,{ Component } from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lol: '',
            pol: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('login: ' + this.state.lol + ' ' + 'password: ' + this.state.pol);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Login
                    <input
                        name="lol"
                        type="text"
                        checked={this.state.lol}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Password
                    <input
                        name="pol"
                        type="text"
                        value={this.state.pol}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
export default NameForm