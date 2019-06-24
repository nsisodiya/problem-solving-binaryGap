function solution() {
  var allDepths = [];
  allLINode = document.querySelectorAll("li");
  JSON.parse(JSON.stringify(Array(allLINode.length))).forEach(function (v, i) {
    var list = [];
    var cEle = allLINode[i];
    while (cEle !== null) {
      if (cEle.nodeName === "LI") {
        list.push("X");
      }
      cEle = cEle.parentElement;
    }
    allDepths.push(list.length);
  });
  var l = Math.max(...allDepths);
  if (allDepths.length === 0) {
    l = 0;
  }
  console.log("Depth is ", l)

}
solution();