const signUpFormConfig = () => {
    return {
        address: '',
        approved: '',
        closingDays: '',
        companyAddress: '',
        companyName: '',
        confirmPassword: '',
        downPayment: '',
        earnestMoneyDeposit: '',
        emailAddress: '',
        firstName: '',
        lastName: '',
        licenseBrokerNumber: '',
        licenseNumber: '',
        listings: '',
        maximumPurchasePrice: '',
        methodOfPurchase: '',
        password: '',
        phoneNumber: '',
        username: ''
    };
};

signUpFormConfig.props = {
    address: {
        inputSize: 'large',
        labelText: 'Address'
    },
    approved: {
        inputSize: 'tiny',
        labelText: 'Approved'
    },
    closingDays: {
        inputSize: 'small',
        labelText: 'Number of Closing Days'
    },
    companyAddress: {
        labelText: 'Company Address'
    },
    companyName: {
        labelText: 'Company Name'
    },
    confirmPassword: {
        inputSize: 'large',
        labelText: 'Confirm Password',
        type: 'password'
    },
    downPayment: {
        inputSize: 'tiny',
        labelText: 'Down Payment %'
    },
    earnestMoneyDeposit: {
        inputSize: 'medium',
        labelText: 'Earnest Money Deposit %'
    },
    emailAddress: {
        inputSize: 'medium',
        labelText: 'Email Address'
    },
    firstName: {
        inputSize: 'large',
        labelText: 'First Name'
    },
    lastName: {
        inputSize: 'large',
        labelText: 'Last Name'
    },
    licenseBrokerNumber: {
        labelText: 'Broker License Number'
    },
    licenseNumber: {
        labelText: 'License Number'
    },
    listings: {
        labelText: 'Listing'
    },
    maximumPurchasePrice: {
        inputSize: 'tiny',
        labelText: 'Maximum Price'
    },
    methodOfPurchase: {
        inputSize: 'small',
        labelText: 'Method of Purchase'
    },
    password: {
        inputSize: 'large',
        labelText: 'Password',
        type: 'password'
    },
    phoneNumber: {
        inputSize: 'medium',
        labelText: 'Phone Number'
    },
    username: {
        labelText: 'Username'
    }
};

export default signUpFormConfig;
