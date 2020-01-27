import { connect } from "react-redux";
import { getEntry, updateEntry, createEntry, getProfile } from "../../../Actions/AdministrationActions";

const mapStateToProps = (state) => ({
  userId: state
    && state.authentication
    && state.authentication.user.id
})
const mapDispatchToProps = {
  getEntry,
  updateEntry,
  createEntry,
  getProfile,
}

export default (Form) => connect(mapStateToProps, mapDispatchToProps)(Form);