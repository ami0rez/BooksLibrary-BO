import { connect } from "react-redux";
import AdministrationTable from "./AdministrationTale";
import { getAllEntries, updateEntry, deleteEntry } from "../../../Actions/AdministrationActions";

const mapStateToProps = (state) => ({ ...state.administration })
const mapDispatchToProps = {
	getAllEntries,
	updateEntry,
	deleteEntry,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministrationTable);