import React from 'react';
import { freelanceJobs } from '../seed/freelanceJobs'
import '../css/FreelanceJobsList.css'; 
import { User } from '../seed/user';

interface FreelanceJobsListProps {
    currentUser?: User;
    showOnlyCreated?: boolean;
}

const FreelanceJobsList: React.FC<FreelanceJobsListProps> = ({ currentUser, showOnlyCreated }) => {
    let jobsToShow = freelanceJobs;

    if (showOnlyCreated && currentUser) {
        jobsToShow = freelanceJobs.filter(
            job => job.requested_user === currentUser.username
        );
    }

    return (
        <div className='job-list-container'>
            <h1 className='job-list-container'>
                {showOnlyCreated ? "My Created Jobs" : "Job List"}
            </h1>
            <ul className="job-list">
                {jobsToShow.map((job, index) => (
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