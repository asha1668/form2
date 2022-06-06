// fill in javascript code here

document.querySelector("form").addEventListener("submit", myFunction);
var formTag = document.querySelector("form");
function myFunction(event)
{
    event.preventDefault()
    var name = formTag.name.value;
    var id = formTag.employeeID.value;
    var department = formTag.department.value;
    var experience = formTag.exp.value;
    var emailaddress = formTag.email.value;
    var mobileno = formTag.mbl.value;
    //console.log(name, empid, department, experience,emailaddress,mobilenumber )
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText=name;

    var td2 = document.createElement("td");
    td2.innerText = id;

    var td3 = document.createElement("td");
    td3.innerText = department;

    var td4 = document.createElement("td");
    td4.innerText = experience;

    var td5 = document.createElement("td");
    td5.innerText = emailaddress;

    var td6 = document.createElement("td");
    
    td6.innerText = mobileno;

    var td7 = document.createElement("td");
    if(experience > 5 )
    {
        td7.innerText = "Senio";
        
    }
    else if(experience > 2 || experience < 5 )
    {
        td7.innerText = "Junior";
        
    }
    else if(experience <= 1)
    {
        td7.innerText = "Fresher";
        
    }
    var td8 = document.createElement("td");
    td8.innerText = "DELETE";
    td8.style.cursor = "pointer";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", deleteRow);
    tr.append(td1,td2,td3, td4, td5, td6, td7,td8);
    document.querySelector("tbody").append(tr);
}

function deleteRow(event)
{
    event.target.parentNode.remove();
}