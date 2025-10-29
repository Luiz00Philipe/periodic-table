if (!navigator.onLine) {
  alert('This page requires internet connection.');
}

const fetchBtn = document.getElementById('fetchButton');
const errorElement = document.getElementById('error');

fetchBtn.addEventListener('click', function () {
  errorElement.style.display = 'none';
  errorElement.textContent = '';
  const elementName = document.getElementById('elementName').value;

  if (elementName == '') {
    errorElement.style.display = 'inline-block';
    errorElement.textContent = "The element name can't be empty";
  }

  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${elementName}&prop=pageimages&format=json&origin=*`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const page = Object.values(data.query.pages)[0];
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';

      if (page.pageid) {
        const img = document.createElement('img');
        img.src = page.thumbnail
          ? page.thumbnail.source
          : 'https://via.placeholder.com/300?text=Image+not+found';
        resultDiv.appendChild(img);
      } else {
        resultDiv.innerHTML = '';
        errorElement.style.display = 'inline-block';
        errorElement.textContent = 'Error: element not found.';
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
