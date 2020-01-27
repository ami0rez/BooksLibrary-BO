import { connect } from "react-redux";
import { setBookName } from '../../../../Actions/filterActions';
import { getFilteresBooks } from '../../../../Actions/bookActions';
import NavSearch from "./NavSearch";

const mapStateToProps = (state) => ({ ...state.filters })
const mapDispatchToProps = {
  setBookName,
  getFilteresBooks,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);