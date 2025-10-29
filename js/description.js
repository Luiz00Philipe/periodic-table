const cards = document.querySelectorAll('.card');
const search = document.getElementById('search');
const options = document.querySelector('.options');
const select = document.querySelector('.select');

let atomicNumber = 1;
document.querySelectorAll('.card .atomic-number').forEach((name) => {
  name.textContent = atomicNumber + name.textContent;
  atomicNumber++;
});

search.addEventListener('keyup', (e) => searchDesc(e));

function searchDesc(e) {
  let currentValue = e.target.value.toLowerCase();
  let titles;

  if (select.textContent.toLowerCase() == 'name') {
    titles = document.querySelectorAll('.card .name');
  } else if (select.textContent.toLowerCase() == 'latin name') {
    titles = document.querySelectorAll('.card .latin-name');
  } else if (select.textContent.toLowerCase() == 'person') {
    titles = document.querySelectorAll('.card .discovered');
  } else if (select.textContent.toLowerCase() == 'phase') {
    titles = document.querySelectorAll('.card .phase');
  }

  titles.forEach((title) => {
    if (title.textContent.toLowerCase().startsWith(currentValue)) {
      if (select.textContent.toLowerCase() == 'name') {
        title.parentNode.style.display = 'inline-block';
      } else if (select.textContent.toLowerCase() == 'latin name') {
        title.parentNode.style.display = 'inline-block';
      } else if (select.textContent.toLowerCase() == 'person') {
        title.parentNode.style.display = 'inline-block';
      } else if (select.textContent.toLowerCase() == 'phase') {
        title.parentNode.style.display = 'inline-block';
      }
    } else {
      title.parentNode.style.display = 'none';
    }
  });
}

select.addEventListener('click', () => {
  if (options.style.display == 'flex') {
    options.style.opacity = '0';
    setTimeout(() => {
      options.style.display = 'none';
    }, 370);
  } else {
    options.style.display = 'flex';
    setTimeout(() => {
      options.style.opacity = '1';
    }, 10);
    setTimeout(() => {
      options.style.opacity = '0';
      setTimeout(() => {
        options.style.display = 'none';
      }, 370);
    }, 4000);
  }
});

options.childNodes.forEach((option) => {
  option.addEventListener('click', () => {
    select.textContent = option.innerText;
    options.style.opacity = '0';
    setTimeout(() => {
      options.style.display = 'none';
    }, 370);
  });
});
