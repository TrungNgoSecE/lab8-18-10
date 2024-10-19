
async function fetchData() {
  try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayData(data);
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}

function displayData(data) {
  const container = document.getElementById('data-container');
  container.innerHTML = ''; 

  const img = document.createElement('img');
  img.src = data.message; 
  img.alt = 'Random Dog';
  img.style.width = '300px'; 
  img.style.borderRadius = '10px'; 

  container.appendChild(img);
}


window.onload = fetchData;
