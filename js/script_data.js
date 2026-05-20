const grid = document.getElementById('skills-grid');
const pg = document.getElementById('projects-grid');

let activeSkill = null; 

function renderSkills() {
  grid.innerHTML = ''; 
  
  skills.forEach(s => {
    const d = document.createElement('div');
    // Ensure this class matches your CSS for the "highlighted" look
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
  
  let sortedProjects = [...projects]; // Create a copy to sort

  if (activeSkill) {
    const matched = projects.filter(p => p.stack.includes(activeSkill));
    const unmatched = projects.filter(p => !p.stack.includes(activeSkill));
    sortedProjects = [...matched, ...unmatched];
  }

  sortedProjects.forEach(p => {
    const isMatched = activeSkill && p.stack.includes(activeSkill);
    
    const tags = p.stack.map(t => 
      `<span class="tag ${t === activeSkill ? 'active-tag' : ''}">${t}</span>`
    ).join('');

    const card = document.createElement('a');
    card.href = p.github || '#'; // Fallback to # if link is missing
    card.target = "_blank";
    card.className = `project-card ${isMatched ? 'highlighted-project' : ''}`;
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