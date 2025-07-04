interface FreelanceJob {
    freelance_job: string;
    requested_by: string;
    short_description: string;
}

const freelanceJobs: FreelanceJob[] = [
    {
        freelance_job: "Logo Designer",
        requested_by: "Tech Innovations Inc.",
        short_description: "Design a sleek logo for our new tech brand."
    },
    {
        freelance_job: "Web Developer",
        requested_by: "E-commerce Solutions Ltd.",
        short_description: "Develop a user-friendly website for our online shop."
    },
    {
        freelance_job: "Content Writer",
        requested_by: "Travel Diaries Co.",
        short_description: "Create engaging travel articles for our blog."
    },
    {
        freelance_job: "Social Media Manager",
        requested_by: "Health Plus Inc.",
        short_description: "Manage our social media presence and campaigns."
    },
    {
        freelance_job: "SEO Specialist",
        requested_by: "Marketing Masters LLC",
        short_description: "Optimize content to improve search engine rankings."
    },
    {
        freelance_job: "Video Editor",
        requested_by: "Creative Media Group",
        short_description: "Edit promotional videos for our upcoming project."
    },
    {
        freelance_job: "Virtual Assistant",
        requested_by: "Consulting Experts Inc.",
        short_description: "Assist with administrative tasks and scheduling."
    },
    {
        freelance_job: "Photographer",
        requested_by: "Event Planners Co.",
        short_description: "Capture moments at our upcoming corporate event."
    },
    {
        freelance_job: "Illustrator",
        requested_by: "Kids Books Publishing",
        short_description: "Create colorful illustrations for a children’s book."
    },
    {
        freelance_job: "Copywriter",
        requested_by: "Product Launch Corp.",
        short_description: "Write compelling copy for our new product launch."
    }
];

export default freelanceJobs;