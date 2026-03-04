import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectDetail.css';

// Using the same data source
import { projects } from './Portfolio';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="project-detail-container" style={{ textAlign: 'center' }}>
                <h2>Project not found</h2>
                <Link to="/" className="back-btn"><ArrowLeft size={16} /> Back to Home</Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.carouselImages.length) % project.carouselImages.length);
    };

    return (
        <main className="project-detail-container">
            <Link to="/" className="global-back-btn">
                <ArrowLeft size={18} /> Back
            </Link>

            {/* Header Content - Mochinx Style */}
            <header className="detail-header-section">
                <div className="header-left">
                    <h1 className="project-main-title">{project.title}</h1>
                    <p className="project-short-intro">{project.shortIntro || project.description}</p>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-preview-btn">
                        Live Preview <ExternalLink size={18} />
                    </a>
                </div>

                <div className="header-right-metadata">
                    <div className="meta-column">
                        <div className="meta-block">
                            <span className="meta-label">Category</span>
                            <span className="meta-value">{project.category}</span>
                        </div>
                        <div className="meta-block">
                            <span className="meta-label">Start Date</span>
                            <span className="meta-value">{project.startDate}</span>
                        </div>
                    </div>
                    <div className="meta-column">
                        <div className="meta-block">
                            <span className="meta-label">Client</span>
                            <span className="meta-value">{project.client}</span>
                        </div>
                        <div className="meta-block">
                            <span className="meta-label">Designer</span>
                            <span className="meta-value">{project.designer || "Manikandan J"}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Carousel Section */}
            <section className="detail-carousel-section">
                <div className="carousel-main-container">
                    <button className="carousel-nav-btn prev" onClick={prevImage}>
                        <ChevronLeft size={32} />
                    </button>

                    <div className="carousel-viewport">
                        <div className="carousel-track" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            {(project.carouselImages || [project.image]).map((img, index) => (
                                <div key={index} className="carousel-slide">
                                    <img src={img} alt={`${project.title} slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-nav-btn next" onClick={nextImage}>
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {(project.carouselImages || [project.image]).map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Description Section */}
            <section className="detail-description-section">
                <h2 className="description-title">Project Description</h2>
                <div className="description-body">
                    <p>{project.projectDescription || project.description}</p>
                    {project.story && <p>{project.story}</p>}
                    {project.approach && <p>{project.approach}</p>}
                </div>
            </section>

            {/* Next Projects Navigation */}
            <section className="next-projects-section">
                <h2 className="next-projects-title">Explore More Projects</h2>
                <div className="next-projects-grid">
                    {projects
                        .filter(p => p.id !== project.id)
                        .slice(0, 2)
                        .map(nextProj => (
                            <Link to={`/project/${nextProj.slug}`} key={nextProj.id} className="next-project-card">
                                <div className="next-proj-image">
                                    <img src={nextProj.image} alt={nextProj.title} />
                                    <div className="next-proj-overlay">
                                        <span>View Case Study</span>
                                    </div>
                                </div>
                                <div className="next-proj-info">
                                    <span className="next-proj-category">{nextProj.category}</span>
                                    <h3 className="next-proj-name">{nextProj.title}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="back-to-all">
                    <Link to="/" className="back-home-link">View All Projects</Link>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetail;
