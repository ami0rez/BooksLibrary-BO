import { connect } from "react-redux";
import Logout from "./Logout";
import { logout } from "../../Actions/UserActions";

const mapStateTopProps = (state) => ({})
const mapDispatchToProps = {
  logout,
}

export default connect(mapStateTopProps, mapDispatchToProps)(Logout);