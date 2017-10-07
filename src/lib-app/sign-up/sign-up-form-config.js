const signUpFormConfig = () => {
    return {
        address: '',
        approved: 'yes',
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
        methodOfPurchase: 'cash',
        password: '',
        phoneNumber: '',
        username: '',
        vendorPhoneNumber: '',
        vendorType: 'financing'
    };
};

signUpFormConfig.props = {
    address: {
        inputSize: 'large',
        labelText: 'Address',
        required: true
    },
    addressOfProperty: {
        inputSize: 'large',
        labelText: 'Address of Property',
        required: true
    },
    approved: {
        inputSize: 'tiny',
        items: [
            {
                content: 'Yes',
                value: 'yes'
            },
            {
                content: 'No',
                value: 'no'
            }
        ],
        labelText: 'Approved',
        required: true
    },
    closingDays: {
        inputSize: 'tiny',
        labelText: 'Closing Days',
        required: true
    },
    companyAddress: {
        inputSize: 'large',
        labelText: 'Company Address',
        required: true
    },
    companyName: {
        inputSize: 'medium',
        labelText: 'Company Name',
        required: true
    },
    confirmPassword: {
        inputSize: 'large',
        labelText: 'Confirm Password',
        required: true,
        type: 'password'
    },
    dateOfSelling: {
        inputSize: 'medium',
        labelText: 'Date of Selling',
        required: true
    },
    downPayment: {
        inputSize: 'tiny',
        labelText: 'Down Payment %',
        required: true
    },
    earnestMoneyDeposit: {
        inputSize: 'medium',
        labelText: 'Earnest Money Deposit %',
        required: true
    },
    emailAddress: {
        inputSize: 'medium',
        labelText: 'Email Address',
        required: true
    },
    firstName: {
        inputSize: 'large',
        labelText: 'First Name',
        required: true
    },
    lastName: {
        inputSize: 'large',
        labelText: 'Last Name',
        required: true
    },
    licenseBrokerNumber: {
        inputSize: 'large',
        labelText: 'Broker License Number',
        required: true
    },
    licenseNumber: {
        inputSize: 'large',
        labelText: 'License Number',
        required: true
    },
    listings: {
        inputSize: 'small',
        labelText: 'Number of Listings',
        required: true
    },
    listPrice: {
        inputSize: 'medium',
        labelText: 'List Price',
        required: true
    },
    maximumPurchasePrice: {
        inputSize: 'tiny',
        labelText: 'Maximum Price',
        required: true
    },
    methodOfPurchase: {
        inputSize: 'small',
        items: [
            {
                content: 'Cash',
                value: 'cash'
            },
            {
                content: 'FHA',
                value: 'fha'
            },
            {
                content: 'VA',
                value: 'va'
            },
            {
                content: 'Conventional',
                value: 'conventional'
            },
            {
                content: 'Hard Money',
                value: 'hard-money'
            },
            {
                content: 'Other',
                value: 'other'
            }
        ],
        labelText: 'Method of Purchase',
        required: true
    },
    password: {
        inputSize: 'large',
        labelText: 'Password',
        required: true,
        type: 'password'
    },
    phoneNumber: {
        inputSize: 'medium',
        labelText: 'Phone Number',
        required: true
    },
    username: {
        labelText: 'Username',
        required: true
    },
    vendorPhoneNumber: {
        inputSize: 'large',
        labelText: 'Vendor Phone Number',
        required: true
    },
    vendorType: {
        inputSize: 'medium',
        items: [
            {
                content: 'Financing',
                value: 'financing'
            },
            {
                content: 'Escrow',
                value: 'escrow'
            },
            {
                content: 'Title',
                value: 'title'
            },
            {
                content: 'Attorney',
                value: 'attorney'
            }
        ],
        labelText: 'Type of Vendor',
        required: true
    }
};

export default signUpFormConfig;
