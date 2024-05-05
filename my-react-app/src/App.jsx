import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreetings from "./UserGreetings.jsx";

function App() {
    
    return (
        <>
            {/* <Header/>
            <Food/>
            <Footer/> */}

            {/* <Card/> */}

            {/* <Button/> */}

            {/* <Student name = "Superman" age = {30} isEmployed = {true}/>
            <Student name = "Batman" age = {45} isEmployed = {false}/>
            <Student name = "Flash" age = {20} isEmployed = {true}/>
            <Student/> */}

            <UserGreetings isLoggedIn = {true} username = "Labib" />
            <UserGreetings isLoggedIn = {true}/>
        </>
    );
}

export default App
