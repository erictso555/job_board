import React from 'react';
import freelanceJobs from '../seed/freelanceJobs'
import '../css/FreelanceJobsList.css'; 

const FreelanceJobsList: React.FC = () => {
    return (
        <div className='job-list-container'>
            <h1 className='job-list-container'>Job List</h1>
            <ul className="job-list">
                {freelanceJobs.map((job, index) => (
                    <li key={index}>
                        <h2>{job.freelance_job}</h2>
                        <p><strong>Requested by:</strong> {job.requested_by}</p>
                        <p>{job.short_description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FreelanceJobsList;   