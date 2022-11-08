import React, { useState } from "react";

import Settings from "../Settings";
import ResultContainer from "../ResultContainer";
import styles from "./club.module.scss";
import { membersList } from "../../mocks/membersList";
import { MembersList } from "../../types";

const Club = () => {
  const [clubMembersList, setClubMembersList] =
    useState<MembersList>(membersList);

  return (
    <main className={styles.container}>
      <Settings setClubMembersList={setClubMembersList} />
      <ResultContainer
        clubMembersList={clubMembersList}
        setClubMembersList={setClubMembersList}
      />
    </main>
  );
};

export default Club;
