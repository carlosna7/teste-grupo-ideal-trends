const submenu = document.querySelector("#submenu");
const dropdownHover = document.querySelector("#dropdown");

const secondSubmenus = [
  { trigger: "#second_submenu_1", submenu: "#submenu11" },
  { trigger: "#second_submenu_2", submenu: "#submenu22" },
  { trigger: "#second_submenu_3", submenu: "#submenu33" },
  { trigger: "#second_submenu_4", submenu: "#submenu44" }
];

dropdownHover.addEventListener("mouseover", () => {
  submenu.style.display = "block";
});
dropdownHover.addEventListener("mouseout", () => {
  submenu.style.display = "none";
});

secondSubmenus.forEach(({ trigger, submenu }) => {
  const triggerElement = document.querySelector(trigger);
  const submenuElement = document.querySelector(submenu);
  
  triggerElement.addEventListener("mouseover", () => {
    submenuElement.style.display = "block";
  });
  
  triggerElement.addEventListener("mouseout", () => {
    submenuElement.style.display = "none";
  });
});
