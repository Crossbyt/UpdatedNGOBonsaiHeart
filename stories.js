  const STORIES = {
  story1: {
    title: "After the camp, my son finally ran without checking his chest",
    meta: "Family story · 4 min read",
    image: "assets/stories/rohan.jpg",
    body: `
      <p>Rohan was five when his parents noticed he avoided running.</p>

      <p>Every step was cautious. Every game was paused by fear.</p>

      <p>At the HeartStrong Kids camp, something changed.</p>

      <p>Surrounded by other children like him, Rohan ran — slowly at first,
      then faster — until laughter replaced fear.</p>

      <p>Today, evenings are no longer quiet. They are loud with joy.</p>
    `
  },

  story2: {
    title: "Why play is medicine for recovering hearts",
    meta: "Doctor’s note · 3 min read",
    image: "assets/stories/doctor-play.jpg",
    body: `
      <p>Healing isn’t only physical.</p>

      <p>Play restores confidence, emotional balance,
      and trust in one’s own body.</p>

      <p>As cardiologists, we see the difference laughter makes.</p>
    `
  },

  story3: {
    title: "I came to help. The kids helped me back.",
    meta: "Volunteer story · 5 min read",
    image: "assets/stories/volunteer.jpg",
    body: `
      <p>I signed up to give time.</p>

      <p>I didn’t expect to receive so much in return.</p>

      <p>Strength looks different when you see it through a child’s eyes.</p>
    `
  }
};

const modal = document.getElementById("storyModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalBody = document.getElementById("modalBody");
  const modalImage = document.getElementById("modalImage");

  document.querySelectorAll(".open-post").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const key = link.dataset.story;
      const story = STORIES[key];

      modalTitle.textContent = story.title;
      modalMeta.textContent = story.meta;
      modalBody.innerHTML = story.body;
      modalImage.src = story.image;
      modalImage.alt = story.title;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  modal.addEventListener("click", e => {
    if (
      e.target.classList.contains("story-modal-overlay") ||
      e.target.classList.contains("story-modal-close")
    ) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
