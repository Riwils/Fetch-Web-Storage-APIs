fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall").then(response => response.json()).then(data => addElements(data));


function addElements(list){
  list.forEach (function (element) {
    let newLi = document.createElement("li")
    let newContent = document.createTextNode(element)
    newLi.appendChild(newContent)
    let currentUl = document.getElementById("list")
    document.body.insertBefore(newLi, currentUl)
  })
};

function addComment(comment) {
  let li = document.createElement("li");
  document.getElementById("list").appendChild(li);

  li.innerHTML += comment.value;
  return false;
  }
 

/*
function addComment()
  let newlistItem = getElementById("li");

fetch("https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall", {
  method: "POST",
  body: JSON.stringify({message: newlistItem})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
});

letCurrentList = document.getElementById("list").lastElementChild;
let newComment = document.createElement("li");
newComment.innerText = addComment;

*/
