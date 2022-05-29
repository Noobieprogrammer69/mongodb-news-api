const valid = ({userName, fullName, email, password, confirmPassword}) => {
    const error = {}

    if(!fullName) {
        error.fullName = 'Please add your Fullname'
    } else if (fullName.length > 30) {
        error.fullName = "Fullname should be less than 30 Characters"
    }
    if(!userName) {
        error.userName = 'Please add your Username'
    } else if (userName.length > 30) {
        error.userName = "Username should be less than 30 Characters"
    }

    if(!email){
        error.email = "please add your email"
    }else if(!validateEmail(email)){
        error.email = "Invalid Email format"
    }

    if(!password) {
        error.password = 'Please add your Password and dont forget about them.'
    } else if (password.length < 8) {
        error.password = "Password should be greater than 8 characters"
    }

    if(password !== confirmPassword) {
        error.confirmPassword = "Password should be match"
    }

    return {
        errorMsg:error,
        errorLength: Object.keys(error).length
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default valid;