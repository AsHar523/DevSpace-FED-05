import './style.css'

const workspaces = [
  {
    id: 1,
    name: 'Minimal Workspace',
    category: 'Minimal',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    description: 'A clean workspace with a simple, organized setup.',
    equipment: ['Desk', 'Monitor', 'Keyboard'],
    budget: '$500'
  },
  {
    id: 2,
    name: 'Creative Workspace',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    description: 'A comfortable setup for creative projects.',
    equipment: ['Desk', 'Laptop', 'Desk Lamp'],
    budget: '$800'
  },
  {
    id: 3,
    name: 'Professional Workspace',
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'A professional environment for productive work.',
    equipment: ['Desk', 'Monitor', 'Office Chair'],
    budget: '$1000'
  }
]

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a class="logo" href="#">DevSpace</a>
    <nav>
      <a href="#home">Home</a>
      <a href="#workspaces">Workspaces</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <p class="eyebrow">YOUR SPACE, YOUR STYLE</p>
      <h1>Find Your Perfect <span>Workspace.</span></h1>
      <p>Explore workspace setups, discover equipment, and get inspiration for your next setup.</p>
      <a class="button" href="#workspaces">Explore Workspaces</a>
    </section>

    <section class="gallery" id="workspaces">
      <div class="section-heading">
        <p class="eyebrow">EXPLORE THE COLLECTION</p>
        <h2>Workspace Gallery</h2>
        <p>Discover setups designed for different needs and budgets.</p>
      </div>

      <div class="workspace-grid">
        ${workspaces.map(workspace => `
          <article class="workspace-card">
            <img src="${workspace.image}" alt="${workspace.name}" loading="lazy">
            <div class="card-content">
              <span class="category">${workspace.category}</span>
              <h3>${workspace.name}</h3>
              <p>${workspace.description}</p>
              <p><strong>Equipment:</strong> ${workspace.equipment.join(', ')}</p>
              <p class="budget">Estimated budget: ${workspace.budget}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="about" id="about">
      <h2>About DevSpace</h2>
      <p>A gallery of workspace inspiration, equipment ideas, and setup details.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 DevSpace. All rights reserved.</p>
  </footer>
`