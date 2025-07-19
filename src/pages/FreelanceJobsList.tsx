import React, { useState } from 'react';
import { freelanceJobs, FreelanceJob } from '../seed/freelanceJobs';
import '../css/FreelanceJobsList.css'; 
import { User } from '../seed/user';
import JobDetail from '../component/JobDetail';

interface FreelanceJobsListProps {
    currentUser?: User;
    showOnlyCreated?: boolean;
}

const FreelanceJobsList: React.FC<FreelanceJobsListProps> = ({ currentUser, showOnlyCreated }) => {
    const [selectedJob, setSelectedJob] = useState<FreelanceJob | null>(null);
    const [jobs, setJobs] = useState(freelanceJobs);

    const handleAccept = (jobId: string) => {
        setJobs(jobs =>
            jobs.map(job =>
                job.JobId === jobId
                    ? { ...job, accepted_user: currentUser?.username }
                    : job
            )
        );
    };

    let jobsToShow = freelanceJobs;
    if (showOnlyCreated && currentUser) {
        jobsToShow = freelanceJobs.filter(
            job => job.requested_user === currentUser.username
        );
    }

    return (
    <div>
        <div className="job-list-main-container">
            <div className="job-list-container">
                <h1>
                    {showOnlyCreated ? "My Created Jobs" : "Job List"}
                </h1>
                <ul className="job-list">
                    {jobsToShow.map((job, index) => (
                        <li key={index} onClick={() => setSelectedJob(job)} style={{ cursor: "pointer" }}>
                            <h2>{job.freelance_job}</h2>
                            <p><strong>Requested by:</strong> {job.requested_by}</p>
                            <p>{job.short_description}</p>
                        </li>
                    ))}
                </ul>
            </div>
                {selectedJob && (
                    <div className="job-detail-side-container">
                        <div className="job-detail-side">
                            <JobDetail
                                job={selectedJob}
                                currentUser={currentUser}
                                onClose={() => setSelectedJob(null)}
                                onAccept={handleAccept}
                            />
                        </div>
                    </div>
                )}  
        </div>
    </div>
    );
};

export default FreelanceJobsList;