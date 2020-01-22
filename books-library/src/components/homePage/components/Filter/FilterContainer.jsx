import { connect } from "react-redux";
import Filter from "./Filter";

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);