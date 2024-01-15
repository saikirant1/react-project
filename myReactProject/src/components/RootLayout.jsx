import { Outlet } from "react-router-dom";
import NavBarPannel from "./NavBarPannel";
import { Provider } from "react-redux"; 
import store from '../store/store';
const RootLayout=()=>{
    return(
        <>
        <Provider store ={store}>
        <NavBarPannel/>
        <main>
            <Outlet/>
        </main>
        </Provider>
        </>
    )
}

export default RootLayout;