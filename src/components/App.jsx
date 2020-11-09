import React from "react";

function App(){
    return (
        <nav>
            <div className="navBarLeft">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"></img>
            </div>
            <div className="navBarRight">
                <ul>
                    <li>Projets</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <h1>Test Hello World !</h1>
        </nav>
    );
}

export default App;