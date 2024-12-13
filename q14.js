function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
      students.splice(2, 0, "David");
       console.log(students.includes("Bob"));
        console.log(students.join(",")); 
}

manageStudents();
