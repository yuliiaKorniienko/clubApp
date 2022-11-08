import React from "react";

import styles from "./ResultContainer.module.scss";
import SearchResultItem from "../../components/SearchResultItem";
import { MembersList } from "../../types";

const ResultContainer = ({
  clubMembersList,
  setClubMembersList,
}: {
  clubMembersList: MembersList;
  setClubMembersList: (...args: any[]) => void;
}) => {
  const handleDeleteMember = (id: string) => {
    const filteredList = clubMembersList.filter(
      ({ id: memberId }) => memberId !== id
    );
    setClubMembersList(filteredList);
  };
  return (
    <div className={styles.items}>
      <div className={styles.count}>Count: {clubMembersList.length}</div>
      {clubMembersList.map(({ name, age, id, activities }) => (
        <SearchResultItem
          name={name}
          age={age}
          key={id}
          activities={activities}
          id={id}
          handleDeleteMember={handleDeleteMember}
        />
      ))}
    </div>
  );
};

export default ResultContainer;
