import "./Styles/PrincipalNavigation.css";
function PrincipalNavigation(){
    return(
        <div className="principal-navigation">
            <nav>
                <ul id="logo">
                    <img src="https://via.placeholder.com/150" alt="Logo" />
                </ul>
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            
        </div>
    );
}

export {PrincipalNavigation};