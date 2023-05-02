import React, { useState, useEffect, Fragment } from "react";
import qs from "qs";
import SearchPanel from "./search-panel";
import MainList from "./main-list";
import { cleanObject, useDebounce, useMount } from "utils";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const { logout } = useAuth();
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
      <button onClick={logout}>Logout</button>
      <SearchPanel
        users={users}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <MainList projectList={projectList} users={users} />
    </Fragment>
  );
};

export default ProjectListScreen;
