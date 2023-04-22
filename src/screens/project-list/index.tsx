import React, { useState, useEffect, Fragment } from "react";
import qs from "qs";
import { SearchPanel } from "./SearchPanel";
import { MainList } from "./MainList";
import { cleanObject, useDebounce, useMount } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    personId: "",
  });
  const debounceFormValues = useDebounce(formValues, 200);
  const [projectList, setProjectList] = useState([]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  useEffect(() => {
    // `${apiUrl}/projects?name=${formValues.projectName}&personId=${formValues.personId}`
    // it will too long if have many params, qs could help with that
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceFormValues))}`
    ).then(async (response) => {
      if (response.ok) {
        setProjectList(await response.json());
      }
    });
  }, [debounceFormValues]);

  return (
    <Fragment>
      <SearchPanel
        users={users}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <MainList projectList={projectList} users={users} />
    </Fragment>
  );
};
