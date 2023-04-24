import React from "react";
import { User } from "./SearchPanel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface MainListProps {
  projectList: Project[];
  users: User[];
}

const MainList = ({ projectList, users }: MainListProps) => {
  return (
    <table style={{ margin: "auto", border: "2px solid" }}>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {projectList.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "N/A"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MainList;
