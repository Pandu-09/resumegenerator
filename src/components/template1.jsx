import './template1.css'
function Template1({data})
{
    return(
        <div className="resume-container">
            <div className="header">
                <h1>{data["personelDetails"].name}</h1>
                <div className='contact'>
                    <span>{data["personelDetails"].email}</span>
                    <span>{data["personelDetails"].linkedIn}</span>
                    <span>{data["personelDetails"].github}</span>
                    <span>{data["personelDetails"].location}</span>
                    <span>{data["personelDetails"].mobile}</span>
                    <span>{data["personelDetails"].website}</span>
                </div>
            </div>
        </div>
    )
}
export default Template1