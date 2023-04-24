import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  formValues: {
    name: string;
    personId: string;
  };
  setFormValues: (formValues: SearchPanelProps["formValues"]) => void;
}

const SearchPanel = ({
  users,
  formValues,
  setFormValues,
}: SearchPanelProps) => {
  return (
    <form>
      <input
        placeholder="Project Name"
        value={formValues.name}
        onChange={(e) => {
          return setFormValues({
            ...formValues,
            name: e.target.value,
          });
        }}
      ></input>
      <select
        value={formValues.personId}
        onChange={(e) => {
          return setFormValues({
            ...formValues,
            personId: e.target.value,
          });
        }}
      >
        <option value="">Manager</option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SearchPanel;
