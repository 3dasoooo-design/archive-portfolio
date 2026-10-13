/**
 * EXHIBITION ARCHIVE - Main Script
 * Handles table rendering by Class/Professor, Brand, and Members
 */

document.addEventListener("DOMContentLoaded", () => {
  const archiveContainer = document.getElementById("archive-grid-wrap");
  const statsElement = document.getElementById("archive-stats");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cursorCard = document.getElementById("cursor-preview-card");
  const previewImg = document.getElementById("cursor-preview-img");
  const previewMeta = document.getElementById("cursor-preview-meta");

  let currentFilter = "All";

  // Group by Class Group
  function groupByClass(projects) {
    const classOrder = ["이재석 교수님 반", "안은희 교수님 반", "이길호 교수님 반"];
    const grouped = {};
    
    classOrder.forEach(c => { grouped[c] = []; });

    projects.forEach(p => {
      const groupName = p.classGroup || "기타";
      if (!grouped[groupName]) {
        grouped[groupName] = [];
      }
      grouped[groupName].push(p);
    });

    return grouped;
  }

  // Render 3-Column Archive Grid (Each column is a Class Studio)
  function renderArchive(filter = "All") {
    if (!archiveContainer) return;

    const allProjects = window.PROJECTS_DATA || [];
    const filtered = (filter === "All")
      ? allProjects
      : allProjects.filter(p => p.classGroup === filter);

    if (statsElement) {
      statsElement.textContent = `EXHIBITION TEAMS: ${filtered.length} TEAMS`;
    }

    const grouped = groupByClass(filtered);
    const activeClasses = Object.keys(grouped).filter(c => grouped[c].length > 0);

    if (activeClasses.length === 0) {
      archiveContainer.innerHTML = `<p style="padding: 40px; color: #888;">참여 팀 명단이 없습니다.</p>`;
      return;
    }

    let html = "";
    activeClasses.forEach(className => {
      const items = grouped[className];
      const shortClassName = className.replace(" 교수님 ", " "); // e.g. "이재석 반"

      html += `
        <div class="archive-column">
          <div class="year-block">
            <table class="archive-table">
              <thead>
                <tr style="background: #fafafa; border-bottom: 1px solid #111;">
                  <th colspan="3" style="padding: 10px 8px; font-weight: 600; font-size: 13px; letter-spacing: 0.05em; text-align: left;">
                    ${className} <span style="font-size: 11px; color: #888; font-weight: 400; margin-left: 6px;">(${items.length} Teams)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
      `;

      items.forEach((item, index) => {
        const isFirstRow = index === 0;
        const rowCount = items.length;

        html += `
          <tr data-id="${item.id}" data-thumb="${item.thumbnail}" data-brand="${item.brand}" data-members="${item.members}" data-studio="${item.studio}">
            ${isFirstRow ? `<td class="col-year" rowspan="${rowCount}">${shortClassName}</td>` : ""}
            <td class="col-title">
              <a href="project.html?id=${item.id}" class="project-link" data-id="${item.id}">
                ${item.brand || item.title}
              </a>
            </td>
            <td class="col-location" title="${item.members}">${item.members}</td>
          </tr>
        `;
      });

      html += `
              </tbody>
            </table>
          </div>
        </div>
      `;
    });

    archiveContainer.innerHTML = html;
    bindPreviewEvents();
  }

  // Signature Floating Preview
  let mouseX = -500, mouseY = -500;
  let curX = -500, curY = -500;
  let isHovering = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX + 24;
    mouseY = e.clientY + 20;

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
    const rows = document.querySelectorAll(".archive-table tbody tr");
    rows.forEach(row => {
      row.addEventListener("mouseenter", () => {
        const thumb = row.dataset.thumb;
        const brand = row.dataset.brand;
        const members = row.dataset.members;

        if (thumb && cursorCard && previewImg) {
          previewImg.src = thumb;
          if (previewMeta) {
            previewMeta.innerHTML = `<span style="font-weight:600;">${brand}</span><span>${members}</span>`;
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

  // Filter Button Events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "All";
      renderArchive(currentFilter);
    });
  });

  // Initial render
  renderArchive("All");
});
