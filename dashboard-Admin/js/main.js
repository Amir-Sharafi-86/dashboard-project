


let burger_menu = document.querySelector('.burger_menu')
let sidbar = document.querySelector('aside')
let bg_cover = document.querySelector('.bg_cover')

burger_menu.addEventListener('click',e=>{
    console.log('click')
    sidbar.classList.add('d_block')
    bg_cover.classList.add('d_block')
})
bg_cover.addEventListener('click',e=>{
    console.log('click')
    sidbar.classList.remove('d_block')
    bg_cover.classList.remove('d_block')
})