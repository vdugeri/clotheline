import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { firestore } from "../../firebase/fireabase.utils";

class ShopPage extends React.Component {
  unsubscriptFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async snapshot => {});
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
