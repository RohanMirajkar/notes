cl=console.log;
const form = document.getElementById('form');
const myText = document.getElementById('textArea');
const noNote = document.getElementById('noNote')
const DeleteNote = document.getElementById('DeleteNote');
const noteSection = document.getElementById('notes');
let myprevent ;



let myNotesData =[];
let dataBase =[];
let deletenote =[];

const templating = (arr)=>{
    result ='';
    arr.forEach((note , i) =>{
    result += `
    <div class="col-sm-6 col-md-4 mb-3">
                <div class="card p-3 h-100">
                    <h5 class="h5">note ${i + 1}</h5>
                    <div class="card-body p-0">
                        <p class="p-0">${note.noteText}</p>
                    </div>
                </div>
            </div>
    `
    noteSection.innerHTML = result;
});
}

const NoteMaking=(e)=>{
    noNote.classList.add('d-none');
    e.preventDefault();
    let obj = {
        noteText : myText.value,
    };
    dataBase.push(obj);
    templating(dataBase);
    e.target.reset();
};


form.addEventListener('submit' , NoteMaking);


