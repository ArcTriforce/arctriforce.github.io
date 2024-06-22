//------------------
// Content DIVs
//------------------
const up = document.getElementById('contentUp');
const down = document.getElementById('contentDown');
const upCont = document.getElementById('contentUpContainer');
const downCont = document.getElementById('contentDownContainer');
//------------------
// Buttons
//------------------
const btns = document.querySelectorAll('.btn');
const home = document.getElementById('home');
const people = document.getElementById('people');
const dni = document.getElementById('dni');
const blog = document.getElementById('blog');
const info = document.getElementById('info');

// Emoji replacement kind of stolen from the original emoji.js

function replaceEmoji(content) {
  return content
             .replace(/:autism:/g, '<img class="emojiThing small" alt="autism" src="https://cdn.discordapp.com/emojis/1126378457568395384.webp?size=44&quality=lossless">')
    .replace(/:sprintingcatMED:/g, '<img class="emojiThing medium" alt="sprintingcatMED" src="https://cdn.discordapp.com/emojis/1179076607328137236.gif?size=96&quality=lossless">');
}

// This handles clicking
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    var content = document.getElementById(`${btn.id}Content`);
    var contentUp = document.querySelector(`#${btn.id}Content .up`).innerHTML;
    var contentDown = document.querySelector(`#${btn.id}Content .down`).innerHTML;
    var contentSize = parseInt(content.getAttribute('data-size')) + 30;
    up.setAttribute('style', `height:${contentSize}px`);
    console.log(up.offsetHeight)

    upCont.innerHTML = replaceEmoji(contentUp);
    downCont.innerHTML = replaceEmoji(contentDown);

    window.location.hash = btn.id;

  })
});

// This handles loading the page in the right section based on the hash
document.addEventListener('DOMContentLoaded', () => {
  var hash = window.location.hash.substring(1)

  if (document.getElementById(hash)) {
    document.getElementById(hash).click()
  } else {
    home.click()
  }

})

// Please update