function getFirstSelector(selector)
{
   return document.querySelector('selector');
}

function nestedTarget(target)
{
  var el = document.getElementById('#nested');
  var tg = el.querySelector('.target');
  return tg;
}