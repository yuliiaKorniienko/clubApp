import React from "react";

import { TSearchResultItem } from "./types";
import styles from "./item.module.scss";

const SearchResultItem = ({
  name,
  age,
  activities,
  id,
  handleDeleteMember,
}: TSearchResultItem) => {
  const lastActivities = activities.slice(0, 3).join(",");
  const getMemberRating = () => {
    const maxRating = 5;
    const activitiesCount = activities.length;

    return activitiesCount >= maxRating ? maxRating : activitiesCount;
  };
  return (
    <div className={styles.item}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Activities: {lastActivities}</div>
      <div>Rating: {getMemberRating()}</div>
      <button
        className={styles.button_delete}
        onClick={() => handleDeleteMember(id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default SearchResultItem;
