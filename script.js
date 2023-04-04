
var selectedRow=null;

function showAlert(message,className){
    const div=documnet.createElement("div");
    console.log("show");
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container =document.querySelector(".container");
    const main=documnet.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}

function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#email").value="";
    document.querySelector("#gpa").value="";
    document.querySelector("#age").value="";
    document.querySelector("#degree").value="";

}

document.querySelector("#student-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const name=document.querySelector("#firstName").value;
    const email=document.querySelector("#email").value;
    const gpa=document.querySelector("#gpa").value;
    const age=document.querySelector("#age").value;
    const degree=document.querySelector("#degree").value;

    if(name == "" || email == "" || gpa == "" || age == "" || degree == ""){
    showAlert("Please fill in fild","danger");
    console.log("clear");
    }
    else{
        if(selectedRow==null){
            const list =document.querySelector("#student-list");
            const row=document.createElement("tr");

            row.innerHTML=`
            <td>${name}</td>
            <td>${email}</td>
            <td>${gpa}</td>
            <td>${age}</td>
            <td>${degree}</td>
            <td>
            <a href="#" class="btn btn-light btn-sm edit">Edit</a>
            <a href="#" class="btn btn-light btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow=null;  
        }
        else{
            selectedRow.children[0].textContent =name;
            selectedRow.children[1].textContent =email;
            selectedRow.children[2].textContent =gpa;
            selectedRow.children[3].textContent =age;
            selectedRow.children[4].textContent =degree;
            selectedRow=null;

        }
        clearFields();
    }

});

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target =e.target;
    if(target.classList.contains("edit")){
        selectedRow =target.parentElement.parentElement;
        document.querySelector("#firstName").value =selectedRow.children[0].textContent;
        document.querySelector("#email").value =selectedRow.children[1].textContent;
        document.querySelector("#gpa").value =selectedRow.children[2].textContent;
        document.querySelector("#age").value =selectedRow.children[3].textContent;
        document.querySelector("#degree").value =selectedRow.children[4].textContent;

    }
})



document.querySelector("#student-list").addEventListener("click",(e)=>{
    target =e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student data deleted","danger");
    }
})



function searchfun (){
    
    var input,filter,table,tr,td,i,txtValue;
    input =document.getElementById("myInput");
    filter=input.value.toUpperCase();
    table=document.getElementById("myTable");
    tr=table.getElementsByTagName("tr");
    for(i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue =td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter)> -1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display ="none";
            }
        }
    }
    for(i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[1];
        if(td){
            txtValue =td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter)> -1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display ="none";
            }
        }
    }
}

