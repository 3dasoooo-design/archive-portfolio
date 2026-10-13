/**
 * THE ARCHIVE - Main Script
 * Handles table rendering, category filtering, and signature cursor preview
 */

document.addEventListener("DOMContentLoaded", () => {
  const archiveContainer = document.getElementById("archive-grid-wrap");
  const statsElement = document.getElementById("archive-stats");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cursorCard = document.getElementById("cursor-preview-card");
  const previewImg = document.getElementById("cursor-preview-img");
  const previewMeta = document.getElementById("cursor-preview-meta");

  let currentCategory = "All";

  // 1. Group Projects by Year
  function groupProjectsByYear(projects) {
    const grouped = {};
    projects.forEach(p => {
      if (!grouped[p.year]) {
        grouped[p.year] = [];
      }
      grouped[p.year].push(p);
    });
    return grouped;
  }

  // 2. Render 3-Column Archive Grid (like T-FP layout)
  function renderArchive(category = "All") {
    if (!archiveContainer) return;

    const filtered = (category === "All") 
      ? window.PROJECTS_DATA 
      : window.PROJECTS_DATA.filter(p => p.category.toLowerCase() === category.toLowerCase());

    if (statsElement) {
      statsElement.textContent = `INDEX COUNT: ${filtered.length} PROJECTS`;
    }

    const grouped = groupProjectsByYear(filtered);
    const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

    if (sortedYears.length === 0) {
      archiveContainer.innerHTML = `<p style="padding: 40px; color: #888;">No projects found in this category.</p>`;
      return;
    }

    // Split years across 3 columns evenly
    const columnsCount = 3;
    const columns = Array.from({ length: columnsCount }, () => []);

    sortedYears.forEach((year, idx) => {
      const colIndex = idx % columnsCount;
      columns[colIndex].push({ year, items: grouped[year] });
    });

    // Generate HTML for each column
    let html = "";
    columns.forEach(col => {
      html += `<div class="archive-column">`;
      col.forEach(yearGroup => {
        html += `
          <div class="year-block">
            <table class="archive-table">
              <tbody>
        `;
        yearGroup.items.forEach((item, index) => {
          const isFirstRow = index === 0;
          const rowCount = yearGroup.items.length;
          html += `
            <tr data-id="${item.id}" data-thumb="${item.thumbnail}" data-category="${item.category}" data-year="${item.year}">
              ${isFirstRow ? `<td class="col-year" rowspan="${rowCount}">${yearGroup.year}</td>` : ""}
              <td class="col-title">
                <a href="project.html?id=${item.id}" class="project-link" data-id="${item.id}" data-thumb="${item.thumbnail}" data-category="${item.category}" data-title="${item.title}">
                  ${item.title}
                </a>
              </td>
              <td class="col-location">${item.location}</td>
            </tr>
          `;
        });
        html += `
              </tbody>
            </table>
          </div>
        `;
      });
      html += `</div>`;
    });

    archiveContainer.innerHTML = html;
    bindPreviewEvents();
  }

  // 3. Cursor Floating Image Preview Interaction
  let mouseX = -500, mouseY = -500;
  let curX = -500, curY = -500;
  let isHovering = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX + 24; // offset from cursor
    mouseY = e.clientY + 20;

    // Prevent going off screen
    if (mouseX + 300 > window.innerWidth) {
      mouseX = e.clientX - 304;
    }
    if (mouseY + 210 > window.innerHeight) {
      mouseY = e.clientY - 210;
    }
  });

  function updateCursorPosition() {
    if (isHovering && cursorCard) {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursorCard.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
    }
    requestAnimationFrame(updateCursorPosition);
  }
  updateCursorPosition();

  function bindPreviewEvents() {
    const rows = document.querySelectorAll(".archive-table tr");
    rows.forEach(row => {
      row.addEventListener("mouseenter", (e) => {
        const thumb = row.dataset.thumb;
        const cat = row.dataset.category;
        const year = row.dataset.year;

        if (thumb && cursorCard && previewImg) {
          previewImg.src = thumb;
          if (previewMeta) {
            previewMeta.innerHTML = `<span>${cat}</span><span>${year}</span>`;
          }
          cursorCard.classList.add("visible");
          isHovering = true;
        }
      });

      row.addEventListener("mouseleave", () => {
        if (cursorCard) {
          cursorCard.classList.remove("visible");
          isHovering = false;
        }
      });
    });
  }

  // 4. Category Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "All";
      renderArchive(currentCategory);
    });
  });

  // Initial render
  renderArchive("All");
});
