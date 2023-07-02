const btn=document.querySelector("#btn");
const main=document.querySelector(".main")

btn.addEventListener(
              "click",
              function(){
                            return addnote();
              }
)
//    <div class="note">
//   <div class="tool">
//   <i class="fa-solid fa-trash">trash</i>
//   <i class="fa-solid fa-floppy-disk">save</i>
// </div>
// <div class="input">
//   <textarea name="text" id="text" cols="30" rows="10"></textarea>
// </div>
// </div> 

const addnote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
    <i class="trash fa-solid fa-trash"></i>
    <i class="save fa-solid fa-floppy-disk"></i>
    </div>
  <div class="input">
    <textarea>${text}</textarea>
  </div>`

 note.querySelector(".trash").addEventListener(
  "click",
  function(){
    note.remove();
    savenote();
  }
  )
  note.querySelector(".save").addEventListener(
    "click",
    function(){
      savenote();
    }
  )
  note.querySelector("textarea").addEventListener(
    "focusout",
    function(){
      savenote();
    }
  )
  main.appendChild(note)
  savenote();
}

const savenote=()=>{
  const notes=document.querySelectorAll(".note textarea");
  console.log(notes);
  const data=[];
  notes.forEach((note)=>{
      data.push(note.value);
  })
  if(data.length===0){
      localStorage.removeItem("note")
  }
  else{
    localStorage.setItem("note",JSON.stringify(data))
  }
  console.log(data)
 
}

(
  function(){
      //  const notes= localStorage.getItem("notes")
       const lsnotes= JSON.parse(localStorage.getItem("note"))
      //  console.log(notes)
      if(lsnotes===null){
        addnote();
      }
      else{
        lsnotes.forEach((notes)=>{
        addnote(notes);
      }
      )
    }
  }
)()