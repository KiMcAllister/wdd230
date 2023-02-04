const input = document.getElementById("favchap");
const subButton = document.querySelector("button");
const favList = document.getElementById("list");

subButton.addEventListener("click", function(){
    if (input.value != ""){
        let item = document.createElement("li");
        let deleteBtn = document.createElement("button");
        item.textContent = input.value +" ";
        input.value = "";
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", function(event){
            event.target.parentElement.remove();
        })
        item.append(deleteBtn);
        favList.append(item);
        input.focus();
    }
});
