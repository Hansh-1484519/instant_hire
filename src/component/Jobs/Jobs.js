import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './jobs.css'

const Jobs = () => {
    const [jobData, setJobData] = useState([])
    const getJobData = () =>{
        axios.get("http://refertest.pythonanywhere.com/job/openings")
        .then(response =>{
           console.log(response.data.data);
            setJobData(response.data.data)
        })
    }
    useEffect(()=>{
        getJobData();
    }, [])

    return (
        <div>
         {jobData.map(job => {
            return <div className = "job" key = {job.id}>
            {(job.min_experience === 0) &&
                <span>fresher position</span>
            }<br/>
                <span>{` Designation: ${job.designation}`}</span><br/>
                <span>{`Company: ${job.company}`}</span><br/>
                <span>{`Location: ${job.location}`}</span> <br/>
                <span>{` Min_experience: ${job.min_experience}`}</span><br/>
                <span>skills:</span>
               { (job.skills).map(skill => (
                    <span>{` ${skill} `}</span>
         ))}<br/>
             </div>
         })}
            
        </div>
    )
}

export default Jobs