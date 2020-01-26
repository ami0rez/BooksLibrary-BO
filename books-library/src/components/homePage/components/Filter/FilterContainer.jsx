import { connect } from "react-redux";
import Filter from "./Filter";
import { getFilters } from "../../../../Actions/filterActions";

const mapStateToProps = (state) => ({ ...state.filters })
const mapDispatchToProps = {
    getFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);