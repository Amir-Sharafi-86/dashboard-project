const btnLink  = document.querySelectorAll(".link__sidebar")
console.log(btnLink);

btnLink.forEach(btn => {
  btn.addEventListener("click" , (e) => {
    e.preventDefault() 
    document.querySelector(".active_link_sidbar").classList.remove("active_link_sidbar")
    btn.classList.add("active_link_sidbar")
  })
})