import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const PlexusBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const particles = [];
        const particleCount = 40;
        const connectionDistance = 150;

        // Dynamic Colors based on theme
        const isDark = theme === 'dark';
        // Increased opacities for better visibility
        const particleColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(124, 58, 237, 0.8)';
        const lineColorRgb = isDark ? '255, 255, 255' : '124, 58, 237';
        const glowColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(124, 58, 237, 0.3)';

        let width, height;

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = isDark ? 1.5 : 2; // Slightly larger particles in light mode
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Glow effect
                ctx.shadowBlur = isDark ? 8 : 4;
                ctx.shadowColor = glowColor;
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        // Adjusted alpha for lines
                        const alpha = (1 - distance / connectionDistance) * (isDark ? 0.4 : 0.6);
                        ctx.strokeStyle = `rgba(${lineColorRgb}, ${alpha})`;
                        ctx.lineWidth = isDark ? 0.8 : 1.2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.shadowBlur = 0;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="plexus-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                opacity: 0.8 // Increased overall canvas opacity for better visibility
            }}
        />
    );
};

export default PlexusBackground;
