
interface AuthState {
    user:  string | null ;
    jwt?: string; 
}

const initialState: AuthState = {
    user: null
}


type authType = { type: 'login' , payload: { user: string , jwt: string } }|
                {type:'logout'}


export const authReducer = ( state = initialState, action : authType ) =>{

    switch (action.type) {
        case 'login':
            return { 
                ...state,
                ...action.payload
            }
        case 'logout':
            return initialState;

        default:
            return state;
    }
}