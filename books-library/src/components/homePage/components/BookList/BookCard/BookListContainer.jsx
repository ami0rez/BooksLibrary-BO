import { addFilteresBooks } from "../../../../../Actions/bookActions";
import { connect } from "react-redux";
import BookList from "../BookList";

const mapStateToProps = (state) => ({ ...state.books });

const mapDispatchToProps = {
    addFilteresBooks,
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);