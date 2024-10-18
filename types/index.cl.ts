declare type SignUpParams = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

declare type LogInParams = {
    email: string;
    password: string;
}