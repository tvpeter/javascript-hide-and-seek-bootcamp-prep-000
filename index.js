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

function increaseRankBy(n)
{
  var listLi = document.querySelectorAll(".ranked-list");
   
  for( let i=1; i<n; i++)
  {
     var li = document.createElement("li");
     var text = document.createTextNode("Hello this is the new text");
     var cm = li.appendChild(text);
     listLi.appendChild(cm);
    
  }
}