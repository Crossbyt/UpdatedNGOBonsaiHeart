 const STORIES = {
  story1: {
    title: "Aarav’s Second Chance at Life",
    meta: "Congenital Heart Defect – VSD · 4 min read",
    image: "Assets/Aarav.jpg",
    body: `
      <p>Aarav was just six months old when his parents noticed he struggled to breathe even while feeding. He wasn’t gaining weight, cried constantly, and was frequently hospitalized for chest infections. Several visits to local doctors brought only temporary relief, and the real cause—Congenital Heart Disease—went undiagnosed for months.</p>

      <p>When Aarav’s family finally reached Bonsai Hearts, they were emotionally and financially exhausted. Our team helped them connect with the right pediatric cardiologist, supported them through the diagnostic process, and guided them toward affordable surgical care. We also assisted the family with medical paperwork and fundraising resources.</p>

      <p>Today, Aarav is an active toddler who loves to play and explore. His parents often tell us that Bonsai Hearts didn’t just save their child’s heart—it gave their family hope when they had almost lost it.</p>

    `
  },

  story2: {
    title: "Little Ananya Learns to Play Again",
    meta: "Complex CHD – ASD + PDA · 3 min read",
    image: "Assets/SmileConnect.jpg",
    body: `
      <p>Ananya was often labeled as a “weak child.” She tired easily, avoided playtime at school, and was constantly asked to sit out during physical activities. Teachers and relatives advised her parents to restrict her movement, fearing something was “wrong,” but no clear diagnosis was given.</p>

      <p>Through an awareness camp conducted by Bonsai Hearts, Ananya’s condition was finally identified as a treatable congenital heart defect. We helped her parents understand that CHD does not mean a child must stop living normally. With proper medical guidance and treatment planning, Ananya underwent corrective care.</p>

      <p>Today, she runs, laughs, and plays freely with her classmates. Her confidence has grown, and so has her smile. For her parents, the biggest relief was seeing their child reclaim her childhood.</p>
    `
  },

  story4: {
    title: "From Isolation to Inclusion",
    meta: "Teen with CHD facing social challenges · 5 min read",
    image: "assets/stories/volunteer.jpg",
    body: `
      <p>Rohan had lived with CHD since birth, but what hurt him most wasn’t the hospital visits—it was feeling different. Restricted from sports, teased by peers, and constantly reminded to “be careful,” he grew withdrawn and anxious.</p>

      <p>Through Bonsai Hearts’ family support network, Rohan and his parents found a community that understood them. We connected them with counselors, peer families, and doctors who encouraged safe physical activity instead of fear-based restrictions.</p>

      <p>Today, Rohan participates in light sports, mentors younger CHD children, and speaks openly about his journey. His story reminds us that healing isn’t just physical—it’s emotional too.</p>
    `
  },

  story5: {
    title: "Meera’s Quiet Strength",
    meta: "CHD – Atrial Septal Defect · 4 min read",
    image: "assets/stories/volunteer.jpg",
    body: `
      <p>Meera was a cheerful 7-year-old, but she tired easily and often sat out during school games. Teachers thought she was lazy, and relatives advised her parents to “not push her too much.” Despite repeated doctor visits, her condition went undiagnosed for years.</p>

      <p>When Meera’s family connected with Bonsai Hearts, they finally received clarity. We helped them access proper cardiac evaluation and understand that Meera’s condition was treatable. More importantly, we reassured them that Meera was not weak—she just needed the right care.</p>

      <p>After treatment, Meera slowly returned to school activities. Today, she proudly participates in light sports and no longer feels different from her peers. Her parents say the biggest change was not just in her health, but in how Meera sees herself.</p>
    `
  },

  story3: {
    title: "A Mother’s Fight for Her Newborn",
    meta: "Critical CHD detected at birth · 5 min read",
    image: "Assets/newBorn.jpg",
    body: `
      <p>When baby Riya was born, doctors noticed her oxygen levels were dangerously low. Her parents were told she would need urgent intervention—but they had no idea where to go or how to afford it. The fear of losing their newborn was overwhelming.</p>

      <p>Bonsai Hearts stepped in immediately. Our team helped the family navigate emergency referrals, arranged consultations with specialists, and provided emotional support during the most difficult days. We stood by them through every step—from diagnosis to post-treatment care.</p>

      <p>Riya survived, and today she is growing steadily under regular medical follow-ups. Her mother says that without Bonsai Hearts, she would have felt completely alone in the fight for her child’s life.</p>
    `
  },

  story6: {
    title: "A Father’s Long Road for Answers",
    meta: "CHD – Ventricular Septal Defect · 4 min read",
    // image: "assets/stories/volunteer.jpg",
    body: `
      <p>Rahul’s father travelled from clinic to clinic for nearly two years, searching for answers to his son’s constant breathlessness and frequent illnesses. Each visit ended with medicines, but no diagnosis—and growing fear.</p>

      <p>Through a referral network supported by Bonsai Hearts, Rahul was finally diagnosed with CHD. Our team helped the family navigate hospital systems, understand treatment options, and emotionally prepare for surgery.</p>

      <pToday, Rahul is recovering well and attends school regularly. His father says that having someone guide them through the system made all the difference during their most uncertain time.</p>
    `
  },

};


// ---------------------------------------
// PRELOADER
// ---------------------------------------
// ---------- PRELOADER ----------
(function () {
  const preloader = document.getElementById("preloader");
  const percentEl = document.getElementById("loaderPercent");

  if (!preloader || !percentEl) return;

  // lock scroll while loading
  document.body.classList.add("loading-lock");

  let current = 1;
  const totalDuration = 2200; // ms to go 1 -> 100
  const stepInterval = 20;    // ms
  const steps = totalDuration / stepInterval;
  const increment = (100 - current) / steps;

  function startCounter() {
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);

        // small delay so user sees 100%
        setTimeout(() => {
          preloader.classList.add("hidden");
          document.body.classList.remove("loading-lock");
          document.body.classList.add("page-loaded");
        }, 300);
      }

      percentEl.textContent = Math.round(current) + "%";
    }, stepInterval);
  }

  // Start the counter when everything is loaded
  window.addEventListener("load", startCounter);
})();



// ---------------------------------------
// STICKY HEADER
// ---------------------------------------
const header = document.getElementById("site-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});


// ---------------------------------------
// MOBILE NAV
// ---------------------------------------
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    mainNav.classList.toggle("open");
});

// Close menu when clicking any nav link
mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        mainNav.classList.remove("open");
    });
});


// ---------------------------------------
// SMOOTH SCROLL (FIXED)
// ---------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetID = this.getAttribute("href").slice(1);
        const targetEl = document.getElementById(targetID);

        if (targetEl) {
            e.preventDefault();
            window.scrollTo({
                top: targetEl.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});


// ---------------------------------------
// MOUSE LIGHT FOLLOW
// ---------------------------------------
const pageLight = document.querySelector(".page-light");
window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
    document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
});


// ---------------------------------------
// GSAP ANIMATIONS
// ---------------------------------------
gsap.registerPlugin(ScrollTrigger);

// Hero text
gsap.from(".anim-hero > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
});

// Hero image fade
gsap.from(".anim-hero-image", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.25,
});

// Parallax hero image
gsap.to(".hero-img-placeholder", {
    y: -40,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

// About image parallax
gsap.to(".about-image-frame", {
    y: -30,
    ease: "none",
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

// Floating badge bounce
gsap.to(".hero-floating-badge", {
    y: -6,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Fade-up reusable animation
gsap.utils.toArray(".anim-fade-up").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
    });
});


// ---------------------------------------
// STAGGER GRIDS (opacity only)
// ---------------------------------------
function staggerGrid(selector) {
    const grid = document.querySelector(selector);
    if (!grid) return;

    gsap.from([...grid.children], {
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            once: true,
        },
    });
}

staggerGrid(".impact-grid");
staggerGrid(".programs-grid");
staggerGrid(".team-grid");
staggerGrid(".stories-grid");
staggerGrid(".blog-grid");
staggerGrid(".extra-stats-grid");


// ---------------------------------------
// STACK-SECTIONS PIN (page stacking effect)
// ---------------------------------------
// gsap.utils.toArray(".stack-section").forEach((section) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "+=100%",
//         pin: true,
//         pinSpacing: true,
//         scrub: true,
//     });
// });


// ---------------------------------------
// COUNTERS
// ---------------------------------------
document.querySelectorAll(".counter").forEach((counter) => {
    const target = parseInt(counter.dataset.target, 10);

    gsap.fromTo(
        counter,
        { innerText: 0 },
        {
            innerText: target,
            duration: 1.6,
            ease: "power1.out",
            scrollTrigger: {
                trigger: counter.parentElement,
                start: "top 85%",
                once: true,
            },
            snap: { innerText: 1 },
            onUpdate: function () {
                counter.textContent = Math.round(counter.innerText).toLocaleString();
            },
        }
    );
});


// ---------------------------------------
// INFINITE MARQUEE FIX (NO GAPS)
// ---------------------------------------
document.querySelectorAll(".marquee-track").forEach((track) => {
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
});

gsap.utils.toArray(".marquee-row").forEach((row) => {
    const direction = row.classList.contains("marquee-row--left") ? -1 : 1;

    gsap.to(row.children, {
        xPercent: direction * -100,
        repeat: -1,
        duration: 20,
        ease: "none",
    });
});


// ---------------------------------------
// MODAL (BLOG + STORIES)
// ---------------------------------------
// const modal = document.getElementById("postModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalMeta = document.getElementById("modalMeta");
// const modalBody = document.getElementById("modalBody");
// const modalClose = document.querySelector(".modal-close");
// const modalBackdrop = document.querySelector(".modal-backdrop");

// function openModal(title, meta, body) {
//     modalTitle.textContent = title;
//     modalMeta.textContent = meta;
//     modalBody.textContent = body;

//     modal.classList.add("open");
//     document.body.style.overflow = "hidden";
// }

// function closeModal() {
//     modal.classList.remove("open");
//     document.body.style.overflow = "";
// }

// document.querySelectorAll(".open-post").forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         openModal(link.dataset.title, link.dataset.meta, link.dataset.body);
//     });
// });

// modalClose.addEventListener("click", closeModal);
// modalBackdrop.addEventListener("click", closeModal);

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
// });

// ===== FIX NAV SCROLL OFFSET =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const target = document.querySelector(targetID);

    const offset = document.getElementById("site-header").offsetHeight;

    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  });
});

// ================================
//  INFINITE SCROLLING GALLERY
// ================================
gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a seamless infinite horizontal scrolling marquee.
 * @param {string} rowSelector - CSS selector for row (e.g., ".row-1")
 * @param {number} direction - 1 for right, -1 for left
 */
function createScrollingRow(rowSelector, direction) {
  const row = document.querySelector(rowSelector);
  if (!row) return;

  const track = row.querySelector(".gallery-track");
  const items = Array.from(track.children);

  // -------------------------
  // 1. AUTO-CLONE IMAGES 
  // -------------------------
  // Ensure gallery width > 2 × screen width (so we never see blank space)
  while (track.scrollWidth < window.innerWidth * 2) {
    items.forEach((item) => track.appendChild(item.cloneNode(true)));
  }

  // Calculate half width (used for wrapping)
  let distance = track.scrollWidth / 2;

  // -------------------------
  // 2. CREATE LOOP ANIMATION
  // -------------------------
  let marquee = gsap.to(track, {
    x: direction === 1 ? -distance : distance,   // move opposite to direction
    ease: "none",
    duration: 30,
    repeat: -1,
    modifiers: {
      x: (x) => {
        // wrap animation so it loops seamlessly
        return gsap.utils.wrap(
          direction === 1 ? -distance : 0,
          direction === 1 ? 0 : distance,
          parseFloat(x)
        ) + "px";
      }
    }
  });

  // -------------------------
  // 3. SCROLL-CONTROLLED SPEED
  // -------------------------
  ScrollTrigger.create({
    trigger: row,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      // Scroll up = reverse the marquee
      // Scroll down = normal speed
      marquee.timeScale(self.direction === -1 ? -1 : 1);
    }
  });
}

// ================================
//  INITIALIZE ALL 3 ROWS
// ================================
createScrollingRow(".row-1", 1);   // Row 1 → moves RIGHT
createScrollingRow(".row-2", 1);  // Row 2 → moves LEFT
createScrollingRow(".row-3", 1);   // Row 3 → moves RIGHT




// ===== BLOG CATEGORY FILTERING =====

// All blog data
const blogData = {
  guide: [
    {
      title: "Caring for a Child with CHD at Home – Daily Life, Diet, and Activity",
      meta: "Guide · For parents",
      excerpt: "Practical guidance on daily care, nutrition, activity, and emotional safety for children living with CHD.",
      content: `A CHD diagnosis often leads to fear-driven overprotection, but <b>normalcy is equally vital for a child’s growth.</b><br><br><b>Daily home care</b><br>Attend regular follow-ups, monitor signs like breathlessness or fatigue, treat infections early, and follow vaccination schedules consistently. Stability builds both physical health and parental confidence.<br><br><b>Nutrition for children with CHD</b><br>Some children may struggle with feeding or weight gain. Nutrient-dense meals, small frequent feedings, high-protein diets when advised, and professional dietary guidance can support healthy growth.<br><br><b>Physical activity: finding the right balance</b><br>Many children with CHD benefit from physical activity. Ask doctors which activities are safe, avoid blanket bans, and watch for signs of exhaustion. Movement supports lung capacity, muscle strength, and emotional well-being.<br><br><b>Emotional safety at home</b><br>Children mirror adult emotions. Calm reassurance helps them feel secure rather than fragile. A child should grow up knowing they are capable, not weak.`
    },
    {
      title: "My Child Has Congenital Heart Disease – A Parent’s First Guide",
      meta: "Guide · For parents",
      excerpt: "A gentle first guide for parents navigating the emotional and medical reality of a Congenital Heart Disease diagnosis.",
      content: `<b>When a doctor tells you that your child has Congenital Heart Disease (CHD)</b>, your world can feel like it has stopped.<br><br>Parents often experience shock, fear, confusion, and overwhelming questions like <i>“Will my child survive?”</i> or <i>“Did I do something wrong?”</i><br><br><b>It is important to understand this clearly:</b><br>CHD is not caused by anything you did or did not do. It is a condition a child is born with, and modern medicine has made remarkable progress in treating it.<br><br><b>Understanding CHD in simple terms</b><br>CHD refers to structural problems in the heart that develop before birth. These may affect heart walls, valves, or blood vessels.<br><br>Some defects are mild and may resolve on their own, while others require medical intervention or surgery. Each child’s condition is unique.<br><br><b>What parents commonly feel after diagnosis</b><br>Fear of hospitals or surgery, guilt despite knowing it isn’t your fault, anxiety about finances, and confusion due to medical terms are all normal.<br><br><b>A reassuring truth</b><br>Thousands of children with CHD go to school, play sports, build careers, and live fulfilling lives. CHD is a journey, but it does not define your child’s future.`
    },
    {
       title: "Understanding Your Child’s CHD Diagnosis – Types, Tests, and Treatment",
       meta: "Guide · For parents",
       excerpt: "Learn about common CHD types, diagnostic tests, and treatment pathways so you can make informed decisions for your child.",
       content: `Once the initial emotional storm settles, parents naturally seek clarity. <b>Understanding your child’s CHD empowers you to ask the right questions.</b><br><br><b>Common types of Congenital Heart Disease</b><br><b>ASD (Atrial Septal Defect):</b> A hole between the upper chambers of the heart, often mild and sometimes closes on its own.<br><br><b>VSD (Ventricular Septal Defect):</b> A hole between the lower chambers that may require monitoring or surgery depending on size.<br><br><b>PDA (Patent Ductus Arteriosus):</b> A blood vessel that should close after birth but remains open, affecting circulation.<br><br><b>Tetralogy of Fallot (TOF):</b> A complex condition involving multiple defects and reduced oxygen flow.<br><br><b>Tests parents will encounter</b><br>Echocardiogram (ECHO), ECG, Chest X-ray, and Pulse oximetry are commonly used to assess heart structure, rhythm, and oxygen levels.<br><br>Always ask what the test shows, what it means for daily life, and what the next steps are.<br><br><b>Treatment pathways</b><br>Treatment may include observation, medication, catheter-based procedures, or open-heart surgery. Thanks to advances in pediatric cardiology, most CHD surgeries today have excellent success rates.`
    }
  ],

  mental: [
    {
      title: "Understanding the Mental Health Impact of Congenital Heart Disease on Children",
  meta: "Mental health · Care",
  excerpt: "How growing up with CHD affects a child’s emotional world, identity, and sense of safety—and why these responses are normal.",
  content: `<b>When we talk about Congenital Heart Disease (CHD)</b>, the focus is often on surgeries, medications, and follow-ups—but the <i>psychological impact</i> is equally important.<br><br>For a child, CHD is not just a medical diagnosis. It shapes how they see their body, their abilities, and their place in the world.<br><br><b>How CHD affects a child’s emotional world</b><br>Children with CHD often experience medical trauma early in life through frequent hospital visits, tests, injections, and surgeries.<br><br>As they grow, this may appear as:<ul><li>Anxiety around doctors, hospitals, or medical smells</li><li>Fear of physical exertion</li><li>Heightened sensitivity to bodily sensations like heart rate or breathlessness</li><li>Sleep disturbances before medical appointments</li></ul><br>These are <b>normal responses to repeated stress</b>, not signs of weakness.<br><br><b>The silent emotional burden of “being different”</b><br>Repeated messages like <i>“Don’t run too much”</i> or <i>“You’re not like other kids”</i> can shape a child’s internal belief system, leading to low self-esteem, social avoidance, or fear of failure—often expressed through withdrawal or irritability rather than words.`
    },
    {
      title: "Building Confidence, Identity, and Social Belonging in Children with CHD",
  meta: "Mental health · Care",
  excerpt: "Why confidence and social inclusion matter as much as medical care—and how overprotection can quietly affect a child’s self-belief.",
  content: `<b>One of the most overlooked challenges of CHD</b> is its impact on a child’s identity and social development.<br><br>Children build self-worth through everyday experiences such as playing with peers, competing and cooperating, and feeling capable and included.<br><br>When CHD restricts these experiences—sometimes unnecessarily—it can deeply affect confidence.<br><br><b>The cost of overprotection</b><br>Overprotection often comes from love and fear, but it can unintentionally teach a child:<ul><li>“I am not capable”</li><li>“My body cannot be trusted”</li><li>“Others are stronger than me”</li></ul><br>This can result in social withdrawal, fear of trying new activities, dependence on adults, and poor self-advocacy.<br><br><b>CHD and social identity at school</b><br>School plays a major role in shaping identity. For children with CHD, exclusion from sports, repeated absences, or being labeled as “sick” can lead to isolation unless adults guide inclusion intentionally.<br><br><b>Practical ways to build confidence</b><br>Shift the narrative toward adaptability, encourage strength-based identities beyond physical activity, and promote peer inclusion through modified participation and gentle education. <i>Belonging is a powerful mental health protector.</i>`
    },
    {
      title: "Mental Health Care for Parents and Caregivers of Children with CHD",
  meta: "Mental health · Care",
  excerpt: "Supporting a child with CHD begins with caring for the emotional well-being of parents and caregivers themselves.",
  content: `<b>Behind every child with CHD</b> is a caregiver carrying immense emotional weight.<br><br>Parents often live in a state of constant vigilance—where fear never fully switches off.<br><br><b>The emotional reality for parents</b><br>Common experiences include:<ul><li>Chronic anxiety about emergencies</li><li>Guilt, even when irrational</li><li>Grief for the “expected” childhood</li><li>Emotional exhaustion from long-term caregiving</li></ul><br>These feelings often remain unspoken due to pressure to “stay strong.”<br><br><b>Why parental mental health matters</b><br>Children are deeply attuned to their caregivers’ emotional states. When parents are anxious, overprotective, or emotionally exhausted, children may feel unsafe, incapable, or burdensome.<br><br><b>Practical mental health strategies</b><br>Normalize seeking support through counseling or peer groups, share responsibilities, allow yourself to feel without suppression, and build a CHD-aware community.<br><br><b>Healing as a family system</b><br>When parents model emotional honesty, calm problem-solving, and balanced risk-taking, children learn resilience naturally. <i>Caring for your mental health is not selfish—it is protective parenting.</i>`
}
  ],

  care: [
    {
      title: "Daily Care for a Child with Congenital Heart Disease – A Parent’s Complete Guide",
  meta: "Daily care",
  excerpt: "A practical guide to understanding what daily care really means for a child with CHD—at home, beyond hospitals.",
  content: `<b>Caring for a child with Congenital Heart Disease (CHD)</b> is not limited to hospital visits or surgeries.<br><br>The most important care happens <i>every single day at home</i>—through routines, observation, reassurance, and informed decisions.<br><br><b>What “daily care” really means</b><br>Daily care for CHD includes:<ul><li>Monitoring physical symptoms</li><li>Supporting emotional well-being</li><li>Encouraging safe activity</li><li>Ensuring proper nutrition and rest</li><li>Preventing infections</li><li>Maintaining regular follow-ups</li></ul><br>It is not about constant fear—it is about <b>consistent awareness</b>.<br><br><b>Building a stable daily routine</b><br>Children with CHD thrive on predictability, including fixed sleep and wake times, regular meals, scheduled activity and rest, and time for play and relaxation.<br><br>Routine helps reduce anxiety—for both child and parent.<br><br><b>Creating a “normal” home environment</b><br>Avoid turning the home into a medical space. Children should feel safe, not constantly monitored. Daily care works best when <i>love, structure, and calm coexist</i>.`
    },
    {
      title: "Feeding, Nutrition, and Growth – Daily Care Essentials for Children with CHD",
  meta: "Daily care",
  excerpt: "Why feeding and growth can be challenging in CHD—and how daily nutrition support helps children thrive.",
  content: `<b>Nutrition is one of the most important pillars of daily CHD care.</b><br><br>Children with heart conditions often burn more energy and may struggle with feeding or weight gain.<br><br><b>Why nutrition is challenging in CHD</b><br>Common reasons include increased energy expenditure, fatigue during feeding, breathlessness while eating, and poor appetite.<br><br>These challenges are <i>medical—not behavioral</i>.<br><br><b>Feeding infants with CHD</b><br>For babies:<ul><li>Small, frequent feeds are often better</li><li>Watch for sweating or breathlessness during feeds</li><li>Burp frequently</li><li>Consult doctors if feeding regularly exceeds 30 minutes</li></ul><br>Breastfeeding is encouraged where possible, with support.<br><br><b>Nutrition for toddlers and older children</b><br>Focus on:<ul><li>High-protein foods</li><li>Iron-rich foods</li><li>Healthy fats</li><li>Fresh fruits and vegetables</li></ul><br>Avoid excessive junk food—not only because of CHD, but to support overall heart health.<br><br><b>Tracking growth without comparison</b><br>CHD children may grow differently. Growth charts should be interpreted by doctors—not relatives or comparisons. <i>Healthy growth is individual, not competitive.</i>`
    },
    {
      title: "Physical Activity and Rest – Finding the Right Daily Balance for a Child with CHD",
  meta: "Daily care",
  excerpt: "How safe movement and proper rest together form a vital part of everyday CHD care.",
  content: `<b>One of the biggest misconceptions</b> is that children with CHD should avoid physical activity.<br><br>In reality, many children with CHD need movement to stay healthy.<br><br><b>Why activity matters</b><br>Safe physical activity:<ul><li>Improves stamina</li><li>Strengthens muscles</li><li>Supports lung function</li><li>Boosts confidence and mood</li></ul><br>Total restriction can be harmful.<br><br><b>How to decide what’s safe</b><br>Always ask the cardiologist:<ul><li>What activities are allowed?</li><li>What intensity is safe?</li><li>When should activity stop?</li></ul><br>Walking, light play, yoga, and free play are often encouraged.<br><br><b>Signs a child needs rest</b><br>Watch for breathlessness beyond usual, dizziness, chest discomfort, or excessive fatigue. Teach children to listen to their bodies.<br><br><b>Rest is also part of care</b><br>Adequate sleep and rest prevent exhaustion. Rest is not weakness—it is <i>recovery</i>.`
    }
  ],

  
  expert: [
    {
  title: "Expert Q&A: Caring for a Child with Congenital Heart Disease (CHD)",
  meta: "Expert Q&A",
  excerpt: "Pediatric cardiac experts answer the most common questions parents have about caring for a child with Congenital Heart Disease.",
  content: `<b>Q1. What exactly is Congenital Heart Disease (CHD)?</b><br><b>Expert Answer:</b> Congenital Heart Disease refers to structural problems in a child’s heart that are present from birth. These may involve holes in the heart, valve problems, or blood flow issues. CHD varies in severity, and <i>many children live healthy, active lives</i> with timely diagnosis and proper care.<br><br><b>Q2. Is CHD caused by something parents did during pregnancy?</b><br><b>Expert Answer:</b> No. In most cases, CHD is <b>not caused by anything parents did or didn’t do</b>. It usually develops very early in pregnancy due to complex genetic or developmental factors. Parents should not blame themselves—the focus should be on care and support moving forward.<br><br><b>Q3. Can children with CHD live a normal life?</b><br><b>Expert Answer:</b> Yes. Many children with CHD grow up to live full, independent lives. With modern medical care, regular follow-ups, and balanced daily routines, children can attend school, play, and pursue their interests. <i>“Normal” may look slightly different, but it can still be joyful and fulfilling.</i><br><br><b>Q4. Should children with CHD avoid physical activity and sports?</b><br><b>Expert Answer:</b> Not always. In fact, <b>many children with CHD benefit from safe, guided physical activity</b>. The type and intensity depend on the child’s specific condition. Blanket restrictions are often unnecessary and can affect confidence. Always follow personalized medical advice.<br><br><b>Q5. What daily symptoms should parents watch out for?</b><br><b>Expert Answer:</b> Parents should monitor for unusual breathlessness, extreme fatigue, bluish lips or nails, poor feeding, swelling, or sudden changes in activity tolerance. Not every symptom is an emergency, but <i>persistent changes should be discussed with a doctor</i>.<br><br><b>Q6. How important is mental health care for children with CHD?</b><br><b>Expert Answer:</b> Mental health care is essential. Children with CHD may experience anxiety, low self-esteem, or fear of being “different.” Emotional support, honest conversations, and avoiding overprotection help children build confidence and resilience alongside physical health.<br><br><b>Q7. How can parents prevent infections in children with CHD?</b><br><b>Expert Answer:</b> Good hygiene, timely vaccinations, clean environments, and early medical attention during illness are key. Infections can place extra strain on the heart, so <b>prevention and early care play a vital role</b> in daily CHD management.<br><br><b>Q8. How often should a child with CHD see a doctor?</b><br><b>Expert Answer:</b> Follow-up frequency depends on the type and severity of CHD. Some children need regular monitoring, while others require periodic check-ups. Parents should always follow their cardiologist’s guidance and never skip scheduled visits.<br><br><b>Q9. What role do parents play beyond medical treatment?</b><br><b>Expert Answer:</b> Parents are central to a child’s well-being. Beyond managing appointments and medications, they provide emotional security, encouragement, and advocacy. A <i>calm, informed, and supportive home environment</i> greatly improves outcomes.<br><br><b>Q10. When should parents seek a second opinion?</b><br><b>Expert Answer:</b> If a diagnosis is unclear, symptoms persist despite treatment, or parents feel uncertain, seeking a second opinion is completely appropriate. CHD care benefits from specialized expertise, and <b>informed parents are empowered parents</b>.`
}
  ],
};


// Render blog cards
function renderBlogs(category) {
  const grid = document.getElementById("blogGrid");
  grid.innerHTML = "";

  blogData[category].forEach(item => {
    const card = document.createElement("article");
    card.className = "blog-card";

    card.classList.add("open-blog");
card.dataset.title = item.title;
card.dataset.meta = item.meta;
card.dataset.body = `
  <p>${item.content.replace(/\n/g, "<br>")}</p>
  <p>This article will guide you with practical insights and gentle care tips.</p>
`;

card.innerHTML = `
  
  <div class="blog-body">
    <div class="blog-meta">${item.meta}</div>
    <h3 class="blog-title">${item.title}</h3>
    <p class="blog-excerpt">${item.excerpt}</p>
    <span class="blog-read">Read article</span>
  </div>
`;

    grid.appendChild(card);
  });
}

// ===== TAB CLICK LOGIC =====
document.querySelectorAll(".blog-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".blog-tab.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    renderBlogs(category);
  });
});

// LOAD first category by default
renderBlogs("guide");

document.addEventListener("click", (e) => {
  const blog = e.target.closest(".open-blog");
  if (!blog) return;

  document.getElementById("blogModalTitle").textContent = blog.dataset.title;
  document.getElementById("blogModalMeta").textContent = blog.dataset.meta;
  document.getElementById("blogModalBody").innerHTML = blog.dataset.body;

  document.getElementById("blogModal").classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close modal
document.querySelector("#blogModal").addEventListener("click", (e) => {
  if (
    e.target.classList.contains("story-modal-overlay") ||
    e.target.classList.contains("story-modal-close")
  ) {
    document.getElementById("blogModal").classList.remove("active");
    document.body.style.overflow = "";
  }
});


document.querySelectorAll(".marquee-track").forEach(track => {
  
  const content = track.querySelector(".marquee-content");

  // Clone the content
  const clone = content.cloneNode(true);
  track.appendChild(clone);

  // Get width of one group
  const contentWidth = content.offsetWidth;

  // Animation speed (bigger = slower)
  const speed = 10; // px per second

  let x = 0;

  function animate() {
    x -= 1; // move 1px per frame

    // When one group finishes, reset exactly at width
    if (Math.abs(x) >= contentWidth) {
      x = 0;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", function() {

  /* ---------------------------------------------------
        1. COUNTDOWN (Auto next 29 September)
  --------------------------------------------------- */

  function getNextWorldHeartDay() {
    const now = new Date();
    let year = now.getFullYear();
    const targetThisYear = new Date(year, 8, 29); // Sep = month 8

    if (now > targetThisYear) year++;
    return new Date(year, 8, 29);
  }

  const target = getNextWorldHeartDay().getTime();

  const d = document.getElementById("whd-days");
  const h = document.getElementById("whd-hours");
  const m = document.getElementById("whd-mins");
  const s = document.getElementById("whd-secs");

  function updateCountdown() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) return;

    d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    h.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    m.innerText = Math.floor((diff / (1000 * 60)) % 60);
    s.innerText = Math.floor((diff / 1000) % 60);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ---------------------------------------------------
       2. CONFETTI (Right side only)
  --------------------------------------------------- */

  const canvas = document.getElementById("whd-confetti");
  const confettiRight = confetti.create(canvas, { resize: true });

  // Burst when loading
  confettiRight({
    particleCount: 180,
    spread: 80,
    startVelocity: 32,
    origin: { x: 0.83, y: 0.05 }
  });

  // Small ongoing confetti on right
  setInterval(() => {
    confettiRight({
      particleCount: 6,
      spread: 80,
      startVelocity: 18,
      origin: { x: 0.85, y: 0 }
    });
  }, 350);


  /* ---------------------------------------------------
       3. FLOATING HEARTS + MUSIC NOTES
  --------------------------------------------------- */

  const whdSection = document.querySelector("#world-heart-day");
  const gifArea = document.querySelector(".whd-gif-family");

  function spawnHeart() {
    const el = document.createElement("div");
    el.className = "whd-heart-particle";
    el.innerHTML = "❤️";

    el.style.left = (gifArea.offsetLeft + 50 + Math.random() * 220) + "px";
    el.style.bottom = "40px";
    el.style.fontSize = (16 + Math.random() * 10) + "px";

    whdSection.appendChild(el);

    setTimeout(() => el.remove(), 6500);
  }

  function spawnNote() {
    const el = document.createElement("div");
    el.className = "whd-note";

    const notes = ["♪", "♫", "♬"];
    el.innerHTML = notes[Math.floor(Math.random() * notes.length)];

    el.style.left = (gifArea.offsetLeft + 80 + Math.random() * 200) + "px";
    el.style.bottom = "40px";

    whdSection.appendChild(el);
    setTimeout(() => el.remove(), 6500);
  }

  setInterval(spawnHeart, 1100);
  setInterval(spawnNote, 1700);


  /* ---------------------------------------------------
       4. SPOTLIGHT THAT FOLLOWS MOUSE
  --------------------------------------------------- */

  const sectionRect = whdSection.getBoundingClientRect();

  whdSection.addEventListener("mousemove", (e) => {
    const x = (e.clientX - sectionRect.left) / sectionRect.width * 100;
    const y = (e.clientY - sectionRect.top) / sectionRect.height * 100;

    whdSection.style.setProperty("--spot-x", x + "%");
    whdSection.style.setProperty("--spot-y", y + "%");
  });

  // fallback idle motion
  let idle = 0;
  setInterval(() => {
    idle += 0.5;
    whdSection.style.setProperty("--spot-x", (80 + Math.sin(idle) * 12) + "%");
    whdSection.style.setProperty("--spot-y", (30 + Math.cos(idle) * 6) + "%");
  }, 100);


});

// Map Impact Section

document.addEventListener("DOMContentLoaded", () => {

  const dots = document.querySelectorAll(".map-dot");
  const title = document.getElementById("impact-title");
  const desc = document.getElementById("impact-desc");

  const defaultTitle = "Bonsai Hearts Foundation";
  const defaultDesc = `
    We stand beside every child whose heart needs a little extra care. At Bonsai Hearts, we support children and families navigating heart-related challenges—offering strength, understanding, and a community that truly listens. Our team works closely with doctors, parents and volunteers to ensure every child with a heart condition receives the confidence, knowledge and emotional support they deserve.<br>Through heart-health camps, educational programs and warm community circles, we help parents feel supported and children grow into their own courage, playfulness and potential.
    <br><br>
    Click on a red dot to view the campaign details.
  `;

  /* -------------------------------------------
     Load default details with slide-in animation
  ------------------------------------------- */
  function loadDefaultPanel() {
    title.innerHTML = defaultTitle;
    desc.innerHTML = defaultDesc;

    // animate
    setTimeout(() => {
      title.classList.add("slide-in");
      desc.classList.add("slide-in");
    }, 30);
  }

  loadDefaultPanel();


  /* -------------------------------------------
     Click → update panel with animation
  ------------------------------------------- */
  dots.forEach(dot => {
    dot.addEventListener("click", () => {

      // remove active from others
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");

      // reset animation
      title.classList.remove("slide-in");
      desc.classList.remove("slide-in");

      setTimeout(() => {
        title.textContent = dot.dataset.campaign;
        desc.textContent = dot.dataset.content;

        title.classList.add("slide-in");
        desc.classList.add("slide-in");
      }, 10);
    });
  });
// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Close menu when clicking a link
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});



  /* -------------------------------------------
     Filters → show/hide dots depending on type
  ------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const type = btn.dataset.filter;

      dots.forEach(dot => {
        if (type === "all" || dot.dataset.type === type) {
          dot.classList.remove("hidden");
        } else {
          dot.classList.add("hidden");
        }
      });

      // reset right panel on filter change
      loadDefaultPanel();
    });
  });

});

// Programs Logic
const modal1 = document.getElementById("programModal");
const modalBody1 = document.getElementById("modalBody");

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

  </div>
  `
};

// OPEN MODAL
document.addEventListener("click", (e) => {
  const card = e.target.closest(".open-program");
  if (!card) return;

  const key = card.dataset.program;
  modalBody1.innerHTML = programs[key];
  modal1.classList.add("active");
});

// CLOSE MODAL
document.querySelector(".modal-close").onclick = () =>
  modal1.classList.remove("active");

document.querySelector(".modal-overlay").onclick = () =>
  modal1.classList.remove("active");


// ---------------------------------------
// LANGUAGE TOGGLE (EN <-> BN)
// ---------------------------------------
const languageToggle = document.getElementById("languageToggle");

// The translation dictionary
const i18n = {
    en: {
         nav_brand: "Bonsai Hearts Foundation",
    logo_sub: "Here we grow hope where fear once lived.",
    nav_home: "Home",
    nav_about: "About",
    nav_programs: "Programs",
    nav_team: "Team",
    nav_blog: "Blog",
    nav_stories: "Stories",
    nav_contact: "Contact",
    nav_volunteer: "Volunteer",
    nav_donate: "Join US",

    hero_eyebrow: "Bonsai Hearts Foundation🌱",
    hero_title: "Growing Resilience, One Tiny Heart at a Time❤️",
    hero_sub:
      "We support children born with heart and lung conditions through awareness, emotional care, and a community that never lets them feel alone.",
    hero_join: "Join our mission",
    hero_learn: "Learn more",
    hero_tag_nonprofit: "Non-profit",
    hero_tag_lives: "1000+ lives touched",
    hero_tag_partners: "6 medical partners",
    hero_badge:
      "Families feel more hopeful after 3 months of support.",

    about_since: "Since 2021",
    about_header: "About us",
    about_title:
      "We stand beside every child whose heartbeat needs extra care.",
    about_p1:
      "We stand beside every child whose heart needs a little extra care. At Bonsai Hearts, we support children and families navigating heart-related challenges—offering strength, understanding, and a community that truly listens. Our team works closely with doctors, parents and volunteers to ensure every child with a heart condition receives the confidence, knowledge and emotional support they deserve.",
    about_p2:
      "Through heart-health camps, educational programs and warm community circles, we help parents feel supported and children grow into their own courage, playfulness and potential.",
    about_li1: "Free awareness sessions in hospitals, schools and communities to improve early understanding of heart health in children.",
    about_li2:
      "Support circles where parents can openly share fears, questions and victories without judgment.",
    about_li3:
      "Child-focused programs that rebuild confidence through play, art, movement and gentle physical activities.",
    about_tag:
      "92% Families feel more hopeful after 3 months of support.",

    marquee_join: "JOIN US NOW",
    marquee_bonsai: "BONSAI HEART FOUNDATION",

    impact_header: "Impact",
    impact_title: "Small hearts. Big courage. Real numbers.",
    impact_sub:
      "Every number here is a story of a child, a parent or a volunteer whose life changed even a little bit.",
    impact_lives: "Lives touched",
    impact_volunteers: "Volunteers",
    impact_partners: "Medical partners",
    impact_events: "Awareness events",

    programs_header: "Programs",
    programs_title:
      "What we do for little hearts and big feelings.",
    programs_sub:
      "Our programs are designed with pediatric experts so that care feels less like 'treatment' and more like growing up — just with extra love.",

    pg_heart_header: "TOP 3 HEART PROGRAMS (Congenital Heart Conditions)",
    pg_heart_1: "HeartStrong Kids",
    pg_heart_1_desc:
      "Heart-health and confidence-building program with safe physical activity, yoga, and awareness.",
    pg_heart_2: "Heart to Heart",
    pg_heart_2_desc:
      "A parent–child program focused on trust, emotional recovery, and understanding the child’s condition.",
    pg_heart_3: "Braveheart Buddies",
    pg_heart_3_desc:
      "A peer support system where older CHD survivors mentor younger children.",

    pg_lung_header: "TOP 3 LUNG PROGRAMS (Congenital Lung & Airway Conditions)",
    pg_lung_1: "Breathe Free",
    pg_lung_1_desc:
      "Breathing exercises, lung education, and parent guidance.",
    pg_lung_2: "Little Lungs Lab",
    pg_lung_2_desc:
      "Interactive workshops that teach children how lungs work.",
    pg_lung_3: "Calm Breath Camp",
    pg_lung_3_desc:
      "Mindfulness-based breathing and relaxation sessions.",

    pg_mental_header: "TOP 3 MENTAL HEALTH & RESILIENCE PROGRAMS",
    pg_mental_1: "Fear to Freedom",
    pg_mental_1_desc:
      "A transformation program helping children overcome fear through guided challenges.",
    pg_mental_2: "Mindful Hearts",
    pg_mental_2_desc:
      "Meditation, mindfulness, and emotional wellness sessions.",
    pg_mental_3: "Heart of Courage Lab",
    pg_mental_3_desc:
      "A structured emotional-strength curriculum with storytelling and leadership exercises.",

    pg_outdoor_header: "TOP 3 OUTDOOR & CONFIDENCE PROGRAMS",
    pg_outdoor_1: "Heart to Hills",
    pg_outdoor_1_desc:
      "Doctor-approved gentle treks and nature walks.",
    pg_outdoor_2: "Roots and Resilience",
    pg_outdoor_2_desc:
      "Nature-based activities that build grounding and confidence.",
    pg_outdoor_3: "Summit Within",
    pg_outdoor_3_desc:
      "A symbolic mini-trek where children conquer small summits.",

    pg_parent_header: "TOP 3 PARENT & COMMUNITY SUPPORT PROGRAMS",
    pg_parent_1: "Parent Heart Circle",
    pg_parent_1_desc:
      "Support circles for caregivers coping with diagnosis and healing.",
    pg_parent_2: "Safe Steps Initiative",
    pg_parent_2_desc:
      "Guidance on safe activities and encouraging play.",
    pg_parent_3: "Community Heartlines",
    pg_parent_3_desc:
      "Awareness programs breaking myths about heart & lung conditions.",

    pg_edu_header: "TOP 3 EDUCATION & HOSPITAL PROGRAMS",
    pg_edu_1: "The Heart Classroom",
    pg_edu_1_desc:
      "School-based curriculum on heart health and resilience.",
    pg_edu_2: "Pulse Points Program",
    pg_edu_2_desc:
      "Hospital orientation for newly diagnosed families.",
    pg_edu_3: "Growing Through Limits",
    pg_edu_3_desc:
      "A resilience curriculum inspired by the Bonsai metaphor.",

    team_header: "Dream Team",
    team_title: "The Hearts Behind the Mission.",
    team_sub:
      "Doctors, educators, designers and parents — all working together so every child feels safe and supported.",

    blog_header: "Blog",
    blog_title: "Learn More about Little Hearts & Everyday Care❤️",
    blog_sub:
      "Practical guides, gentle reminders and expert conversations for families and volunteers.",
    blog_read: "Read article",

    blog1_title:
      "10 questions to ask your doctor after diagnosis.",
    blog1_excerpt:
      "A simple checklist to help you feel less overwhelmed.",
    blog2_title:
      "How to talk to your child about their heart condition.",
    blog2_excerpt:
      "Gentle language that balances honesty with hope.",
    blog3_title:
      "Being present without fixing everything.",
    blog3_excerpt:
      "A guide for volunteers to support families calmly.",
    blog4_title:
      "Tiny routines that help fragile hearts feel stronger.",
    blog4_excerpt:
      "Small steps that support healing and confidence.",
    blog5_title:
      "Why no parent should go through this alone.",
    blog5_excerpt:
      "The power of support circles.",
    blog6_title:
      "A cardiologist answers your top 5 fears.",
    blog6_excerpt:
      "Doctors answer common worries from parents.",

    stories_header: "Stories",
    stories_title: "Hope, one heartbeat at a time.",
    stories_sub:
      "Stories from children, parents and doctors about resilience.",

    story1_title:
      "After the camp, my son finally ran without checking his chest.",
    story1_excerpt:
      "How play and support changed Rohan’s home life.",
    story2_title:
      "Why play is medicine for recovering hearts.",
    story2_excerpt:
      "A doctor explains the healing power of play.",
    story3_title:
      "I came to help. The kids helped me back.",
    story3_excerpt:
      "A volunteer shares her journey.",

    footprint_header: "Global footprint",
    footprint_title:
      "Growing tiny forests of hope around the world.",
    footprint_projects: "Projects",
    footprint_locations: "Locations",
    footprint_years: "Years",
    footprint_countries: "Countries",

    video_header: "Watch",
    video_title: "Leadership & Vision",
    video_sub:
    "Why We Exist: A Message from the CEO of Bonsai Hearts",


    cta_title: "Your time, skills, and compassion can transform the life of a CHD warrior.",
    cta_sub:
      "Join our volunteer community and be part of something meaningful.",
    cta_button: "Join Now",
    cta_alt: "Or become a volunteer instead →",

    footer_hello: "Bonsai Heart Foundation",
    footer_line1: "Born From a Journey of Courage.",
    footer_office: "Office",
    footer_links: "Links",
    footer_home: "Home",
    footer_team: "Our Team",
    footer_about: "About Us",
    footer_programs: "Programs",
    footer_contact: "Contacts",
    footer_get_touch: "Get in touch",
    footer_rights:
      "© 2025 Bonsai Hearts Foundation. All rights reserved.",
    footer_built: "Built with a lot of ❤️ for little hearts."
    },

    bn: {
    // NAV
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_programs: "প্রোগ্রাম",
    nav_team: "দল",
    nav_blog: "ব্লগ",
    nav_stories: "গল্পসমূহ",
    nav_contact: "যোগাযোগ",

    nav_volunteer: "স্বেচ্ছাসেবক",
    nav_donate: "যোগদান করুন",

    // HERO
    hero_eyebrow: "হ্যালো",
    hero_title: "ছোট্ট হৃদয়ে সাহসের নতুন গল্প তৈরির যাত্রা।",
    hero_sub: "হৃদয় ও ফুসফুসজনিত অসুবিধা নিয়ে জন্মানো শিশুদের সচেতনতা, মানসিক যত্ন এবং ভালোবাসায় ভরা একটি কমিউনিটির মাধ্যমে আমরা সহায়তা করি।",
    hero_join: "আমাদের মিশনে যুক্ত হন",
    hero_learn: "আরও জানুন",
    hero_tag_nonprofit: "অলাভজনক",
    hero_tag_lives: "১০০০+ জীবনে স্পর্শ",
    hero_tag_partners: "৬ জন মেডিকেল পার্টনার",

    // ABOUT SECTION
    about_since: "২০১২১ সাল থেকে",
    about_title: "যে শিশুদের হৃদয়ের বাড়তি যত্ন দরকার – আমরা তাদের পাশে থাকি।",
    about_p1: "ডাক্তার, পরিবার ও স্বেচ্ছাসেবকদের সঙ্গে কাজ করে আমরা নিশ্চিত করি যে প্রতিটি শিশু আত্মবিশ্বাস, জ্ঞান এবং মানসিক সহায়তা পায়।",
    about_p2: "ক্যাম্প, সাপোর্ট সার্কেল ও শিক্ষা কার্যক্রমের মাধ্যমে আমরা পরিবারকে শক্ত করে দাঁড়াতে সাহায্য করি।",
    about_li1: "হাসপাতাল, স্কুল ও কমিউনিটিতে বিনামূল্যে সচেতনতা সেশন।",
    about_li2: "অভিভাবকদের জন্য অভিজ্ঞতা ও প্রশ্ন শেয়ারের নিরাপদ স্থান।",
    about_li3: "খেলা, আর্ট ও নড়াচড়ার মাধ্যমে আত্মবিশ্বাস গড়ে তোলার বিশেষ প্রোগ্রাম।",
    about_tag: "৩টি শহরের শিশু হৃদরোগ ও ফুসফুস বিশেষজ্ঞদের সাথে পার্টনারশিপ।",

    // MARQUEE
    marquee_join: "এখনই যুক্ত হন",
    marquee_bonsai: "বনসাই হার্টস ফাউন্ডেশন",

    // IMPACT
    impact_header: "প্রভাব",
    impact_title: "ছোট হৃদয়। বড় সাহস। সত্যিকারের সংখ্যা।",
    impact_p: "প্রতিটি সংখ্যা একটি গল্প — একজন শিশু, একজন অভিভাবক বা একজন স্বেচ্ছাসেবকের যাত্রা।",
    impact_lives: "ছোঁয়া হয়েছে",
    impact_volunteers: "স্বেচ্ছাসেবক",
    impact_partners: "মেডিকেল পার্টনার",
    impact_events: "সচেতনতা ইভেন্ট",

    impact_lives_note: "ইভেন্ট ও প্রোগ্রামের মাধ্যমে পরিবার ও শিশুদের কাছে পৌঁছানো হয়েছে।",
    impact_volunteers_note: "অনলাইন ও অন-গ্রাউন্ডে কাজ করা স্বেচ্ছাসেবক।",
    impact_partners_note: "হাসপাতাল ও ক্লিনিক যারা আমাদের দ্রুত শিশুদের কাছে পৌঁছাতে সাহায্য করে।",
    impact_events_note: "গত ১২ মাসে অনুষ্ঠিত ওয়ার্কশপ, ক্যাম্প ও সার্কেল।",

    // PROGRAM SECTION
    programs_header: "প্রোগ্রাম",
    programs_title: "ছোট্ট হৃদয় ও বড় অনুভূতির জন্য আমরা যা করি।",
    programs_sub: "শিশু বিশেষজ্ঞদের সহযোগিতায় তৈরি প্রোগ্রাম যা চিকিৎসা নয়—শৈশবকে আরও সহজ ও আনন্দময় করে তোলে।",

    // Category Titles
    cat_heart: "❤️ সেরা ৩টি হার্ট প্রোগ্রাম (জন্মগত হৃদরোগ)",
    cat_lung: "🌬 সেরা ৩টি ফুসফুস প্রোগ্রাম",
    cat_mh: "🧠 সেরা ৩টি মানসিক স্বাস্থ্য ও রেজিলিয়েন্স প্রোগ্রাম",
    cat_outdoor: "🌱 সেরা ৩টি আউটডোর ও আত্মবিশ্বাস প্রোগ্রাম",
    cat_parent: "🤝 সেরা ৩টি প্যারেন্ট ও কমিউনিটি সাপোর্ট প্রোগ্রাম",
    cat_edu: "🎓 সেরা ৩টি শিক্ষা ও হাসপাতাল প্রোগ্রাম",

    // HEART PROGRAMS
    p_h1: "হার্টস্ট্রং কিডস",
    p_h1_desc: "নিরাপদ শারীরিক কার্যকলাপ, যোগ ও সচেতনতাকে একত্রে আনা আপনার ফ্ল্যাগশিপ হার্ট-হেলথ প্রোগ্রাম।",

    p_h2: "হার্ট টু হার্ট",
    p_h2_desc: "অভিভাবক–শিশু প্রোগ্রাম যা আত্মবিশ্বাস, বোঝাপড়া ও আবেগ সামলাতে সাহায্য করে।",

    p_h3: "ব্রেভহার্ট বাডিজ",
    p_h3_desc: "যেখানে বড় CHD সারভাইভাররা ছোট শিশুদের মেন্টর করে আত্মবিশ্বাস তৈরি করে।",

    // LUNG PROGRAMS
    p_l1: "ব্রিদ ফ্রি",
    p_l1_desc: "নিঃশ্বাসের ব্যায়াম, ফুসফুসের শিক্ষা এবং অভিভাবক গাইডেন্স নিয়ে আপনার স্বাক্ষর প্রোগ্রাম।",

    p_l2: "লিটল লাংস ল্যাব",
    p_l2_desc: "ইন্টার‌্যাকটিভ সেশন যেখানে শিশুরা জানতে পারে ফুসফুস কীভাবে কাজ করে।",

    p_l3: "কাম ব্রেথ ক্যাম্প",
    p_l3_desc: "শ্বাস-প্রশ্বাস কেন্দ্রিক মননশীলতা সেশন যা ফুসফুস সমস্যায় ভোগা শিশুদের শান্ত করে।",

    // MENTAL HEALTH PROGRAMS
    p_m1: "ফিয়ার টু ফ্রিডম",
    p_m1_desc: "আপনার নিজের যাত্রা থেকে অনুপ্রাণিত শিশুদের ভয় কাটাতে সাহায্য করার গাইডেড চ্যালেঞ্জ প্রোগ্রাম।",

    p_m2: "মাইন্ডফুল হার্টস",
    p_m2_desc: "ধ্যান, মননশীলতা ও আবেগগত শক্তি গড়ার সেশন।",

    p_m3: "হার্ট অব কারেজ ল্যাব",
    p_m3_desc: "গল্প, ক্রিয়েটিভিটি ও নেতৃত্ব কার্যক্রমে তৈরি একটি আবেগ-শক্তি কারিকুলাম।",

    // OUTDOOR PROGRAMS
    p_o1: "হার্ট টু হিলস",
    p_o1_desc: "ডাক্তারের অনুমোদিত নিরাপদ ট্রেক ও প্রকৃতি ভ্রমণ যা শিশুদের শারীরিক আত্মবিশ্বাস ফিরিয়ে আনে।",

    p_o2: "রুটস অ্যান্ড রেজিলিয়েন্স",
    p_o2_desc: "গ্রাউন্ডিং, হাঁটা ও ছোট সফলতার মাধ্যমে আত্মবিশ্বাস তৈরি।",

    p_o3: "দ্য সামিট উইদিন",
    p_o3_desc: "ছোট ‘শিখর জয়’ করার প্রতীকী অভিজ্ঞতা যা ভেতরের শক্তি বাড়ায়।",

    // PARENT SUPPORT PROGRAMS
    p_p1: "প্যারেন্ট হার্ট সার্কেল",
    p_p1_desc: "অভিভাবকদের জন্য নিরাপদ সাপোর্ট গ্রুপ যেখানে ভয়, বোঝাপড়া ও আত্মবিশ্বাস গড়ে ওঠে।",

    p_p2: "সেফ স্টেপস ইনিশিয়েটিভ",
    p_p2_desc: "শিশুকে নিরাপদ রেখে আনন্দময় খেলা ও দৈনন্দিন কাজ শেখানোর গাইড।",

    p_p3: "কমিউনিটি হার্টলাইনস",
    p_p3_desc: "স্কুল, ক্লাব ও স্থানীয় কমিউনিটিতে সচেতনতা ও ভুল ধারণা ভাঙার প্রোগ্রাম।",

    // EDUCATION PROGRAMS
    p_e1: "দ্য হার্ট ক্লাসরুম",
    p_e1_desc: "স্কুলভিত্তিক হার্ট-লাং স্বাস্থ্য, রেজিলিয়েন্স ও অন্তর্ভুক্তির শিক্ষা।",

    p_e2: "পালস পয়েন্টস প্রোগ্রাম",
    p_e2_desc: "হাসপাতালে নতুন ডায়াগনোসিস পাওয়া অভিভাবকদের জন্য আবেগিক ও ব্যবহারিক গাইডেন্স।",

    p_e3: "গ্রোইং থ্রু লিমিটস",
    p_e3_desc: "বনসাই দর্শন থেকে অনুপ্রাণিত সীমাবদ্ধতা থেকেও শক্তি গড়ে তোলার পাঠ।",

    // TEAM
    team_header: "দল",
    team_title: "এই মিশনের পেছনের হৃদয়গুলো।",
    team_sub: "ডাক্তার, শিক্ষাবিদ, ডিজাইনার, অভিভাবক — সকলেই শিশুদের পাশে থাকার জন্য একত্র।",

    // STORIES
    stories_header: "গল্পসমূহ",
    stories_title: "আশা — একেকটি হৃদয়ের গল্প।",
    stories_sub: "শিশু, অভিভাবক ও ডাক্তারদের বাস্তব গল্প যা আমাদের কেন কাজ করি তা মনে করিয়ে দেয়।",

    // BLOG
    blog_header: "ব্লগ",
    blog_title: "হৃদয়ের যত্ন ও দৈনন্দিন সুস্থতার সহজ পথ।",
    blog_sub: "অভিভাবক, স্বেচ্ছাসেবক ও সমর্থকদের জন্য ব্যবহারিক গাইড।",

    // FOOTPRINT
    footprint_header: "গ্লোবাল উপস্থিতি",
    footprint_title: "বিশ্বের বিভিন্ন প্রান্তে ছোট্ট আশার বন তৈরি করছি।",

    footprint_projects: "প্রকল্প",
    footprint_locations: "অবস্থান",
    footprint_years: "বছর",
    footprint_countries: "দেশ",

    //VIDEO
    video_header: "ভিডিও",
    video_title: "দেখুন কীভাবে ছোট্ট হৃদয়গুলো আরও সাহসী হয়ে ওঠে।",
    video_sub:
    "ক্যাম্প, পরিবার সার্কেল ও হাসপাতাল ভিজিট থেকে নেওয়া কিছু মুহূর্ত — যেখানে প্রতিদিনের ছোট সাহসগুলো ধরা আছে।",


    // CTA
    cta_title: "এই মাসে একজন শিশুকে একটু সহজে শ্বাস নিতে সাহায্য করুন।",
    cta_sub: "আপনার সহায়তা সচেতনতা ক্যাম্প, পরিবার সার্কেল এবং সাহস জাগানো ক্ষুদ্র মুহূর্তগুলোকে সম্ভব করে।",
    cta_button: "এখনই দান করুন",
    cta_alt: "অথবা স্বেচ্ছাসেবক হিসেবে যুক্ত হোন →",

    // FOOTER
    footer_hello: "হ্যালো",
    footer_office: "অফিস",
    footer_links: "লিঙ্ক",
    footer_get_touch: "যোগাযোগ করুন",

    footer_line1: "আমরা সবসময় একটি বার্তার দূরত্বে আছি।",
    footer_home: "হোম",
    footer_team: "আমাদের দল",
    footer_about: "আমাদের সম্পর্কে",
    footer_programs: "প্রোগ্রাম",
    footer_contact: "যোগাযোগ",

    footer_rights: "© ২০২৫ বনসাই হার্টস ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।",
    footer_built: "ছোট্ট হৃদয়ের জন্য ভালোবাসা দিয়ে তৈরি।"
}

};

let currentLang = "en";

// Update all text elements
function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
    });
}

// Toggle button
languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    applyLanguage();
});

// Initial load
applyLanguage();

 
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("storyModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalBody = document.getElementById("storyModalBody");
  const modalImage = document.getElementById("modalImage");

  document.querySelectorAll(".open-post").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const key = link.dataset.story;
      const story = STORIES[key];
      if (!story) return;

      modalTitle.textContent = story.title;
      modalMeta.textContent = story.meta;
      modalBody.innerHTML = story.body;
      modalImage.src = story.image;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      console.log("Story modal opened:", key);
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

});

// Button Logic Google Translator
const languageToggle1 = document.getElementById("languageToggle");
let currentLang1 = "en";

function switchLanguage(lang) {
  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
    clearInterval(interval);
  }, 200);
}

languageToggle1.addEventListener("click", () => {
  currentLang1 = currentLang1 === "en" ? "bn" : "en";
  switchLanguage(currentLang1);
});


