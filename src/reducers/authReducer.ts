import { IUser } from '../interfaces/index';

interface AuthState {
    user:  IUser | null;
    checking: boolean 
}

const initialState: AuthState = {
    user: null,
    checking: true
}


type authType = { type: 'login' , payload: IUser }|
                {type:'logout'}|
                {type:'startChecking'}|
                {type:'finishChecking'}


export const authReducer = ( state = initialState, action : authType ) : AuthState =>{

    switch (action.type) {
        case 'login':
            return { 
                ...state,
                user: action.payload
            }
        case 'startChecking':
            return{ 
                ...state,
                checking:true
            }
        case 'finishChecking':
            return{ 
                ...state,
                checking: false
            }
        case 'logout':
            return {
                checking: false,
                user: null
            };

        default:
            return state;
    }
}