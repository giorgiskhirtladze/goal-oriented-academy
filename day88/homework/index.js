const coulourValue = document.getElementById("colour");
const addItem = document.getElementById("+")
const mainContainer = document.getElementsByClassName("main-box-container")[0]
addItemIcon.addEventListener("click", handleAdd)

function handleAdd(){
    let newBox = document.createElement("div")
    newBox.innerHTML = ` 
   <form class="box-container">
        <div class="box-value">
            <span class="addbtn">&#10008;</span>
        </div>
        <textarea name="ta" id="ta" placeholder="enter text..."></textarea>
    </form>`

const boxContainer = newBox.querySelector(".box-container")[0]
const exitElement = newBox.querySelector("#x")
const textArea = newBox.querySelector("#ta")
exitElement.addEventListener('click', 'hadleremove')
function handleAdd(){
    mainContainer.appendChild(newBox).querySelector(".#ta")
    textArea.computedStyleMap.background = 'black'
    
}
}
console.log(coulourValue, addItem, mainContainer)

function handleRemove(){
    exitElement.parentElement.remove()
}
