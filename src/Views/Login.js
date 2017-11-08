import React from 'react'

export default class Login extends React.Component{
    state={
        fields:{
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }
    onChange(evt){
        this.setState({
            fields:{
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }
    onSubmit(){
        console.log('tried to submit')
    }
    render(){
        console.log(this.state.fields)
        return(
        <div className="App">
            <h1>Music Daddy</h1>
            <form onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
                <input name='username' type='text' placeholder='username'/>
                <input name='email' type='text'placeholder='email'/>
                <input name='password' type='password'placeholder='password'/>
                <input name='confirmPassword' type='password'placeholder='confirm password'/>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}