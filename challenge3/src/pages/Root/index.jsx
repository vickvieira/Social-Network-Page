import { Outlet } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import { Div } from "../../components/Header/style.jsx";

function RootLayout() {
    
    return (
        <Div>
            <Header></Header>
            <Outlet></Outlet>
        </Div>
)}

export default RootLayout;