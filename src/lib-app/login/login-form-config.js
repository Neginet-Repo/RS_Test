const loginFormConfig = () => {
    return {
        username: '',
        password: ''
    };
};

loginFormConfig.props = {
    username: {
        labelText: 'Username',
        required: true
    },
    password: {
        labelText: 'Password',
        required: true,
        type: 'password'
    }
};

export default loginFormConfig;
