import handleLogout from "../handlers/handleLogout";
import ChatEngineApi from "../../../services/chatengineAPI";

function NavBar (props) {
    let user = ChatEngineApi.createOrGetUser(props.user, '12345678');
    console.log(user);
    return (
        <div className="navbar">
            <div className="navbar-component">
                <img className="usr-avt" src="https://static-00.iconduck.com/assets.00/chat-icon-2048x2048-i7er18st.png"></img>
            </div>
            <div className="navbar-component">
                <h1 className="navbar-title">Chat</h1>
            </div>
            <div className="navbar-component nav-dir">
                <div className="nav-dir-item chat-dir active">
                    <i className="fa-regular fa-comments"></i>
                </div>
                <div className="nav-dir-item contact-dir">
                    <i className="fa-regular fa-address-book"></i>
                </div>
                <div className="nav-dir-item settings-dir">
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
            <div className="navbar-component">
                <div className="logout" onClick={handleLogout}>
                    <i className="fa-solid fa-power-off"></i>
                </div>
            </div>
        </div>
    );
}

export default NavBar;