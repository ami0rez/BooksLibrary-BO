import { connect } from "react-redux";
import { getEntry, updateEntry, createEntry, getProfile, updateProfile } from "../../../Actions/AdministrationActions";

const mapStateToProps = (state) => ({ ...state.administration })
const mapDispatchToProps = {
  getEntry,
  updateEntry,
  createEntry,
  getProfile,
  updateProfile,
}

export default (Form) => connect(mapStateToProps, mapDispatchToProps)(Form);