console.log("We are preparing a Notes app.");

//If user adds a note,add it to the localStorage.
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = " ";

    // console.log("notesObj");

    showNotes();
})



//function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";

    notesObj.forEach(function (element, index) {
        html +=
            ` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title"> Your Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete Note</button>
                </div>
            </div> ` ;


    });

    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = ` Nothing to show! Use "Add Your Notes" section above to add notes. `;
    }
}



//function to delete the note
function deleteNote(index) {
    // console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


let search = document.getElementById("searchText");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();

    // console.log("Input event fired.",inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        // console.log(cardTxt);

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})