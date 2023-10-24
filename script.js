let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
let lengthItem = items.length -1;
// next.addEventListener('click',()=>{
//      if(active + 1 > lengthItem){
//           active = 0;
//      }else{
//           active = active + 1;
//      }
          
//      reloadSlider();
// })
// function reloadSlider(){
//      let checkleft = items[active].offsetLeft;
//      list.style.left = -checkleft + 'px';
// }
setTimeout(()=>{
     next.addEventListener('click',()=>{
          if(active + 1 > lengthItem){
               active = 0;
          }else{
               active = active + 1;
          }
               
          reloadSlider();
     })
     function reloadSlider(){
          let checkleft = items[active].offsetLeft;
          list.style.left = -checkleft + 'px';
     }
},1000);