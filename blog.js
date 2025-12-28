// -------- BLOG DATA --------
const blogPosts = [
  {
    id: 1,
    category: "guide",
    meta: "Guide for Parents · 6 min read",
    title: "First Week After Surgery: A Gentle Checklist",
    excerpt: "Sleep, breathing, wound care — simple things to notice without panic.",
    image: "Assets/blog1.jpg",
    body: `
      <p>The first week after surgery feels like holding your breath for days.</p>
      <p>In this guide we walk through simple check-ins: breathing rhythm, wound care,
      sleep cycles and emotional cues that truly matter.</p>
    `
  },
  {
    id: 2,
    category: "mental",
    meta: "Mental Health · 4 min read",
    title: "How to Talk About Fear Without Making It Bigger",
    excerpt: "A 3-step method to help kids express fear safely.",
    image: "Assets/blog2.jpg",
    body: `
      <p>Fear shrinks when it has words.</p>
      <p>We use a simple structure: name the fear, normalize it, and give it a plan.</p>
    `
  },
  {
    id: 3,
    category: "volunteer",
    meta: "Volunteer Story · 5 min read",
    title: "“I came to help. The kids helped me back.”",
    excerpt: "Shruti shares her day volunteering at the camp.",
    image: "Assets/blog3.jpg",
    body: `
      <p>Shruti expected to manage art activities — instead she learned what courage looks like
      in tiny humans.</p>
    `
  },
  {
    id: 4,
    category: "care",
    meta: "Daily Care · 3 min read",
    title: "Tiny Routines That Make Hospital Days Easier",
    excerpt: "Small rituals that help kids regain a sense of control.",
    image: "Assets/blog4.jpg",
    body: `
      <p>We cannot remove every needle, but rituals add emotional safety — favourite socks,
      music, stickers or stories.</p>
    `
  },
  {
    id: 5,
    category: "community",
    meta: "Community · 4 min read",
    title: "Why Parent Support Circles Work Better Than Advice",
    excerpt: "Being understood matters more than being instructed.",
    image: "Assets/blog5.jpg",
    body: `
      <p>Parent circles create a soft landing between appointments.</p>
    `
  },
  {
    id: 6,
    category: "expert",
    meta: "Expert Q&A · 7 min read",
    title: "Top 10 Questions Pediatric Cardiologists Hear",
    excerpt: "Doctors share insights every parent should know.",
    image: "Assets/blog6.jpg",
    body: `
      <p>We sat with pediatric cardiologists to collect the most asked questions — and their best answers.</p>
    `
  }
];


// -------- RENDER POSTS --------
const blogGrid = document.getElementById("blogGrid");

function renderPosts(filter = "all") {
  blogGrid.innerHTML = "";

  const filtered = blogPosts.filter(post =>
    filter === "all" ? true : post.category === filter
  );

  filtered.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <div class="blog-card-img" style="background-image: url('${post.image}')"></div>
      <div class="blog-card-body">
        <div class="blog-meta">${post.meta}</div>
        <div class="blog-title">${post.title}</div>
        <div class="blog-excerpt">${post.excerpt}</div>
      </div>
    `;

    card.addEventListener("click", () => openModal(post.id));

    blogGrid.appendChild(card);
  });
}


// -------- FILTER BUTTONS --------
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderPosts(btn.dataset.category);
  });
});


// -------- MODAL --------
const modal = document.getElementById("blogModal");
const modalMeta = document.getElementById("modalMeta");
const modalTitle = document.getElementById("modalTitle");
const modalBody  = document.getElementById("modalBody");

function openModal(id) {
  const post = blogPosts.find(p => p.id === id);

  modalMeta.innerHTML = post.meta;
  modalTitle.innerHTML = post.title;
  modalBody.innerHTML = post.body;

  modal.classList.add("open");
}

document.querySelector(".modal-backdrop").onclick = closeModal;
document.querySelector(".modal-close").onclick = closeModal;

function closeModal() {
  modal.classList.remove("open");
}


// -------- INITIAL LOAD --------
renderPosts();


// MOBILE NAV TOGGLE (same as main page)
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Close nav when any link is clicked
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

