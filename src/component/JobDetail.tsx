import React from 'react';
import { FreelanceJob } from '../seed/freelanceJobs';
import { User } from '../seed/user';
import '../css/FreelanceJobsList.css';

interface JobDetailProps {
    job: FreelanceJob;
    currentUser?: User;
}

const JobDetail: React.FC<JobDetailProps> = ({ job, currentUser }) => {
    const isRequestedUser = currentUser?.username === job.requested_user;

    return (
        <div className="job-detail-container">
            <h2>{job.freelance_job}</h2>
            <p><strong>Requested by:</strong> {job.requested_by}</p>
            <p><strong>Short Description:</strong> {job.short_description}</p>
            <p><strong>Details:</strong> {job.details_description}</p>
            {isRequestedUser && (
                <p>
                    <strong>Accepted User:</strong> {job.accepted_user ? job.accepted_user : "None"}
                </p>
            )}
        </div>
    );
};

export default JobDetail;