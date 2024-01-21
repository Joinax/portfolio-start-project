import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Quote} from "./layout/sections/quote/Quote";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/about-me/AboutMe";
import {Contacts} from "./layout/sections/contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Quote/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
        </div>
    );
}

export default App;
