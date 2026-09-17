(function () {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const target = href.split("#")[0] || "index.html";
    if (target === file || (file === "" && target === "index.html")) {
      a.classList.add("active");
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImg = lightbox && lightbox.querySelector("img");
  if (lightbox && lightboxImg) {
    const close = () => lightbox.classList.remove("open");
    document.querySelectorAll("[data-gallery] img").forEach((img) => {
      const opener = img.closest("a, button") || img;
      opener.addEventListener("click", (e) => {
        e.preventDefault();
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || "";
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  document.querySelectorAll("form[data-enquiry]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Date: ${data.get("date") || ""}`,
        `Space: ${data.get("space") || ""}`,
        `Headcount: ${data.get("headcount") || ""}`,
        "",
        data.get("message") || ""
      ];
      const subject = encodeURIComponent("Food Court venue enquiry");
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:queries@eastc.co.za?subject=${subject}&body=${body}`;
      const note = form.querySelector(".success");
      if (note) note.classList.add("show");
    });
  });
})();
