const experience = [
    {
        date: 'Aug. 2026 – Dec. 2026',
        position: 'Graduate Teaching Assistant — Computer Science Capstone I',
        description: `Served as a Graduate Teaching Assistant and stakeholder for Computer Science Capstone I, working closely with approximately 10 student teams of 4–5 students throughout the semester. Met regularly with teams to review project plans, discuss technical and design decisions, and provide feedback as their projects progressed. Helped students identify potential issues early, refine their project direction, and think through practical engineering tradeoffs. At the conclusion of the semester, I will also review teams’ final Software Design Documents and provide feedback on their project posters during Demo Day.`,
        technologies: []
    },
    {
        date: 'Jun. 2026 – Aug. 2026',
        position: 'Software Engineering Intern — Rylimsoft',
        description: `Worked as a Software Engineering Intern on MemberCheckins, a community management platform, alongside a senior software engineer. Contributed across the application stack, working on both new functionality and improvements to existing systems.

A major part of my work involved safely retiring unused features without removing their underlying code. Instead, I restricted access to those features and removed them from the user interface, allowing the code to remain available for potential future use.

I also investigated and fixed concurrency issues, including a race condition involving discount codes where two users could simultaneously attempt to apply the same discount during checkout. In addition, I designed and implemented a custom-field feature with full CRUD functionality, including server-side validation, database schema changes, routing, REST APIs, and the corresponding user interface.`,
        technologies: ['C#', 'ASP.NET', '.NET 8', 'SQLite', 'Bootstrap', 'jQuery', 'JavaScript']
    },
    {
        date: 'Aug. 2025 – Jan. 2026',
        position: 'Web Developer — Elevate Adolescence',
        description: `Joined Elevate Adolescence initially as a facilitator and quickly identified several usability and workflow problems within the organization’s learning management system (LMS). I documented these issues and worked with the organization to get them addressed.

I then designed and developed a centralized platform to simplify the workflows facilitators used every day. Previously, core tasks such as attendance tracking, student feedback through digital sticky notes, facilitator reviews, and participant registration were spread across multiple platforms and tools, including Canva, Google Docs, and MemberCheckins.

I built a single web-based entry point that brought these workflows together, giving facilitators one place to access the tools and information they needed. The project focused on reducing friction in day-to-day operations while creating a more cohesive experience for facilitators.`,
        technologies: []
    },
    {
        date: 'Aug. 2025 – Dec. 2025',
        position: 'Software Engineering Intern — Dark Alpha Capital',
        description: `Joined Dark Alpha Capital as a Python Software Engineering Intern to expand the company’s automated web-scraping infrastructure. The company maintained a standardized scraper that covered approximately 70% of its target websites for collecting business listings, while the remaining sites contained a wide range of edge cases that required custom solutions.

I developed specialized scraping solutions for the remaining websites, using Selenium, BeautifulSoup, and regular expressions to handle differences in page structure, rendering behavior, and data formats. This brought the scraping system from approximately 70% to full coverage of the targeted sites.

After completing the scraping work ahead of schedule, I transitioned to frontend development. I worked with TypeScript, React, Next.js, and Drizzle ORM to build the frontend for an email templating platform. The application provided users with customizable email templates through an interface inspired by Gmail, while adding functionality specifically designed around creating, managing, and using reusable templates. I also used Drizzle ORM to support database seeding and development of the application's data layer.`,
        technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Regex', 'TypeScript', 'React', 'Next.js', 'Drizzle ORM']
    },
    {
        date: '2020 – 2021',
        position: 'Pizza boy — Marco\'s Pizza',
        description: `Humble beginnings...`,
        technologies: ['Phone', 'Dough', 'Register', 'Cheese']
    }
];

function renderExperience(){
    const grid = document.getElementById('experience-grid');
    experience.forEach(exp => {
        const topicsHtml = exp.technologies && exp.technologies.length > 0
            ? exp.technologies.map(t => `<span class="tag">${t}</span>`).join('')
            : '';
        grid.innerHTML += `
            <div class="course-card">
                <div class="course-code">${exp.date}</div>
                <div class="course-title">${exp.position}</div>
                <div class="course-topics">${topicsHtml}</div>
                <div class="course-desc">${exp.description}</div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', renderExperience);