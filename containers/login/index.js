import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { login } from "../../shared/actions";



class Login extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }
    
    componentDidMount() {
        
    }
    
    login(e) {
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        login(this.props.dispatch, this.state.email, this.state.password);
    }

    render() {
        
        return <form onSubmit={this.login.bind(this)}>
            <div>
                <input type="email" required placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value })}/>
            </div>
            <div>
                <input type="password" required placeholder="Password" value={this.state.password} onChange={ (e) => this.setState({password: e.target.value })}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>;
    }
}

export default connect()(Login)

