import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { login, logout } from "../../Actions/UserActions";

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const mapDispatchToProps = {
    login,
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
