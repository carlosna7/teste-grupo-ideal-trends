const submenu = document.querySelector("#submenu")
const dropdownHover = document.querySelector("#dropdown")

const secondSubmenuOne = document.querySelector("#second_submenu_1")
const secondSubmenuTwo = document.querySelector("#second_submenu_2")
const secondSubmenuThree = document.querySelector("#second_submenu_3")
const secondSubmenuFour = document.querySelector("#second_submenu_4")

dropdownHover.addEventListener("mouseover", () => {
  submenu.style.display = "block"
});
dropdownHover.addEventListener("mouseout", () => {
  submenu.style.display = "none"
});

secondSubmenuOne.addEventListener("mouseover", () => {
  const submenu = document.querySelector("#submenu11")
  submenu.style.display = "block"
});
secondSubmenuOne.addEventListener("mouseout", () => {
  const submenu = document.querySelector("#submenu11")
  submenu.style.display = "none"
});

secondSubmenuTwo.addEventListener("mouseover", () => {
  const submenu = document.querySelector("#submenu22")
  submenu.style.display = "block"
});
secondSubmenuTwo.addEventListener("mouseout", () => {
  const submenu = document.querySelector("#submenu22")
  submenu.style.display = "none"
});

secondSubmenuThree.addEventListener("mouseover", () => {
  const submenu = document.querySelector("#submenu33")
  submenu.style.display = "block"
});
secondSubmenuThree.addEventListener("mouseout", () => {
  const submenu = document.querySelector("#submenu33")
  submenu.style.display = "none"
});

secondSubmenuFour.addEventListener("mouseover", () => {
  const submenu = document.querySelector("#submenu44")
  submenu.style.display = "block"
});
secondSubmenuFour.addEventListener("mouseout", () => {
  const submenu = document.querySelector("#submenu44")
  submenu.style.display = "none"
});