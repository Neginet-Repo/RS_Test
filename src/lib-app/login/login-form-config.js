const loginFormConfig = () => {
    return {
        username: '',
        password: ''
    };
};

loginFormConfig.props = {
    username: {
        labelText: 'Username'
    },
    password: {
        labelText: 'Password',
        type: 'password'
    }
};

export default loginFormConfig;
