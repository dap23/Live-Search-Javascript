const input = document.querySelector('.search-input');
input.addEventListener('input', filter);

function filter() {
  const filter = input.value.toLowerCase();
  const list = document.querySelectorAll('.list-item');

  list.forEach((i) => {
    let text = i.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      i.style.display = '';
    } else {
      i.style.display = 'none';
    }
  });
}

const list = document.querySelectorAll('.list-item');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    window.open('course.html');
  });
}

// const loadmore = document.querySelector('.button');
// let current = 4;

// loadmore.onclick = () => {
//   let boxes = [...document.querySelectorAll('.list-item')];
//   for (let i = 0; i < current + 4; i++) {
//     boxes[i].style.display = 'block';
//   }
//   current += 4;
//   if (current >= boxes.length) {
//     loadmore.style.display = 'none';
//   }
// };
