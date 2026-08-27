const ms_courses = [
    {name: 'Spatial Scientific Databases', code: 'CSC8713', topics: '', desc: ''},
    {name: 'Statistics', code: 'MATH6751', topics: '', desc: ''},
    {name: 'Ethics for DS', code: 'CSC8902', topics: '', desc: ''},
    {name: 'Data Mining', code: 'CSC6740', topics: '', desc: ''},
]

const bs_courses = [
    //Spring '26
    {name: 'Machine Learning', code: 'CSC4850 – Spring \'26', topics: ['Traditional ML', 'Neural Networks', 'Gramian Angular Fields'], desc: 'Heavy math based class. We learned the theory and formulas behind point estimation, regression, classification, etc. I transformed EEG signals(dataset of microvolt signals) into a Gramian Angular Field, transforming 1D data into an image classifier problem.'},
    {name: 'Intro to Data Science', code: 'CSC4780 – Spring \'26', topics: ['matplotlib','pandas','numpy','seaborn','snowflake', 'scikit-learn'], desc: 'Covered basic data exploration and libraries for analytics/visualization. Highly conceptual for ML algorithms. (Wish I took this before data mining)'},
    {name: 'Cloud Computing', code: 'CSC4311 – Spring \'26', topics: ['OS','Networks','Virutalization','Data Streaming','Kubernetes','Kafka','Spark','Cloud Services'], desc: 'Extremely information heavy class. We covered IaaS, PaaS, SaaS, and deeply analyzed parallel systems like Google File System. Not a lot of depth in lectures but we had enough material & research papers to go in depth on specific topics on our own. Built the cloud recovery project for this class.'},
    {name: 'Computer Science Capstone', code: 'CSC4352 – Spring \'26', topics: ['Agile','Waterfall','Project-based'], desc: 'Project based class where we built the GSU Studybuddy web app.'},
    {name: 'Intro to World Religions', code: 'RELS2001 – Spring \'26', topics: ['Theology','Critical Social Theory'], desc: 'Surface level information on abrahamic religions, hinduism, buddhism, their affects on society, finance, etc. and theories like cultural marketplace.'},
    //Fall '26
    {name: 'Data Mining', code: 'CSC4740 – Fall \'25', topics: ['Traditional ML', 'Data Collection & Preprocessing'], desc: 'Basically a combination of Data Science and Machine Learning classes but more code focused than conceptual/math. Built a TV show recommender with KNN algorithm for this class.'},
    {name: 'Database Systems', code: 'CSC4850 – Fall \'25', topics: ['ER Modeling', 'Relational Algebra','SQL','NoSQL'], desc: 'Heavy database class, not a lot of overlap with other classes. Covered Everything from basic queries to relational algebra. Built an event management platform for this class with postgres.'},
    {name: 'Operating Systems', code: 'CSC4320 – Fall \'25', topics: ['C', 'Linux', 'Memory','Parellel Programming'], desc: 'Principles of operating systems including processes, concurrency, and file systems.'},

    //Summer '25
    {name: 'Design & Analysis: Algorithms', code: 'CSC4520 – Summer \'25', topics: ['Dynamic Programming','Graph Traversals'], desc: ' '},
    {name: 'Software Development', code: 'CSC4320 – Summer \'25', topics: ['Java','MySQL','Diagrams'], desc: ' '},
    //Spring '25
    {name: 'Data Structures', code: 'CSC2720 – Spring \'25', topics: ['Python','Data Structures','Basic Algorithms'], desc: ' '},
    {name: 'Computer Org & Programming', code: 'CSC3210 – Spring \'25', topics: ['RISC-V','x86','Binary','Linux'], desc: ' '},
    {name: 'System-level Programming', code: '3320 – Spring \'25', topics: ['C','Linux','Memory'], desc: ' '},
    {name: 'Critical Thinking', code: 'PHIL1010 – Spring \'25', topics: ['Ethics','Philosophy'], desc: ' '},
    //Fall '24
    {name: 'Prob & Stats for CSC', code: 'MATH3020 – Fall \'24', topics: ['Probability Models & Distributions'], desc: ' '},
    {name: 'Theoretical Foundations of Computer Science', code: 'CSC2510 – Fall \'24', topics: ['Discrete Math'], desc: ' '},
    {name: 'Jazz: Origins Styles Influence', code: 'MUA1500 – Fall \'24', topics: ['Evolution of Jazz Music'], desc: ' '},
    //Summer '24
    {name: 'Linear Algebra I', code: 'MATH2641 – Summer \'24', topics: ['Matrix Algebra','Vector Spaces','Eigenvalues & Eigenvectors'], desc: ' '},
    {name: 'Principles of Physics II', code: 'PHYS 2212K – Summer \'24', topics: ['Electric Fields','Magnetic Fields','Waves','Calculus'], desc: ' '},
    //Spring '24
    {name: 'Calculus II', code: 'MATH 2212 – Spring \'24', topics: ['Integration','Sequences/Series 🤢'], desc: ' '},
    {name: 'Physics I', code: 'PHYS 2211K – Spring \'24', topics: ['Mechanics','Calculus'], desc: ' '},
    {name: 'Principles of Computer Science II', code: 'CSC1302 – Spring \'24', topics: ['Python','OOP','Basic Libraries','Basic Algorithms'], desc: ' '},
];

const codepath_courses = [
    {name: 'Advanced Web Development', code: 'WEB103', desc: 'Covered system design, APIs, CRUD apps with React, Node, Express, and PicoCSS.'},
    {name: 'AI Capstone', code: 'AI301', desc: 'In Progress.'},
    {name: 'Advanced Technical Interview Preperation', code: 'TIP103', desc: 'In Progress.'},
    {name: 'Foundations of AI Engineering', code: 'AI110', desc: 'Covered system design, API architecture, and technical interview preparation.'},
    {name: 'AI Capstone', code: 'AI103', desc: 'Covered system design, API architecture, and technical interview preparation.'},
    {name: 'Introductory Technical Interview Prep', code: 'TIP101', desc: 'Covered system design, API architecture, and technical interview preparation.'},
    {name: 'Intro to iOS Development', code: 'iOS101', desc: 'Covered system design, API architecture, and technical interview preparation.'},
];

function renderCourses() {
    const msGrid = document.getElementById('ms-courses-grid')
    const bsGrid = document.getElementById('bs-courses-grid');
    const cpGrid = document.getElementById('codepath-courses-grid');
    // Render MS University Courses
    ms_courses.forEach(c => {
        const topicsHtml = c.topics && c.topics.length > 0
            ? c.topics.map(t=> `<span class="tag">${t}</span>`).join('')
            : '';
            
        msGrid.innerHTML += `
            <div class="course-card">
                <div class="course-code">${c.code}</div>
                <div class="course-title">${c.name}</div>
                <div class="course-topics">${topicsHtml}</div>
                <div class="course-desc">${c.desc}</div>
            </div>
    `;
    })
    // Render BS University Courses
    bs_courses.forEach(c => {
        // Build the topics tags if they exist
        const topicsHtml = c.topics && c.topics.length > 0 
            ? c.topics.map(t => `<span class="tag">${t}</span>`).join('') 
            : '';

        bsGrid.innerHTML += `
            <div class="course-card">
                <div class="course-code">${c.code}</div>
                <div class="course-title">${c.name}</div>
                <div class="course-topics">${topicsHtml}</div>
                <div class="course-desc">${c.desc}</div>
            </div>
        `;
    });

    // Render CodePath Courses
    codepath_courses.forEach(c => {
        cpGrid.innerHTML += `
            <div class="course-card">
                <div class="course-code">${c.code}</div>
                <div class="course-title">${c.name}</div>
                <div class="course-desc">${c.desc}</div>
            </div>
        `;
    });
}
// Run the render function when the page loads
document.addEventListener('DOMContentLoaded', renderCourses);
