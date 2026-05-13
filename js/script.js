const grid = document.getElementById('skills-grid');
const pg = document.getElementById('projects-grid');

let activeSkill = null;

function renderSkills() {
  grid.innerHTML = '';
  
  skills.forEach(s => {
    const d = document.createElement('div');
    // Add an 'active' class if this skill is currently selected
    d.className = `skill-chip ${activeSkill === s.name ? 'active-skill' : ''}`;
    d.innerHTML = `
      <i class="${s.icon}" style="color:${s.color}"></i>
      <span>${s.name}</span>
    `;
    
    d.addEventListener('click', () => {
      activeSkill = activeSkill === s.name ? null : s.name;
      renderSkills();
      renderProjects();
    });
    
    grid.appendChild(d);
  });
}

function renderProjects() {
  pg.innerHTML = '';
  
  let sortedProjects = projects;

  // If a skill is selected, bring matching projects to the top
  if (activeSkill) {
    const matched = projects.filter(p => p.stack.includes(activeSkill));
    const unmatched = projects.filter(p => !p.stack.includes(activeSkill));
    sortedProjects = [...matched, ...unmatched];
  }

  sortedProjects.forEach(p => {
    const isMatched = activeSkill && p.stack.includes(activeSkill);
    
    // Highlight the specific tag inside the project if it matches
    const tags = p.stack.map(t => 
      `<span class="tag ${t === activeSkill ? 'active-tag' : ''}">${t}</span>`
    ).join('');

    // Change div to an anchor tag to make the whole card clickable
    const card = document.createElement('a');
    card.href = p.github;
    card.target = "_blank"; // Opens repo in a new tab
    card.className = `project-card ${isMatched ? 'highlighted-project' : ''}`;
    // Inline styles to prevent the anchor tag from looking like a standard text link
    card.style.textDecoration = 'none'; 
    card.style.color = 'inherit';
    card.style.display = 'block';

    card.innerHTML = `
      <div class="project-title">${p.title}</div>
      <div class="project-stack">${tags}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-date">${p.date}</div>
    `;
    
    pg.appendChild(card);
  });
}

renderSkills();
renderProjects();