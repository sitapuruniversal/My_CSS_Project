let inputs = document.getElementById("item")
let text = document.querySelector(".text")

function Add(){
    if(inputs.value == ""){
        alert("Please enter a Item ")
    } else{
        let newElement = document.createElement("ul")
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-delete-left"></i>`;
        newElement.style.backgroundColor="gray"
        text.appendChild(newElement);
        newElement.style.display="flex"
        newElement.style.justifyContent="space-between"
        
        inputs.value = ""
        newElement.querySelector("i").addEventListener("click",remove);

        function remove(){
            newElement.remove()
        }
    }
}