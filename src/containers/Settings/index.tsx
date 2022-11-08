import React, { useState } from "react";
import styles from "./settings.module.scss";
import { ACTIVITY_TYPE } from "../../constants/common";
import { Props } from "./types";
import { membersList } from "../../mocks/membersList";

const Settings = ({ setClubMembersList }: Props) => {
  const [activityType, setActivityType] = useState(ACTIVITY_TYPE.HIKING);
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterBySearch(searchValue);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByActivity(e.target.value);
    setActivityType(e.target.value);
  };

  const filterByActivity = (activity: string) => {
    const filteredList = membersList.filter(({ activities }) =>
      activities.includes(activity)
    );
    setClubMembersList(filteredList);
  };

  const filterBySearch = (searchValue: string) => {
    const filteredList = membersList.filter(
      ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );

    setClubMembersList(filteredList);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form} aria-label="search">
      <section>
        <fieldset className={styles.fieldset}>
          <legend aria-labelledby="Filter by" className={styles.legend}>
            Filter by
          </legend>
          <div className={styles.radio_button}>
            <input
              type="radio"
              name="activity_type"
              id="hiking"
              value={ACTIVITY_TYPE.HIKING}
              checked={activityType === ACTIVITY_TYPE.HIKING}
              onChange={onClickRadioButton}
            />
            <label htmlFor="hiking">Hiking</label>
          </div>
          <div className={styles.radio_button}>
            <input
              type="radio"
              name="activity_type"
              id="running"
              value={ACTIVITY_TYPE.RUNNING}
              checked={activityType === ACTIVITY_TYPE.RUNNING}
              onChange={onClickRadioButton}
            />
            <label htmlFor="running">Running</label>
          </div>
          <div className={styles.radio_button}>
            <input
              type="radio"
              name="activity_type"
              id="biking"
              value={ACTIVITY_TYPE.BIKING}
              checked={activityType === ACTIVITY_TYPE.BIKING}
              onChange={onClickRadioButton}
            />
            <label htmlFor="biking">Biking</label>
          </div>
        </fieldset>
        <div className={styles.search}>
          <label
            aria-labelledby="Search query"
            className={styles.search_label}
            htmlFor="search"
          >
            Search by name
          </label>
          <input
            className={styles.search_input}
            value={searchValue}
            type="search"
            id="search"
            name="search_input"
            placeholder="Enter a search query"
            onChange={onChange}
          />
        </div>
        <div className={styles.submit}>
          <button className={styles.submit_button} type="submit">
            Search
          </button>
        </div>
      </section>
    </form>
  );
};

export default Settings;
