import React, { useState } from 'react';
import { freelanceJobs, FreelanceJob, setJobsAccepted } from '../seed/freelanceJobs';
import '../css/FreelanceJobsList.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; 
import JobDetail from '../component/JobDetail';


interface FreelanceJobsListProps {
    showOnlyCreated?: boolean;
}

const FreelanceJobsList: React.FC<FreelanceJobsListProps> = ({ showOnlyCreated }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const [selectedJob, setSelectedJob] = useState<FreelanceJob | null>(null);
    const [jobs, setJobs] = useState<FreelanceJob[]>(freelanceJobs);

    async function test() {
        fetch('http://localhost:3000/api/freelanceJobs')
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json() as unknown as FreelanceJob[];
            })
            .then(data => {
                setJobs(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        }
        

    const handleAccept = (jobId: string) => {
        if (!user) return;
        
        const jobIndex = freelanceJobs.findIndex(job => job.JobId === jobId);
        if (jobIndex !== -1) {
            console.log(setJobsAccepted(jobId, user.username));
            setSelectedJob({ ...freelanceJobs[jobIndex] });
        }
    };

    let jobsToShow = freelanceJobs;
    if (showOnlyCreated && user) {
        jobsToShow = jobsToShow.filter(
            job => job.requested_user === user.username
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