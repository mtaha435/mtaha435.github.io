const grid = document.getElementById('skills-grid');
const pg = document.getElementById('projects-grid');
const overlay = document.getElementById('modal');

let currentSkillIndex = null;
const notes = JSON.parse(localStorage.getItem('skill-notes') || '{}');

function renderSkills() {
  skills.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'skill-chip';
    d.innerHTML = `
      <i class="${s.icon}" style="color:${s.color}"></i>
      <span>${s.name}</span>
    `;
    d.addEventListener('click', () => openModal(i));
    grid.appendChild(d);
  });
}

function renderProjects() {
  projects.forEach(p => {
    const tags = p.stack.map(t => `<span class="tag">${t}</span>`).join('');
    pg.innerHTML += `
      <div class="project-card">
        <div class="project-title">${p.title}</div>
        <div class="project-stack">${tags}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-date">${p.date}</div>
      </div>
    `;
  });
}

function openModal(i) {
  currentSkillIndex = i;
  const s = skills[i];
  document.getElementById('modal-icon').innerHTML =
    `<i class="${s.icon}" style="color:${s.color}"></i>`;
  document.getElementById('modal-title').textContent = s.name;
  document.getElementById('modal-cat').textContent = s.cat;
  document.getElementById('modal-notes').value = notes[s.name] || '';
  overlay.classList.add('open');
}

function closeModal() {
  overlay.classList.remove('open');
}

function saveNotes() {
  const s = skills[currentSkillIndex];
  notes[s.name] = document.getElementById('modal-notes').value;
  localStorage.setItem('skill-notes', JSON.stringify(notes));
  closeModal();
}

document.getElementById('close-btn').addEventListener('click', closeModal);
document.getElementById('save-btn').addEventListener('click', saveNotes);

renderSkills();
renderProjects();