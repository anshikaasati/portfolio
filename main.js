const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const navItems = menu.querySelectorAll("li");

const changeActiveItem = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});

const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");
  if (readMoreContent.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Show More";
  }
});

const skillItems = document.querySelectorAll("section.skills .skill");
skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    const items = skill.querySelector('.items');
    const arrow = skill.querySelector('.arrow');
    items.classList.toggle('show-items');
    arrow.classList.toggle('rotate');
  })
});


window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)

});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      themeToggle.innerHTML = '<i class="fa fa-sun" aria-hidden="true"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fa fa-moon" aria-hidden="true"></i>';
    }
  });
});
