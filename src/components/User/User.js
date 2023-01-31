// Interface Segregation Principle (ISP)
// This principle states that a class should not be forced to implement interfaces it does not use. 
// In React, this can be achieved by breaking down large components into smaller, 
// more focused components that have a clear responsibility
class User {
    onRegister() {}
    onLogin() {}
    onLogout() {}
}


class RegisterUser {
    onRegister() {}
}

class LoginUser {
    onLogin() {}
}

class LogoutUser {
    onLogout() {}
}

