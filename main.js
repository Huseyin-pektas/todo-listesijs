const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("Ekleme yaparken yapılacaklar alanı boş olamaz??");
    } else {
        let li = document.createElement("li");
        // burada yazılan kelimelerin ilk harflerini büyük yapmak için bir kural yazdık.
        // const inputValue = inputBox.value.trim(); // Girdiyi alırken baştaki ve sondaki boşlukları temizler.
        // const capitalizedText = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        // li.textContent = capitalizedText;

        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// burada tarayıcıyı açıp kapatınca yapılacaklar silinmemesi için
// bir saklama ve gösterme fonksiyonu yazacağız

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML= localStorage.getItem("data")
}

showTask();