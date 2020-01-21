import React, { Component } from 'react'

export default class Register extends Component {


    constructor() {
        super();
        this.state = {
            fullName: null,
            email: null,
            password: null,
            isValid: "",
            validName: "",
            validEmail: "",
            validPass: ""
        }
    }

    setName(events) {
        if (events.target.value.length <= 6) {
            this.setState({
                validName: "length should be > 6"
            })
        } else {

            this.setState({
                fullName: events.target.value,
                validName: ""
            })
        }
    }

    setEmail(events) {
        this.setState({
            email: events.target.value
        })
    }

    setPassword(events) {
        this.setState({
            password: events.target.value
        })
    }

    async onSubmit(events) {
        events.preventDefault();
        const data = {
            name: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        }

        const result = await fetch('http://localhost:3001/api/register', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const jsonData = await result.json();
        const status = await result.status
        console.log(status)
        //console.log(jsonData.message.details[0].message)
        if (status != 200) {
            this.setState({
                isValid: jsonData.message.details[0].message
            })
        }else{
            window.location.replace("/home");
        }

    }

    render() {
        return (
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input onChange={this.setName.bind(this)} type="text" className="form-control" />
                        <small id="emailHelp" className="form-text text-muted">{this.state.validName}</small>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input onChange={this.setEmail.bind(this)} type="email" className="form-control" aria-describedby="emailHelp" />

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.setPassword.bind(this)} type="password" className="form-control" id="exampleInputPassword1" />
                        {this.state.isValid}
                    </div>

                    <button onClick={this.onSubmit.bind(this)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}