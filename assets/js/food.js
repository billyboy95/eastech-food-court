(function () {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
  }
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  const menus = {
    0: { day: "Sunday", special: "Family platter — ¼ chicken, pap, chakalaka & salad", items: [
      ["Breakfast roll & coffee", "R45"], ["Grilled chicken quarter", "R75"], ["Pap & wors", "R65"], ["Veg curry & rice", "R60"]
    ]},
    1: { day: "Monday", special: "Student combo — stew, pap & juice", items: [
      ["Scrambled eggs on toast", "R38"], ["Beef stew & pap", "R72"], ["Fried chicken 2pc", "R55"], ["Bean relish & dumplings", "R52"]
    ]},
    2: { day: "Tuesday", special: "Mogodu Monday-next — tripe, dumpling & chilli", items: [
      ["Mogodu & pap", "R80"], ["Chicken stew", "R70"], ["Veg plate", "R48"], ["Burger & chips", "R69"]
    ]},
    3: { day: "Wednesday", special: "Fried chicken Wednesday — 3pc + chips", items: [
      ["Fried chicken 3pc", "R68"], ["Pap & gravy", "R35"], ["Chakalaka beans", "R28"], ["Campus burger", "R69"]
    ]},
    4: { day: "Thursday", special: "Staff lunch — lamb stew, rice, veg", items: [
      ["Lamb stew & rice", "R85"], ["Chicken livers", "R58"], ["Salad box", "R42"], ["Toasted sandwich", "R40"]
    ]},
    5: { day: "Friday", special: "Shisa nyama Friday — grilled mix", items: [
      ["Grilled mixed grill", "R95"], ["Pap & chakalaka", "R40"], ["Fried fish", "R78"], ["Milkshake", "R32"]
    ]},
    6: { day: "Saturday", special: "Brunch board — eggs, boerewors, chips", items: [
      ["Full brunch", "R89"], ["Chicken & chips", "R72"], ["Veg wrap", "R55"], ["Cake slice", "R28"]
    ]}
  };
  const d = new Date().getDay();
  const today = menus[d];
  const board = document.querySelector("[data-today]");
  if (board && today) {
    const dayEl = board.querySelector("[data-day]");
    const spec = board.querySelector("[data-special]");
    const list = board.querySelector("[data-items]");
    if (dayEl) dayEl.textContent = today.day;
    if (spec) spec.textContent = today.special;
    if (list) {
      list.innerHTML = today.items.map(([n, p]) => `<div class="meal"><span>${n}</span><span class="price">${p}</span></div>`).join("");
    }
  }

  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".success");
      if (note) note.classList.add("show");
      form.reset();
    });
  });
})();
