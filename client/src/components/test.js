import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const sendToServer = {
            email:'jim@mail.com',
            password: 'asdf12324'
        };

        const signInResp = await axios.post('/api/sign-in', sendToServer);

        console.log('Sign In Response:', signInResp);

        // const resp = await axios.get('/api/test');

        // console.log('Server Resp:', resp);

        // const user = await axios.get('/api/user');
        
        // console.log('User Resp:', user);
    }

    render(){
        return <h1>New Text</h1>;
    }
}

export default Test;