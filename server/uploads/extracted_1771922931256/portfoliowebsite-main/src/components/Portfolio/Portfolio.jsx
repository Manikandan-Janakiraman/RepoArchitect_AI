import React, { useState } from 'react';
import { Search, ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Exporting projects data for use in ProjectDetail.jsx
export const projects = [
    {
        id: 1,
        slug: 'education-dashboard',
        title: 'Education Dashboard',
        category: 'Full Stack',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'A comprehensive dashboard for managing educational resources and student progress.',
        shortIntro: 'A data-driven powerhouse for modern education management.',
        projectDescription: 'The Education Dashboard is a centralized platform designed to streamline the management of educational resources, student performance tracking, and course administration. It provides real-time insights for both educators and students through an intuitive, data-driven interface.',
        story: 'The project was born out of a need for a more integrated approach to digital learning. Traditional LMS systems often feel fragmented. I wanted to create a unified dashboard where everything from attendance to complex performance analytics could be accessed in a single, beautiful view.',
        approach: 'I adopted a user-centric approach, interviewing teachers and students to understand their pain points. The frontend was built with React for a snappy UI, while the backend utilizes Node.js and MongoDB for scalable data management. I focused heavily on data visualization using Charts.js to make progress tracking visually engaging.',
        client: 'EduStream Inc.',
        designer: 'Manikandan J',
        startDate: 'Jan 20, 2023',
        endDate: 'June 15, 2023',
        liveLink: 'https://education-dashboard-demo.com',
        tech: ['MERN Stack', 'Redux', 'Charts.js'],
        views: '2.5k',
        github: 'https://github.com/Manikandan-Janakiraman/educationdashboard'
    },
    {
        id: 2,
        slug: 'movie-app',
        title: 'Movie App',
        category: 'Frontend',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'Movie discovery application with search and details features.',
        shortIntro: 'Your pocket cinema guide for discovering the next big hit.',
        projectDescription: 'This application allows users to discover the latest movies, search for their favorites, and view detailed information including cast, ratings, and trailers. It leverages a third-party API to provide up-to-the-minute cinema data.',
        story: 'As a movie enthusiast, I found that many movie apps were either too cluttered or lacked essential discovery features. I set out to build a minimalist yet powerful app that puts the cinematic experience first, focusing on high-quality posters and clear typography.',
        approach: 'The core challenge was handling large amounts of asynchronous data while maintaining a smooth scrolling experience. I implemented lazy loading for images and used React Query for efficient data fetching and caching. The design follows a dark-themed aesthetic to mimic the cinema environment.',
        client: 'Popcorn Studios',
        designer: 'Manikandan J',
        startDate: 'Aug 10, 2023',
        endDate: 'Sept 25, 2023',
        liveLink: 'https://movie-app-explorer.com',
        tech: ['React', 'TMDB API', 'Tailwind CSS'],
        views: '1.8k',
        github: 'https://github.com/Manikandan-Janakiraman/movieapp'
    },
    {
        id: 3,
        slug: 'weather-app',
        title: 'Weather App',
        category: 'Frontend',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'Real-time weather forecasting application.',
        shortIntro: 'Elegance meets accuracy in every weather update.',
        projectDescription: 'A sleek, real-time weather application that provides accurate forecasts for any location worldwide. It includes temperature trends, humidity levels, and wind speed, all presented in a clean, modern interface.',
        story: 'I wanted to build a weather app that wasn’t just functional but also beautiful. Most weather apps are utilitarian; I aimed for something that felt like a piece of art, where the UI subtly shifts to reflect the current sky conditions.',
        approach: 'I used a modular component structure to make the app easily maintainable. By integrating the OpenWeatherMap API, I was able to fetch granular data. I implemented dynamic glassmorphism effects in the UI that change based on whether it is raining, sunny, or cloudy.',
        client: 'SkyWise Media',
        designer: 'Manikandan J',
        startDate: 'Oct 05, 2023',
        endDate: 'Nov 20, 2023',
        liveLink: 'https://skywise-weather.com',
        tech: ['React', 'WeatherAPI', 'Styled Components'],
        views: '3.2k',
        github: 'https://github.com/Manikandan-Janakiraman/weatherapp'
    },
    {
        id: 4,
        slug: 'todo-app',
        title: 'To-Do App',
        category: 'Web App',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'Efficient task management application with drag-and-drop support.',
        shortIntro: 'Master your day with seamless task organization.',
        projectDescription: 'A high-performance task management tool designed for productivity. It features drag-and-drop organization, task prioritization, and persistent storage to keep your workflow organized and efficient.',
        story: 'Productivity is a passion of mine. I’ve tried many to-do apps, but many lacked the "feel" I was looking for—specifically, smooth animations when completing tasks. I built this app to explore the limits of Framer Motion and persistent browser storage.',
        approach: 'I focused on the psychological aspect of task completion. I added micro-interactions and satisfying ripple effects when a task is checked off. I used the HTML5 Drag and Drop API integrated with React state for seamless reordering of tasks.',
        client: 'FlowState Systems',
        designer: 'Manikandan J',
        startDate: 'May 15, 2023',
        endDate: 'July 30, 2023',
        liveLink: 'https://flowstate-tasks.com',
        tech: ['React', 'Local Storage', 'Framer Motion'],
        views: '4.1k',
        github: 'https://github.com/Manikandan-Janakiraman/todoapp'
    },
    {
        id: 5,
        slug: 'calculator',
        title: 'Calculator',
        category: 'Utility',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1587145820266-a5951ee6f670?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'Standard and scientific calculator web application.',
        shortIntro: 'Precision tools for your daily digital needs.',
        projectDescription: 'A versatile web-based calculator that supports both basic arithmetic and advanced scientific functions. It features a responsive design and an expression history log for tracking complex calculations.',
        story: 'This project started as a challenge to handle complex mathematical logic in a clean, state-driven way. I wanted to replicate the tactile feel of a high-end physical calculator within a browser environment.',
        approach: 'I used a custom parser for mathematical expressions to handle operator precedence correctly. The UI was built using CSS Grid to ensure pixel-perfect alignment of keys across all device sizes. Svelte was chosen for its minimal bundle size and reactive state management.',
        client: 'UtilityWorks',
        designer: 'Manikandan J',
        startDate: 'March 01, 2023',
        endDate: 'April 20, 2023',
        liveLink: 'https://utility-calc.com',
        tech: ['Svelte', 'Math.js', 'CSS Grid'],
        views: '1.2k',
        github: 'https://github.com/Manikandan-Janakiraman/calculator'
    },
    {
        id: 6,
        slug: 'my-story-app',
        title: 'My Story App',
        category: 'Personal',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'A storytelling platform to share personal journeys.',
        shortIntro: 'A sacred space for your words and memories.',
        projectDescription: 'My Story is a personal blogging and journaling platform that allows users to record their life experiences through text and media. It emphasizes a distraction-free writing environment and rich storytelling features.',
        story: 'I believe everyone has a story to tell. I created this platform to provide a quiet, digital space where people could reflect and write without the noise of traditional social media. It’s designed to be a digital companion for personal growth.',
        approach: 'I prioritized typography and whitespace to ensure the writing remains the focus. I implemented a rich text editor and a secure backend with MongoDB to store user stories. The authentication system ensures that private journals remain truly private.',
        client: 'Chronicle Labs',
        designer: 'Manikandan J',
        startDate: 'Dec 15, 2023',
        endDate: 'Feb 28, 2024',
        liveLink: 'https://my-story-journal.com',
        tech: ['Full Stack', 'MongoDB', 'Express', 'React'],
        views: '2.0k',
        github: 'https://github.com/Manikandan-Janakiraman/my-story-app'
    },
    {
        id: 7,
        slug: 'ecommerce-redesign',
        title: 'E-commerce UI Redesign',
        category: 'UI/UX',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'A focused UX improvement for a high-traffic retail platform.',
        shortIntro: 'Elevating the shopping journey through data-backed design.',
        projectDescription: 'The E-commerce UI Redesign focused on simplifying the checkout process and improving product discoverability. By analyzing heatmaps and user recordings, I identified friction points and implemented a more intuitive navigation system.',
        story: 'The client noticed a high cart abandonment rate. My goal was to investigate why users were leaving at the final step. I discovered the mobile experience was particularly cumbersome, which led to a mobile-first redesign approach.',
        approach: 'I conducted user interviews and A/B testing on two different checkout flows. The final design features a one-page checkout and a persistent "Quick Buy" button on product pages. I used Figma for high-fidelity prototyping and interactive testing.',
        client: 'RetailHub Global',
        designer: 'Manikandan J',
        startDate: 'March 10, 2024',
        endDate: 'May 05, 2024',
        liveLink: 'https://figma.com/proto/demo-ecommerce',
        tech: ['Figma', 'UX Research', 'Prototyping'],
        views: '1.5k',
        github: 'https://github.com/Manikandan-Janakiraman/uiux-redesign'
    },
    {
        id: 8,
        slug: 'brand-identity-revive',
        title: 'Revive Brand Identity',
        category: 'Graphic Design',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
        carouselImages: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200'
        ],
        description: 'Complete visual overhaul for a modern wellness brand.',
        shortIntro: 'Creating a visual voice that resonates with health-conscious users.',
        projectDescription: 'Revive is a wellness startup that needed a visual identity that felt both professional and approachable. I designed a comprehensive brand kit including logo, color palette, typography, and social media assets.',
        story: 'The previous branding felt outdated and cluttered. The founder wanted something that conveyed "serenity" and "energy" simultaneously. I drew inspiration from organic shapes and vibrant, natural color schemes.',
        approach: 'Starting with hand-sketched concepts, I iterated through dozens of logo marks before settling on the "Serene Leaf" concept. I then built a technical style guide to ensure consistency across print and digital media using the Adobe Creative Suite.',
        client: 'Revive Wellness',
        designer: 'Manikandan J',
        startDate: 'June 01, 2024',
        endDate: 'July 15, 2024',
        liveLink: 'https://behance.net/gallery/brand-revive',
        tech: ['Illustrator', 'Photoshop', 'Branding'],
        views: '1.2k',
        github: 'https://github.com/Manikandan-Janakiraman/graphic-design-kit'
    }
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = ['All', 'Full Stack', 'Frontend', 'Web App', 'Utility', 'UI/UX', 'Graphic Design'];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Limit rows for "minimal" look initially, or just show grid. 
    // User asked for "minimal rows", let's show all 6 (2 rows of 3) which is minimal enough.
    // If more projects existed, we'd limit. 6 is perfect.

    return (
        <section className="portfolio-section" id="portfolio">
            {/* Background Effects */}
            <div className="portfolio-bg-effects">
                <div className="portfolio-blob blob-1"></div>
                <div className="portfolio-blob blob-2"></div>
                <div className="portfolio-grid-overlay"></div>
            </div>

            <div className="portfolio-header">
                {/* <div className="portfolio-label">
                    <span className="label-icon">✦</span>
                    <span>My Work</span>
                </div> */}

                <h2 className="portfolio-title">Explore My <span className="highlight">Portfolio</span></h2>
                <h3 className="portfolio-subtitle">Real-world projects that combine creativity, performance, and scalability.</h3>

                <div className="portfolio-controls">
                    {/* <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div> */}

                    <div className="filter-tabs">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.slug}`} className="project-card-link">
            <div className="project-card">
                <div className="card-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="card-overlay">
                        <span className="view-btn">View Details <ArrowRight size={16} /></span>
                    </div>
                </div>

                <div className="card-content">
                    <div className="card-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="rating">
                            {'★'.repeat(Math.round(project.rating))}
                            <span className="rating-val">{project.rating}</span>
                        </div>
                    </div>

                    <span className="project-category">{project.category}</span>
                    <p className="project-desc">{project.description}</p>

                    <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    <div className="card-footer">
                        <div className="views">
                            <span>👁 {project.views}</span>
                        </div>
                        <div className="card-links">
                            {/* We can keep external links here too if needed, but the main click goes to details */}
                            <object>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                    <Github size={18} />
                                </a>
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Portfolio;
