import {connect} from "react-redux";
import Specifications from "./Specifications";

let mapState = (state) => ({
	height: state.mainParams.params.height,
	type: state.mainParams.params.type,
	quantitySections: state.mainParams.quantitySections

})

const SpecificationsContainer = connect (mapState)(Specifications);
export default SpecificationsContainer;