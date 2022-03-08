import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch";
import { IUser } from "../interfaces";
import {toast} from 'react-toastify'



interface IAuth{
    email: string;
    password: string;
}



export const startLogin = (email: string, password: string) =>{

    return async (dispatch: any ) => {
        const id = toast.loading("Please wait...")
        try {
            const resp = await fetchWithOutToken('auth/login', {email, password }, 'POST');
            const body = await resp.json();
            if(resp.ok) {
                toast.update(id, { render: "Welcome 👌", type: "success", isLoading: false, autoClose: 3000, });
                localStorage.setItem('token', body.token);
                const date: number = new Date().getTime()
                localStorage.setItem('token-init-date',date.toString() );
                dispatch(login(body.user))
            }else{

                toast.update(id, { render: body.message     , type: "error", isLoading: false, autoClose: 3000, });
            }
            
        } catch (error: any) {
            toast.update(id, { render: error.message, type: "error", isLoading: false, autoClose: 3000, });
            console.error(error);
        }
    }

}

export const startChecking = () => {
    return async (dispatch: any) => {
        try {
            const resp = await fetchWithToken('auth/renew', {});
            const body = await resp.json();
            if(resp.ok) { 
                localStorage.setItem('token', body.token);
                const date: number = new Date().getTime()
                localStorage.setItem('token-init-date',date.toString() );
                dispatch(login(body.user))
            }
            dispatch(checkingFinish());
        } catch (error) {
            console.log(error)
            dispatch(checkingFinish());
            
        }
    }
}
export const startLogOut = () => {

    return (dispatch: any) => {
        localStorage.clear();
        dispatch(logout());

    }

}


 const login = (user  : IUser) => ({ type:'login', payload: { ...user } });

const logout = () => ({ type: 'logout' });
const checkingFinish = () => ({ type: 'finishChecking'});