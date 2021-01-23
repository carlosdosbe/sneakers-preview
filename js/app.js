function slider(anything)
{
  document.querySelector('.sneakers').src = anything;
}

function changeBg(color)
{
  const bg = document.querySelector('.circle');
  bg.style.background = color;

  const circleBg2 = document.querySelector('.circle2');
  circleBg2.style.background = color;
}

function toggleMenu()
{
  var menu = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
}
