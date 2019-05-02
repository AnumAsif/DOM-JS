function showDomElements() {
    document.getElementById('main').style.display = 'block'
};
function showTags() {
    var c = document.getElementById('main').childNodes;
    var txt = " ";
    var i;
    for (i = 0; i < c.length; i++) {
      txt = txt + c[i].nodeName + ", ";
    }
  
    document.getElementById("display").innerHTML = txt;
};
function reset() {
    location.reload();
};
  