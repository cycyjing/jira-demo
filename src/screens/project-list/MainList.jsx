import React from 'react';

export const MainList = ({projectList,users}) => {
  return (
    <table border={'2px solid'} style={{margin:'auto'}}>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {
          projectList.map((project) => {
            return (
              <tr>
                <td>{project.name}</td>
                <td>{users.find(user => user.id === project.personId)?.name || 'N/A'}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
