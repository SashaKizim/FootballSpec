import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router';
import { register } from '../../../store/auth'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class RegistrationForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        errors: {},
        isLoading: false,
        done: false
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                })
        }
        else {
            this.setState(
                { [name]: value })
        }
    }

    handleChange = (e) => {

        this.setStateByErrors(e.target.name, e.target.value);
    }

    handleDigitChange = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        this.setStateByErrors(e.target.name, e.target.value);
    }

    

    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.name === '') errors.name = "Поле є обов'язковим!"
        if (this.state.email === '') errors.email = "Поле є обов'язковим!"
        if (this.state.password === '') errors.password = "Поле є обов'язковим!"

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { name, email,  password } = this.state;
            this.setState({ isLoading: true });
            this.props.register({ Name: name,  Email: email, Password: password })
                .then(
                    () => this.setState({ done: true }),
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
        }
        else {
            this.setState({ errors });
        }
    }



    render() {
        const { errors, isLoading } = this.state;
        const form = (
            <form onSubmit={this.onSubmitForm}>
                <h2 style={{ textAlign: "center" }}>Реєстрація користувача</h2>

                {
                    !!errors.invalid ?
                        <div className="alert alert-danger">
                            <strong>Помилка!</strong> {errors.invalid}.
                    </div> : ''
                }

                <div className='form-group'>
                    <label htmlFor="name">Ім'я</label>
                    <input type="text"
                        className={classnames('form-control', { 'is-invalid': !!errors.name })}
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    {!!errors.name ? <span className="text-muted help-block">{errors.name}</span> : ''}
                </div>

               

                <div className='form-group'>
                    <label htmlFor="email">Електронна пошта</label>
                    <input type="text"
                        className={classnames('form-control', { 'is-invalid': !!errors.email })}
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        aria-describedby="emailHelpBlock" />
                    <small id="emailHelpBlock" className="form-text text-muted">Діюча адреса, на яку будуть приходити важливі повідомлення</small>
                    {!!errors.email ? <span className="text-muted help-block">{errors.email}</span> : ''}
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Пароль</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        aria-describedby="passwordHelpBlock" />
                    <small id="passwordHelpBlock" className="form-text text-muted">Ваш пароль повинен містити 8-20 символів, великі та малі букви та цифри</small>
                    {!!errors.password ? <span className="text-muted help-block">{errors.password}</span> : ''}
                </div>


                <div className="form-group">
                    <div className="">
                        <button type="submit"
                            className="btn btn-warning"
                            style={{ width: 100 + '%' }}
                            disabled={isLoading}>Зареєструватися <i className="fa fa-check-circle" aria-hidden="true"></i></button>
                    </div>
                </div>




            </form>
        )



        return (
            this.state.done ? <Redirect to="/" /> : form
        );
    }
}

RegistrationForm.propTypes =
{
    register: PropTypes.func.isRequired
}


//export default RegistrationForm;
export default connect(null, { register })(RegistrationForm);