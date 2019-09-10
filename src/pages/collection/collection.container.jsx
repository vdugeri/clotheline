import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import withSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
