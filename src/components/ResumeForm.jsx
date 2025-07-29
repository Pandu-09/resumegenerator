import './ResumeForm.css'

function ResumeForm({resumeData,setResumeData})
{
    console.log(resumeData)
    function addBlock(section,feilds)
    {
        setResumeData({...resumeData,[section]:[...resumeData[section],feilds]})
    }

    function  removeBlock(section,index)
    {
        let data=resumeData[section].filter((item,i)=>i!=index);
        setResumeData({...resumeData,[section]:data})
    }

    function updateFeild(section,feild,value)
    {
        setResumeData({...resumeData,[section]:{...resumeData[section],[feild]:value}})
    }

    function updateValue(section,value)
    {
        setResumeData({...resumeData,[section]:value})

    }

    function updateArrayFeild(section,index,field,value)
    {
        let data=resumeData[section];

        let updatedData=data.map((item,i)=>i==index?{...item,[field]:value}:item);

        setResumeData({...resumeData,[section]:updatedData})
    }


    function saveData()
    {
        localStorage.setItem("resumeDetails",JSON.stringify(resumeData))
    }


    return(
        <div className="form-container">
            <div className="section">
                <h2 className='title'>Personel details</h2>
                <div className='input-group'>
                    <input type="text" placeholder="enter your name" value={resumeData["personelDetails"].name}  onChange={(e)=>updateFeild("personelDetails","name",e.target.value)}/>
                    <input type="text" placeholder="enter your email" value={resumeData["personelDetails"].email} onChange={(e)=>updateFeild("personelDetails","email",e.target.value)}/>
                    <input type="text" placeholder="enter your github" value={resumeData["personelDetails"].github} onChange={(e)=>updateFeild("personelDetails","github",e.target.value)}/>
                    <input type="text" placeholder="enter your linkedin" value={resumeData["personelDetails"].linkedIn} onChange={(e)=>updateFeild("personelDetails","linkedIn",e.target.value)}/>
                    <input type="text" placeholder="enter your website" value={resumeData["personelDetails"].website} onChange={(e)=>updateFeild("personelDetails","website",e.target.value)}/>
                    <input type="text" placeholder="enter your location" value={resumeData["personelDetails"].location} onChange={(e)=>updateFeild("personelDetails","location",e.target.value)}/>
                    <input type="text" placeholder="enter your mobile" value={resumeData["personelDetails"].mobile} onChange={(e)=>updateFeild("personelDetails","mobile",e.target.value)}/>
                </div>
            </div>


            <div className="section">=
                <h2 className='title'>Professional Summary</h2>
                <textarea placeholder=' enter your professional summary in two or three lines' onChange={(e)=>updateValue("summary",e.target.value)}></textarea>
            </div>




            <div className="section">
                <div>
                     <h2 className='title'>Experience</h2>
                     <button onClick={()=>addBlock("experience",{company:"",duration:"",description:""})}>Add Experience</button>
                </div>

                {
                    resumeData["experience"].map((exp,index)=>{
                        return(
                            <div key={index}>
                                <input type="text" placeholder='enter company' value={exp.company} onChange={(e)=>updateArrayFeild("experience",index,"company",e.target.value)} />
                                <input type="text" placeholder='position' value={exp.position} onChange={(e)=>updateArrayFeild("experience",index,"position",e.target.value)} />
                                <input type="text" placeholder='duration' value={exp.duration} onChange={(e)=>updateArrayFeild("experience",index,"duration",e.target.value)} />
                                <input type="text" placeholder='decription' value={exp.description} onChange={(e)=>updateArrayFeild("experience",index,"description",e.target.value)} />
                                <div>
                                    {resumeData["experience"].length>1 && <button  onClick={()=>removeBlock("experience",index)}>remove</button>}
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>





            <div className="section">
                <div>
                     <h2 className='title'>Education</h2>
                     <button onClick={()=>addBlock("education",{school:"",duration:"",grade:""})}>Add Education</button>
                </div>

                {
                    resumeData["education"].map((exp,index)=>{
                        return(
                            <div key={index}>
                                <input type="text" placeholder='school' value={exp.school} onChange={(e)=>updateArrayFeild("education",index,"school",e.target.value)}/>
                                <input type="text" placeholder='duration' value={exp.duration} onChange={(e)=>updateArrayFeild("education",index,"duration",e.target.value)}/>
                                <input type="text" placeholder='grade' value={exp.grade} onChange={(e)=>updateArrayFeild("education",index,"grade",e.target.value)}/>
                                <div>
                                    {resumeData["education"].length>1 && <button onClick={()=>removeBlock("education",index)}>remove</button>}
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>



             <div className="section">
                <div>
                     <h2 className='title'>Projects</h2>
                     <button onClick={()=>addBlock("projects",{name:"",technologies:"",description:""})}>Add Project</button>
                </div>

                {
                    resumeData["projects"].map((exp,index)=>{
                        return(
                            <div key={index}>
                                <input type="text" placeholder='name' value={exp.name} onChange={(e)=>updateArrayFeild("projects",index,"name",e.target.value)}/>
                                <input type="text" placeholder='technologies' value={exp.technologies} onChange={(e)=>updateArrayFeild("projects",index,"technologies",e.target.value)}/>
                                <textarea placeholder='enter project description'  value={exp.description} onChange={(e)=>updateArrayFeild("projects",index,"description",e.target.value)}></textarea>
                               <div>
                                    {resumeData["projects"].length>1 && <button onClick={()=>removeBlock("projects",index)}>remove</button>}
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>

              <div className="section">
                <h2 className='title'>Skills</h2>
                <textarea placeholder='enter your skills' onChange={(e)=>updateValue("skills",e.target.value)}></textarea>
            </div>


                <button onClick={()=>saveData()}>Save</button>
        </div>
    )
}
export default ResumeForm