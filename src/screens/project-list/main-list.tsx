import React from "react";
import { Table } from "antd";
import { User, Project } from "prototypes";

interface MainListProps {
  projectList: Project[];
  users: User[];
}

const MainList = ({ projectList, users }: MainListProps) => {
  const columns = [
    {
      title: "Project Name",
      dataIndex: "name",
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name),
    },
    {
      title: "Manager",
      render: (project: Project) =>
        users.find((user: User) => user.id === project.personId)?.name || "N/A",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={projectList}
      rowKey="id"
      pagination={false}
    />
  );

  // return (
  //   <table style={{ margin: "auto", border: "2px solid" }}>
  //     <thead>
  //       <tr>
  //         <th>Project Name</th>
  //         <th>Manager</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {projectList.map((project) => {
  //         return (
  //           <tr key={project.id}>
  //             <td>{project.name}</td>
  //             <td>
  //               {users.find((user) => user.id === project.personId)?.name ||
  //                 "N/A"}
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // );
};

export default MainList;
