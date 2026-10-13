/**
 * THE ARCHIVE - Project Detail Page Script
 * Dynamic slider, specification table, and prev/next pagination
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  const projects = window.PROJECTS_DATA || [];
  let currentIndex = projects.findIndex(p => p.id === projectId);

  if (currentIndex === -1) {
    currentIndex = 0; // fallback to first project
  }

  const project = projects[currentIndex];
  if (!project) return;

  // 1. Populate Header & Meta
  document.title = `${project.brand || project.title} — EXHIBITION ARCHIVE`;
  const titleEl = document.getElementById("project-title");
  const breadcrumbEl = document.getElementById("project-breadcrumb");

  if (titleEl) titleEl.textContent = project.brand || project.title;
  if (breadcrumbEl) breadcrumbEl.textContent = `${project.classGroup} / ${project.members}`;

  // 2. Setup Image Slider
  const sliderTrack = document.getElementById("slider-track");
  const indicatorContainer = document.getElementById("slider-indicators");
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");

  const images = (project.images && project.images.length > 0) ? project.images : [project.thumbnail];
  let currentSlide = 0;

  if (sliderTrack) {
    sliderTrack.innerHTML = images.map((imgUrl, i) => `
      <div class="slide-item ${i === 0 ? "active" : ""}" data-index="${i}">
        <img src="${imgUrl}" alt="${project.brand || project.title} slide ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" />
      </div>
    `).join("");
  }

  if (indicatorContainer) {
    indicatorContainer.innerHTML = images.map((_, i) => `
      <div class="slider-indicator ${i === 0 ? "active" : ""}" data-index="${i}"></div>
    `).join("");
  }

  function goToSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentSlide = index;

    const slides = document.querySelectorAll(".slide-item");
    const dots = document.querySelectorAll(".slider-indicator");

    slides.forEach((s, idx) => s.classList.toggle("active", idx === currentSlide));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === currentSlide));
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  if (indicatorContainer) {
    indicatorContainer.addEventListener("click", (e) => {
      const dot = e.target.closest(".slider-indicator");
      if (dot) {
        goToSlide(Number(dot.dataset.index));
      }
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
    if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
  });

  // 3. Populate Specification Table
  const specContainer = document.getElementById("project-spec-body");
  if (specContainer) {
    specContainer.innerHTML = `
      <tr>
        <td class="spec-name-col" rowspan="5">${project.brand || project.title}</td>
        <td class="spec-key-col">Brand</td>
        <td class="spec-val-col"><strong>${project.brand || project.title}</strong></td>
      </tr>
      <tr>
        <td class="spec-key-col">Class Studio</td>
        <td class="spec-val-col">${project.classGroup} (${project.studio})</td>
      </tr>
      <tr>
        <td class="spec-key-col">Members (참여 인원)</td>
        <td class="spec-val-col"><strong>${project.members}</strong></td>
      </tr>
      <tr>
        <td class="spec-key-col">Genre</td>
        <td class="spec-val-col">${project.genre || project.category}</td>
      </tr>
      <tr>
        <td class="spec-key-col">Concept</td>
        <td class="spec-val-col">${project.concept || "—"}</td>
      </tr>
    `;
  }

  // 4. Prev / Next Navigation Bar
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const prevLink = document.getElementById("prev-project-link");
  const nextLink = document.getElementById("next-project-link");

  if (prevLink) {
    prevLink.href = `project.html?id=${prevProject.id}`;
    prevLink.textContent = `← PREV: ${prevProject.brand || prevProject.title}`;
  }
  if (nextLink) {
    nextLink.href = `project.html?id=${nextProject.id}`;
    nextLink.textContent = `NEXT: ${nextProject.brand || nextProject.title} →`;
  }
});
