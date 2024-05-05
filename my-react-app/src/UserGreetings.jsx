import PropTypes from "prop-types";

function UserGreetings (props) {

    const welcomePrompt = <h2 className="welcome-prompt">
                        Welcome {props.username}
                        </h2>;
    const loginPrompt = <h2 className="login-prompt">
                        Please Log In!
                        </h2>

    return (props.isLoggedIn ? welcomePrompt : loginPrompt)
}

UserGreetings.propTypes = {
    username : PropTypes.string,
    isLoggedIn : PropTypes.bool,
}

UserGreetings.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreetings