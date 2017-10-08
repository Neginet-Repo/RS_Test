const signUpFormConfig = () => {
    return {
        address: '',
        addressOfProperty: '',
        approved: 'yes',
        closingDays: '',
        companyAddress: '',
        companyName: '',
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
        labelText: 'Address of Property'
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
        labelText: 'Approved'
    },
    closingDays: {
        inputSize: 'tiny',
        labelText: 'Closing Days'
    },
    companyAddress: {
        inputSize: 'large',
        labelText: 'Company Address'
    },
    companyName: {
        inputSize: 'medium',
        labelText: 'Company Name'
    },
    dateOfSelling: {
        inputSize: 'medium',
        labelText: 'Date of Selling'
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
        labelText: 'Email Address',
        required: true,
        type: 'email'
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
        labelText: 'Broker License Number'
    },
    licenseNumber: {
        inputSize: 'large',
        labelText: 'License Number'
    },
    listings: {
        inputSize: 'small',
        labelText: 'Number of Listings'
    },
    listPrice: {
        inputSize: 'medium',
        labelText: 'List Price'
    },
    maximumPurchasePrice: {
        inputSize: 'tiny',
        labelText: 'Maximum Price'
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
        labelText: 'Method of Purchase'
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
    types: {},
    username: {
        inputSize: 'large',
        labelText: 'Username',
        required: true
    },
    vendorPhoneNumber: {
        inputSize: 'large',
        labelText: 'Vendor Phone Number'
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
        labelText: 'Type of Vendor'
    }
};

export default signUpFormConfig;
