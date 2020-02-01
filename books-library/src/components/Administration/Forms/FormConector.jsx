import { connect } from "react-redux";
import { getEntry, updateEntry, createEntry, getProfile } from "../../../Actions/AdministrationActions";
import { login } from "../../../Actions/UserActions";

const mapStateToProps = (state) => ({
  userId: state
    && state.authentication
    && state.authentication.user
    && state.authentication.user.id
})
const mapDispatchToProps = {
  getEntry,
  updateEntry,
  createEntry,
  getProfile,
  login
}

export default (Form) => connect(mapStateToProps, mapDispatchToProps)(Form);