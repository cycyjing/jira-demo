import React from "react";
import { Form, Input, Select } from "antd";
import { User } from "prototypes";

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
    <Form>
      <Input
        placeholder="Project Name"
        value={formValues.name}
        onChange={(e) => {
          return setFormValues({
            ...formValues,
            name: e.target.value,
          });
        }}
      ></Input>
      <Select
        value={formValues.personId}
        onChange={(value) => {
          return setFormValues({
            ...formValues,
            personId: value,
          });
        }}
      >
        <Select.Option value="">Manager</Select.Option>
        {users.map((user) => {
          return (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          );
        })}
      </Select>
    </Form>
  );
};

export default SearchPanel;
