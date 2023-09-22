const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');

  // Event listener for "Exercice Précédant" button
  prevPageBtn.addEventListener('click', () => {
    // Redirect to index.html
    window.location.href = 'index2.html';
  });

  // Event listener for "Exercice Suivant" button
  nextPageBtn.addEventListener('click', () => {
    // Redirect to index2.html
    window.location.href = 'index4.html';
  });