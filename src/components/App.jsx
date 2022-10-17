import react from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
function App(){
    return <div><header>
        <Header />
        </header>
        <Note />
        <footer><Footer /></footer>
    </div>;
}
export default App;