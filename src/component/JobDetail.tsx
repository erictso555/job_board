import React from 'react';
import { FreelanceJob } from '../seed/freelanceJobs';
import { User } from '../seed/user';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; 
import '../css/FreelanceJobsList.css';

interface JobDetailProps {
    job: FreelanceJob;
    currentUser?: User;
    onClose?: () => void;
    onAccept?: (jobId: string) => void; 
}

const JobDetail: React.FC<JobDetailProps> = ({ job, onClose, onAccept }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const isRequestedUser = user?.username === job.requested_user;
    const isCaseReviewer = user?.identity === "case_reviewer";
    const isAccepted = !!job.accepted_user;

    return (
        console.log("currentUser:", user),
        <div className="job-detail-container" style={{ position: "relative" }}>
            {onClose && (
                <button
                    className="job-detail-close-btn"
                    onClick={onClose}
                    aria-label="Close">
                    ×
                </button>
            )}
            <h2>{job.freelance_job}</h2>
            <p><strong>Requested by:</strong> {job.requested_by}</p>
            <p><strong>Short Description:</strong> {job.short_description}</p>
            <p><strong>Details:</strong> {job.details_description}</p>
            {isRequestedUser && (
                <p>
                    <strong>Accepted User:</strong> {isAccepted?job.accepted_user : "None"}
                </p>
            )}
            {isCaseReviewer && !isAccepted && (
                <button
                    className="job-detail-accept-btn"
                    onClick={() => onAccept && onAccept(job.JobId)}>
                Accept
                </button>
            )}
            {isCaseReviewer && isAccepted && (
                <p style={{ marginTop: "16px", color: "#007BFF" }}>
                    You have accepted this job.
                </p>
            )}
        </div>
    );
};

export default JobDetail;