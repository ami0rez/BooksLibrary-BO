import { connect } from "react-redux";
import { getEntry, updateEntry, createEntry } from "../../../../Actions/AdministrationActions";
import BookForm from "./BookForm";

const mapStateToProps = (state) => ({ ...state.administration })
const mapDispatchToProps = {
  getEntry,
  updateEntry,
  createEntry,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);