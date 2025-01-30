const events = [
    {
      id: 1,
      title: "Hackathon 2024",
      date: "2024-04-15",
      time: "09:00 AM",
      location: "Main Computer Lab",
      description: "24-hour coding competition to build innovative solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      isCompleted: false
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "2024-05-01",
      time: "02:00 PM",
      location: "Seminar Hall",
      description: "Hands-on workshop on artificial intelligence and machine learning fundamentals.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      isCompleted: false
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "2024-03-10",
      time: "10:00 AM",
      location: "Virtual",
      description: "Intensive bootcamp covering modern web development technologies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      isCompleted: true
    },
    {
      id: 4,
      title: "Cyber Security Summit",
      date: "2024-02-20",
      time: "11:00 AM",
      location: "Auditorium",
      description: "Expert talks on latest cybersecurity trends and threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      isCompleted: true
    }
  ];
  
  // DOM Elements
  const eventsGrid = document.getElementById('eventsGrid');
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  // Current active tab
  let activeTab = 'upcoming';
  
  // Render events based on active tab
  function renderEvents() {
    const filteredEvents = events.filter(event => 
      activeTab === 'upcoming' ? !event.isCompleted : event.isCompleted
    );
  
    eventsGrid.innerHTML = filteredEvents.map(event => `
      <div class="event-card">
        <img src="${event.image}" alt="${event.title}" class="event-image">
        <div class="event-content">
          <h3 class="event-title">${event.title}</h3>
          <p class="event-description">${event.description}</p>
          <div class="event-details">
            <div class="event-detail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div class="event-detail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${event.time}</span>
            </div>
            <div class="event-detail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${event.location}</span>
            </div>
          </div>
          ${!event.isCompleted ? `
            <button class="register-btn">Register Now</button>
          ` : ''}
        </div>
      </div>
    `).join('');
  }
  
  // Tab click handlers
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active tab
      activeTab = button.dataset.tab;
      
      // Update active button styles
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Render events for active tab
      renderEvents();
    });
  });
  
  // Initial render
  renderEvents();
  