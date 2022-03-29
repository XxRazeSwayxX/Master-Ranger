name_of_the_student_array = []

function submi() {
    var display_student_array = [];
    for (var j = 1; j <= 4; j++) {
        var name_of_the_student = document.getElementById("name_of_the_student" +j).value
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }
    console.log(name_of_the_student_array)
    var length_name_of_the_student = name_of_the_student_array.length;
    console.log(length_name_of_the_student)

    for (var k = 0; k < length_name_of_the_student; k++) {
        display_student_array.push("<h4> name-"+name_of_the_student_array[k]+"</h4>")

    }
    document.getElementById("display_name_with_commas").innerhtml = display_student_array;
    
    var remove_commas = display_student_array.join(" "); 
    document.getElementById("display_name_without_commas").innerhtml = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    
}