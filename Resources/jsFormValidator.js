//This functin will evalute what the user entered
let ValidateUserSearch = function() {
	
    event.preventDefault();
    let has_User_Entered_A_Search = false;
    

    //Checking what the user typed in the search box 
   // let userSearch = document.forms["myForm"]["SearchBar"].value; 
   
   
	let userSearch = $("SearchBar");
	
	
	
	

    if (userSearch.value == "") 
	{
        alert("Please Enter your search Pretty Please");
        return false;
    } else {
        has_User_Entered_A_Search = true;
    }

     
   

    if (has_User_Entered_A_Search) {
		
        window.location.href = "../views/searchResults.php";
    }

}//end validateForm function 

let sanitizeUserInptu = functin(var userInput){
	
	
	
	
	
}



//Code To validate the Form 
let validateForm = function() {
    event.preventDefault();
    let hasEmail = false;
    let hasMajor = false;
    let hasLetterGrade = false;
    let hasPizzaTopping = false;

    //Checking email
    let email = document.forms["myForm"]["email"].value;

    if (email == "") {
        alert("Email must be filled out Pretty Please");
        return false;
    } else {
        hasEmail = true;
    }

    //Checking major 
    let major = document.forms["myForm"]["majorCheckBox"];

    for (let i = 0; i < major.length; i++) {
        if (major[i].checked) {
            hasMajor = true;
        }
    }
    if (hasMajor == false) {
        alert("You must declare a major");
        return false;
    }

    //Checking grade
    let grade = document.forms["myForm"]["grade"];

    for (let i = 0; i < grade.length; i++) {
        if (grade[i].checked) {
            hasLetterGrade = true;
        }
    }
    if (hasLetterGrade == false) {
        alert("What grade do you expect to get?");
        return false;
    }

    //Checking pizza topping
    let pizza = document.forms["myForm"]["pizza_topping"];

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            hasPizzaTopping = true;
        }
    }
    if (hasPizzaTopping == false) {
        alert("What your favorite pizza topping is of upmost importance!");
        return false;
    }

    let comboOfGradeAndPizza = hasLetterGrade && hasPizzaTopping;//combining the two radio buttons into one boolean

    if (hasEmail && comboOfGradeAndPizza && hasMajor) {
		
        window.location.href = "../php/action.php";
    }

}