import './style.css'

const workspaces = [
  {
    id: 1,
    name: 'Minimal Workspace',
    category: 'Minimal',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    description: 'A clean workspace with a simple, organized setup designed for productivity and focus.',
    equipment: ['Desk', 'Monitor', 'Keyboard', 'Office Chair'],
    budget: '$500',
    features: ['Minimal design', 'Organized desk', 'Natural lighting']
  },
  {
    id: 2,
    name: 'Creative Workspace',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
    description: 'A comfortable and inspiring workspace for designers and creative professionals.',
    equipment: ['Desk', 'Laptop', 'Desk Lamp', 'Drawing Tablet'],
    budget: '$800',
    features: ['Creative environment', 'Comfortable setup', 'Modern design']
  },
  {
    id: 3,
    name: 'Professional Workspace',
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    description: 'A professional environment designed for focused work and productivity.',
    equipment: ['Desk', 'Monitor', 'Office Chair', 'Desk Lamp'],
    budget: '$1000',
    features: ['Professional design', 'Ergonomic furniture', 'Spacious desk']
  },
  {
    id: 4,
    name: 'Gaming Workspace',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=80',
    description: 'A gaming-focused workspace with modern equipment and an immersive environment.',
    equipment: ['Gaming PC', 'Gaming Monitor', 'Mechanical Keyboard', 'Gaming Chair'],
    budget: '$1500',
    features: ['Gaming equipment', 'RGB lighting', 'High performance']
  },
  {
    id: 5,
    name: 'Student Workspace',
    category: 'Student',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    description: 'An affordable and organized workspace suitable for students and learning.',
    equipment: ['Study Desk', 'Laptop', 'Notebook', 'Desk Lamp'],
    budget: '$400',
    features: ['Affordable setup', 'Study friendly', 'Simple organization']
  },
  {
    id: 6,
    name: 'Dual Monitor Setup',
    category: 'Developer',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80',
    description: 'A developer workspace designed for multitasking and efficient programming.',
    equipment: ['Dual Monitors', 'Desk', 'Mechanical Keyboard', 'Office Chair'],
    budget: '$1200',
    features: ['Dual screen setup', 'Developer friendly', 'Multitasking']
  }
]

const app = document.querySelector('#app')

let activeCategory = 'All'
let searchQuery = ''
let activeBudget = 'all'

function renderCards() {
  const filteredWorkspaces = workspaces.filter(workspace => {
    const searchText = `
      ${workspace.name}
      ${workspace.category}
      ${workspace.description}
      ${workspace.equipment.join(' ')}
      ${workspace.features.join(' ')}
    `.toLowerCase()

    const matchesSearch = searchText.includes(searchQuery.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' || workspace.category === activeCategory

    const budget = Number(workspace.budget.replace('$', ''))

    const matchesBudget =
      activeBudget === 'all' || budget < Number(activeBudget)

    return matchesSearch && matchesCategory && matchesBudget
  })

  const grid = document.querySelector('.workspace-grid')
  const count = document.querySelector('.results-count')

  if (!grid || !count) return

  count.textContent = `Showing ${filteredWorkspaces.length} of ${workspaces.length} workspaces`

  if (filteredWorkspaces.length === 0) {
    grid.innerHTML = `
      <p class="no-results">
        No workspaces found. Try changing your search or filters.
      </p>
    `
    return
  }

  grid.innerHTML = filteredWorkspaces.map(workspace => `
    <article class="workspace-card">
      <a href="#workspace/${workspace.id}" class="card-link">
        <img src="${workspace.image}" alt="${workspace.name}" loading="lazy">

        <div class="card-content">
          <span class="category">${workspace.category}</span>
          <h3>${workspace.name}</h3>
          <p>${workspace.description}</p>
          <p><strong>Equipment:</strong> ${workspace.equipment.join(', ')}</p>
          <p class="budget">Estimated budget: ${workspace.budget}</p>
          <span class="details-link">View Setup Details →</span>
        </div>
      </a>
    </article>
  `).join('')
}

function renderGallery() {
  const categories = ['All', ...new Set(workspaces.map(item => item.category))]

  app.innerHTML = `
    <header class="navbar">
      <a class="logo" href="#home">DevSpace</a>
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

        <div class="filter-section">

          <input
            type="text"
            id="search-input"
            placeholder="Search workspaces, equipment..."
            value="${searchQuery}"
          >

          <div class="category-filters">
            ${categories.map(category => `
              <button
                class="filter-btn ${activeCategory === category ? 'active' : ''}"
                data-category="${category}"
              >
                ${category}
              </button>
            `).join('')}
          </div>

          <div class="budget-filter">
            <label for="budget-select">Budget:</label>

            <select id="budget-select">
              <option value="all">All Budgets</option>
              <option value="600" ${activeBudget === '600' ? 'selected' : ''}>Under $600</option>
              <option value="1000" ${activeBudget === '1000' ? 'selected' : ''}>Under $1000</option>
              <option value="1500" ${activeBudget === '1500' ? 'selected' : ''}>Under $1500</option>
            </select>

            <button id="clear-filters" class="clear-filters">
              Clear Filters
            </button>
          </div>

          <p class="results-count"></p>

        </div>

        <div class="workspace-grid"></div>

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

  const searchInput = document.querySelector('#search-input')
  const budgetSelect = document.querySelector('#budget-select')
  const clearButton = document.querySelector('#clear-filters')

  searchInput.addEventListener('input', event => {
    searchQuery = event.target.value
    renderCards()
  })

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category

      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn === button)
      })

      renderCards()
    })
  })

  budgetSelect.addEventListener('change', event => {
    activeBudget = event.target.value
    renderCards()
  })

  clearButton.addEventListener('click', () => {
    activeCategory = 'All'
    searchQuery = ''
    activeBudget = 'all'

    searchInput.value = ''
    budgetSelect.value = 'all'

    document.querySelectorAll('.filter-btn').forEach(button => {
      button.classList.toggle(
        'active',
        button.dataset.category === 'All'
      )
    })

    renderCards()
  })

  renderCards()
}

function renderDetails(id) {
  const workspace = workspaces.find(item => item.id === Number(id))

  if (!workspace) {
    app.innerHTML = `
      <section class="detail-page">
        <h2>Workspace Not Found</h2>
        <a href="#workspaces" class="button">Back to Gallery</a>
      </section>
    `
    return
  }

  app.innerHTML = `
    <header class="navbar">
      <a class="logo" href="#home">DevSpace</a>
      <nav>
        <a href="#home">Home</a>
        <a href="#workspaces">Workspaces</a>
        <a href="#about">About</a>
      </nav>
    </header>

    <main class="detail-page">
      <a href="#workspaces" class="back-link">← Back to Gallery</a>

      <div class="detail-container">
        <img
          class="detail-image"
          src="${workspace.image}"
          alt="${workspace.name}"
        >

        <div class="detail-content">
          <span class="category">${workspace.category}</span>
          <h1>${workspace.name}</h1>

          <p>${workspace.description}</p>

          <h2>Equipment & Components</h2>

          <ul>
            ${workspace.equipment.map(item => `<li>${item}</li>`).join('')}
          </ul>

          <h2>Workspace Features</h2>

          <ul>
            ${workspace.features.map(item => `<li>${item}</li>`).join('')}
          </ul>

          <div class="detail-budget">
            Estimated Budget: ${workspace.budget}
          </div>
        </div>
      </div>
    </main>

    <footer>
      <p>© 2026 DevSpace. All rights reserved.</p>
    </footer>
  `
}

function handleNavigation() {
  const hash = window.location.hash

  if (hash.startsWith('#workspace/')) {
    const id = hash.split('/')[1]
    renderDetails(id)
  } else {
    renderGallery()
  }
}

window.addEventListener('hashchange', handleNavigation)

handleNavigation()