function messeges(){
    var value = document.getElementById("val")
    var p = document.createElement('p')
    var textnode = document.createTextNode(val.value)
    var messeges = document.getElementById("messeges")
    p.appendChild(textnode)
    messeges.appendChild(p)
    var delbtn = document.createElement('button')
    var textbtn = document.createTextNode('Delete')
    delbtn.appendChild(textbtn)
    p.appendChild(delbtn)
    delbtn.setAttribute("onclick","delbtn(this)")


    value.value = ""
   
}
function delbtn(f){
   f.parentNode.remove()

}
