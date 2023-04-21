import React, { useEffect, useState } from 'react'

export const SearchPanel = ({users,formValues,setFormValues}) => {
  
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
