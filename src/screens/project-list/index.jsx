import React,{useState,useEffect} from 'react'
import { SearchPanel } from './SearchPanel'
import { MainList } from './MainList'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers]=useState([])
  const [formValues,setFormValues]=useState({
    projectName: '',
    personId:''
  })
  const [projectList,setProjectList]=useState([])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  },[])
  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async (response) => {
      if (response.ok) {
        setProjectList(await response.json())
      }
    })
  },[formValues])
  
  return (
    <>
      <SearchPanel users={users} formValues={formValues} setFormValues={setFormValues} />
      <MainList projectList={projectList} users={users} />    
    </>
  )
}
