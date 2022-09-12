$('#signIn').submit(function() {
    const userName = $("#exampleDropdownFormUsername").val();
    if(userName === "Company"){
        window.open("company.html");
    }
    if(userName === "Student"){
        window.open("student.html");
    }
    if(userName === "Trainer"){
        window.open("trainer.html");
    }
    if(userName === "Admin"){
        window.open("admin.html");
    }
});