import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './jobs.css'

const Jobs = () => {
    const [jobData, setJobData] = useState([])
    const getJobData = () =>{
        axios.get("http://refertest.pythonanywhere.com/job/openings")
        .then(response =>{
           console.log(response.data.data);
            setJobData(response.data.data);
        })
    }
    useEffect(()=>{
        getJobData()
    }, [])

    return (
        <div>
            <span>{jobData[0].designation}</span>
            <p>{jobData[0].company}</p>
            <p>{jobData[0].location}</p>
            <p>{jobData[0].min_experience}</p>
            <p>skill : "Html", "Css", "JavaScript"</p>
        </div>
    )
}

export default Jobs