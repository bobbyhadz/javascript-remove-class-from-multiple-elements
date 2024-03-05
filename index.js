console.log('bobbyhadz.com');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  // ✅ Remove class from each element
  box.classList.remove('big');

  // ✅ Add class to each element
  // box.classList.add('small');
});
