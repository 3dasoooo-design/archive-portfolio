/**
 * GACHON.IA Archive - Master Portal Script
 * Renders the top-level exhibitions directory by year and type
 */

document.addEventListener("DOMContentLoaded", () => {
  const portalContainer = document.getElementById("portal-grid-wrap");
  const statsElement = document.getElementById("portal-stats");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cursorCard = document.getElementById("cursor-preview-card");
  const previewImg = document.getElementById("cursor-preview-img");
  const previewMeta = document.getElementById("cursor-preview-meta");

  let currentFilter = "All";

  // Group Exhibitions by Year
  function groupByYear(exhibitions) {
    const grouped = {};
    exhibitions.forEach(ex => {
      if (!grouped[ex.year]) {
        grouped[ex.year] = [];
      }
      grouped[ex.year].push(ex);
    });
    return grouped;
  }

  function renderPortal(filter = "All") {
    if (!portalContainer) return;

    const allExhibitions = window.EXHIBITIONS_DATA || [];
    const filtered = (filter === "All")
      ? allExhibitions
      : allExhibitions.filter(ex => ex.type.includes(filter) || ex.title.includes(filter));

    if (statsElement) {
      statsElement.textContent = `EXHIBITIONS COUNT: ${filtered.length} ARCHIVES`;
    }

    const grouped = groupByYear(filtered);
    const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

    if (sortedYears.length === 0) {
      portalContainer.innerHTML = `<p style="padding: 40px; color: #888;">등록된 전시가 없습니다.</p>`;
      return;
    }

    let html = `
      <div style="max-width: 1000px; margin: 0 auto; width: 100%;">
        <table class="archive-table" style="font-size: 14px;">
          <thead>
            <tr style="background: #fafafa; border-bottom: 2px solid #111;">
              <th style="width: 15%; padding: 12px 10px; font-weight: 600; letter-spacing: 0.05em;">YEAR</th>
              <th style="width: 50%; padding: 12px 10px; font-weight: 600; letter-spacing: 0.05em;">EXHIBITION TITLE</th>
              <th style="width: 35%; padding: 12px 10px; font-weight: 600; letter-spacing: 0.05em; text-align: right;">SCALE / CLASSIFICATION</th>
            </tr>
          </thead>
          <tbody>
    `;

    sortedYears.forEach(year => {
      const items = grouped[year];
      items.forEach((item, index) => {
        const isFirstRow = index === 0;
        const rowCount = items.length;
        const isClickable = item.link && item.link !== "#";

        html += `
          <tr data-thumb="${item.thumbnail}" data-title="${item.title}" data-type="${item.type}" data-year="${item.year}">
            ${isFirstRow ? `<td class="col-year" rowspan="${rowCount}" style="font-size: 13px; font-weight: 700; vertical-align: top; padding-top: 14px;">${year}</td>` : ""}
            <td class="col-title" style="padding: 14px 10px;">
              ${isClickable 
                ? `<a href="${item.link}" style="font-weight: 600; font-size: 15px; color: #111; display: inline-flex; align-items: center; gap: 8px;">
                     <span>${item.title}</span>
                     ${item.status === 'CURRENT' ? `<span style="font-size: 10px; background: #111; color: #fff; padding: 2px 6px; font-family: var(--font-mono); font-weight: 400; border-radius: 2px;">ACTIVE</span>` : ''}
                     <span style="font-size: 12px; color: #888;">&rarr;</span>
                   </a>`
                : `<span style="font-weight: 500; color: #555;">${item.title}</span> <span style="font-size: 11px; color: #999; margin-left: 6px;">(${item.status})</span>`
              }
              <div style="font-size: 12px; color: #777; margin-top: 4px; line-height: 1.4;">${item.description}</div>
            </td>
            <td class="col-location" style="padding: 14px 10px; text-align: right; vertical-align: top;">
              <div style="font-weight: 500; color: #222;">${item.teamsCount}</div>
              <div style="font-size: 11px; color: #888; margin-top: 2px;">${item.type}</div>
            </td>
          </tr>
        `;
      });
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    portalContainer.innerHTML = html;
    bindPreviewEvents();
  }

  // Floating Preview Card
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
        const title = row.dataset.title;
        const type = row.dataset.type;

        if (thumb && cursorCard && previewImg) {
          previewImg.src = thumb;
          if (previewMeta) {
            previewMeta.innerHTML = `<span style="font-weight:600;">${title}</span><span>${type}</span>`;
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

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "All";
      renderPortal(currentFilter);
    });
  });

  renderPortal("All");
});
