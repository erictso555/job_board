export interface FreelanceJob {
    freelance_job: string;
    requested_by: string;
    short_description: string;
    details_description: string;
    requested_user: string; 
    accepted?: boolean; 
    accepted_user?: string;
}

export const freelanceJobs: FreelanceJob[] = [
    {
        freelance_job: "Logo Designer",
        requested_by: "Tech Innovations Inc.",
        short_description: "Design a sleek logo for our new tech brand.",
        details_description: "We are looking for a creative logo designer to create a modern and sleek logo that represents our brand values of innovation and technology. The logo should be versatile for both digital and print use.",
        requested_user: "case_creator1",
    },
    {
        freelance_job: "Web Developer",
        requested_by: "Tech Innovations Inc.",
        short_description: "Develop a user-friendly website for our online shop.",
        details_description: "We need a skilled web developer to create a responsive and user-friendly e-commerce website. The site should include features like product listings, a shopping cart, and secure payment processing.",
        requested_user: "case_creator1"
    },
    {
        freelance_job: "Content Writer",
        requested_by: "Travel Diaries Co.",
        short_description: "Create engaging travel articles for our blog.",
        details_description: "We are looking for a talented content writer to produce high-quality travel articles that inspire and inform our readers. The articles should be well-researched, engaging, and optimized for SEO.",
        requested_user: "case_creator2"
    },
    {
        freelance_job: "Social Media Manager",
        requested_by: "Travel Diaries Co.",
        short_description: "Manage our social media presence and campaigns.",
        details_description: "We need an experienced social media manager to handle our social media accounts, create engaging content, and run targeted ad campaigns to increase our online presence and engagement.",
        requested_user: "case_creator2"
    },
    {
        freelance_job: "SEO Specialist",
        requested_by: "Tech Innovations Inc.",
        short_description: "Optimize content to improve search engine rankings.",
        details_description: "We are looking for an SEO specialist to analyze our website and content, identify areas for improvement, and implement strategies to increase organic traffic and search engine visibility.",
        requested_user: "case_creator1"
    },
    {
        freelance_job: "Video Editor",
        requested_by: "Travel Diaries Co.",
        short_description: "Edit promotional videos for our upcoming project.",
        details_description: "We need a skilled video editor to edit and enhance our promotional videos. The editor should have experience with travel-related content and be able to create engaging and visually appealing videos.",
        requested_user: "case_creator2"
    },
    {
        freelance_job: "Virtual Assistant",
        requested_by: "Tech Innovations Inc",
        short_description: "Assist with administrative tasks and scheduling.",
        details_description: "We are looking for a reliable virtual assistant to help with various administrative tasks, including scheduling meetings, managing emails, and organizing documents. The assistant should be detail-oriented and able to work independently.",
        requested_user: "case_creator1"
    },
    {
        freelance_job: "Photographer",
        requested_by: "Travel Diaries Co.",
        short_description: "Capture moments at our upcoming corporate event.",
        details_description: "We need a professional photographer to cover our corporate event. The photographer should have experience in event photography and be able to capture high-quality images that reflect the atmosphere and key moments of the event.",
        requested_user: "case_creator2"
    },
    {
        freelance_job: "Illustrator",
        requested_by: "Travel Diaries Co.",
        short_description: "Create colorful illustrations for a children’s book.",
        details_description: "We are looking for a talented illustrator to create vibrant and engaging illustrations for a children’s book. The illustrations should be imaginative and complement the story, appealing to young readers.",
        requested_user: "case_creator2"
    },
    {
        freelance_job: "Copywriter",
        requested_by: "Tech Innovations Inc.",
        short_description: "Write compelling copy for our new product launch.",
        details_description: "We need a creative copywriter to develop persuasive and engaging copy for our new product launch. The copy should highlight the product's features and benefits, appealing to our target audience.",
        requested_user: "case_creator1"
    }
];