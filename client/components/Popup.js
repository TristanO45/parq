import React from "react";

const loginPopup = (props) => {
    return (
        <div className="loginPopup">
            <div className="popup-box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <form>
                    <label>
                        username
                        <input type="text" username="username" />
                    </label>
                    <label>
                        password
                        <input type="text" password="password" />
                    </label>
                </form>
            </div>
        </div>
    )
}