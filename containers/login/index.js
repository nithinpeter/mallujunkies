import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { login } from "../../shared/actions";
import PrimaryButton from "../../components/primary-button";


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
        
        return <div style={style.container}> 
            <div style={style.logoContainer}></div>
            <form onSubmit={this.login.bind(this)}>
                <div style={style.margin}>
                    <input type="email" required placeholder="Email" value={this.state.email} 
                        onChange={ (e) => this.setState({email: e.target.value })} style={style.input}/>
                </div>
                <div>
                    <input type="password" required placeholder="Password" value={this.state.password} 
                        onChange={ (e) => this.setState({password: e.target.value })} style={style.input}/>
                </div>
                <div style={style.margin}>
                    <PrimaryButton label="Login" onClick={this.login.bind(this)} disabled={this.props.isLoading}/>
                </div>
            </form>
        </div>;
    }
}

const style = {
    container: {
        display: "flex",
        height: "75vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"
    },
    input: {
        width: "20em"
    },
    margin: {
        margin: "1em 0"
    },
    logoContainer: {
        background: 'url("/images/logo.png")',
        width: '200px',
        height: '100px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isLoading: state.auth.isLoading
    }
}

export default connect(mapStateToProps)(Login);

