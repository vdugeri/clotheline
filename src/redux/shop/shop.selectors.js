import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionName =>
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionName] : null)
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
