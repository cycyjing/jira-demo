import React, { useEffect, useState } from 'react'

export const SearchPanel = () => {
  const [formValues,setFormValues]=useState({
    projectName: '',
    personId:''
  })
  const [users, setUsers]=useState([])
  const [projectList,setProjectList]=useState([])

  useEffect(() => {
    fetch('').then(async (response) => {
      if (response.ok) {
        setProjectList(await response.json())
      }
    })
  },[formValues])

  return (
    <form>
      <input 
        placeholder='Project Name' 
        value={formValues.projectName} 
        onChange={(e)=>{ console.log('e', e) 
        return setFormValues({
          ...formValues,
          projectName: e.target.value
        })}}></input>
      <select
        value={formValues.personId} 
        onChange={(e) => { return setFormValues({
          ...formValues,
          personId: e.target.value
        })}}>
        <option value=''>Manager</option>
        {
          users.map((user) => {return <option value={user.id}>{user.name}</option> })
        }
      </select>
    </form>
  )
}
