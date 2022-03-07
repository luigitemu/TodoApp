import * as React from "react";
import { Provider } from "react-redux";
import './App.css'
import { store } from "./store/store";
import { fakeAuthProvider } from "./auth";
import { RouterPage } from "./router/RouterPage";

export default function App() {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
        <RouterPage/>
      {/* </AuthProvider> */}
    </Provider>
  );
}

// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// export const  AuthContext = React.createContext<AuthContextType>(null!);

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = React.useState<any>(null);

//   const signin = (newUser: string, callback: VoidFunction) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   const signout = (callback: VoidFunction) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   const value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
