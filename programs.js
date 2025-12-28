const modal = document.getElementById("programModal");
const modalBody = document.getElementById("modalBody");

const programs = {
  parent: `
  <div class="program-onepager">
    <h2>🌿 Parent Health Circle</h2>
    <p>
      The Parent Health Circle is a safe emotional support program designed to help
      parents navigate fear, confusion and stress while raising a child with a heart condition.
    </p>

    <h4>Why It Matters</h4>
    <p>
      Parents often face emotional overwhelm and mixed medical information.
      A supported parent can make better decisions for their child’s well-being.
    </p>

    <h4>Who It Helps</h4>
    <ul>
      <li>Parents of children with heart conditions</li>
      <li>Caregivers facing anxiety or fear</li>
      <li>Families feeling isolated</li>
    </ul>

    <h4>Key Activities</h4>
    <ul>
      <li>Guided support circles</li>
      <li>Stress-reduction tools</li>
      <li>Peer conversations</li>
      <li>Expert Q&A sessions</li>
    </ul>

    <h4>Impact</h4>
    <ul>
      <li>Greater confidence and clarity</li>
      <li>Reduced emotional stress</li>
      <li>Empowered caregiving</li>
    </ul>

    <a href="#" class="cta">Join a Parent Health Circle</a>
  </div>
  `,

  community: `
  <div class="program-onepager">
    <h2>❤️ Community Heartlines</h2>
    <p>
      Community Heartlines ensures families receive timely guidance for CHD diagnosis
      through awareness, mentorship and trusted information.
    </p>

    <h4>Why It Matters</h4>
    <p>
      Many children face delayed diagnosis due to lack of awareness.
      Community support helps parents seek care early.
    </p>

    <h4>Key Activities</h4>
    <ul>
      <li>School & hospital awareness sessions</li>
      <li>Community volunteer networks</li>
      <li>Parent-to-parent mentorship</li>
    </ul>

    <h4>Impact</h4>
    <ul>
      <li>Earlier CHD identification</li>
      <li>Reduced fear and confusion</li>
      <li>Stronger community awareness</li>
    </ul>

    <a href="#" class="cta">Join the Heartlines Network</a>
  </div>
  `,

  bridge: `
  <div class="program-onepager">
    <h2>🌉 Bridge Program</h2>
    <p>
      The Bridge Program trains Fellows who act as the human link between
      specialists and families—ensuring clarity, care and compassion.
    </p>

    <h4>Why It Matters</h4>
    <p>
      India faces a severe shortage of pediatric cardiologists.
      Families often leave appointments confused or anxious.
    </p>

    <h4>Key Activities</h4>
    <ul>
      <li>Explain diagnoses in simple language</li>
      <li>Pre- and post-appointment support</li>
      <li>Clarify treatment plans</li>
    </ul>

    <h4>Impact</h4>
    <ul>
      <li>Clearer doctor-family communication</li>
      <li>Reduced fear-based decisions</li>
      <li>Better care continuity</li>
    </ul>

    <a href="#" class="cta">Support the Bridge Program</a>
  </div>
  `
};

// OPEN MODAL
document.addEventListener("click", (e) => {
  const card = e.target.closest(".open-program");
  if (!card) return;

  const key = card.dataset.program;
  modalBody.innerHTML = programs[key];
  modal.classList.add("active");
});

// CLOSE MODAL
document.querySelector(".modal-close").onclick = () =>
  modal.classList.remove("active");

document.querySelector(".modal-overlay").onclick = () =>
  modal.classList.remove("active");
