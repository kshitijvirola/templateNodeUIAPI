fetch('http://localhost:5000/image')
.then(response => response.json(response))
.then(a => {console.log(a);
  document.getElementById('img1').src = a.data[0].img;
});