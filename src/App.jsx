import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import ResumeForm from "./components/ResumeFOrm"
import {Routes,Route} from 'react-router-dom'
import { useState,useEffect } from "react"
import Preview from "./components/PreviewPage"
import Template1 from "./components/template1"
function App() {
  
  useEffect(()=>{
    let data=localStorage.getItem("resume")
    data && setResumeData(JSON.parse(data));
  }, [])
  let [resumeData,setResumeData]=useState({
    personelDetails:{
      name:"",
      location:"",
      email:"",
      linkedIn:"",
      mobile:"",
      github:"",
      website:""
    },
    summary:"",
    experience:[
      {company:"",position:"",duration:"",description:""}
    ],
    education:[
      {school:"",duration:"",grade:""}
    ],
    projects:[
      {name:"",technologies:"",description:""}
    ],
    skills:""
  })


  return(
    <div>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/edit" element={<ResumeForm resumeData={resumeData} setResumeData={setResumeData}/>}></Route>
      <Route path="/preview" element={<Preview/>}></Route>
      <Route path="/preview/1" element={<Template1 data={resumeData}/>}></Route>

    </Routes>
    </div>
  )
}

export default App