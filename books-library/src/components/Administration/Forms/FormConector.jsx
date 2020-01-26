import { connect } from "react-redux";
import { getEntry, updateEntry, createEntry } from "../../../Actions/AdministrationActions";

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {
  getEntry,
  updateEntry,
  createEntry,
}

export default (Form) => connect(mapStateToProps, mapDispatchToProps)(Form);