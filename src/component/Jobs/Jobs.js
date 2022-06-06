import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './jobs.css'

const Jobs = () => {
    const [jobData, setJobData] = useState([])
    const getJobData = () =>{
        axios.get(process.env.React_App_Job_Api)
        .then(response =>{
           console.log(response.data.data);
            setJobData(response.data.data)
        })
    }
    useEffect(()=>{
        getJobData();
    }, [])

    return (
        <div className='job-container'>
         {jobData.map(job => {
            return <div className = "job" key = {job.id}>
                <span>{` Designation : ${job.designation}`}</span><br/>
                <span>{`Company : ${job.company}`}</span><br/>
                <span>{`Job Location : ${job.location}`}</span> <br/>
            {(job.min_experience === 0) ?
                <span>fresher position</span> :
                <span>{` Experience Required for the Job : ${job.min_experience}`}</span>
            }<br/>
                <span>skills Required :</span>
               { (job.skills).map(skill => (
                    <span>{` ${skill} `}</span>
         ))}<br/>
             </div>
         })}
            
        </div>
    )
}

export default Jobs