


interface IAuth{
    username: string;
    password: string;
}

export const login = ({username, password} : IAuth) => ({ type:'login', payload: { user: username, jwt: password } });