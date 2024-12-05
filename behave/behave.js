/*
	Project: Fresh Food Market
	Name: Xiuhong Zhou x23438347 / Marina Pavlo x24116998
	Date:27th Nov 2024
*/
//javascript used in subscription page
function Subscribe(){
	alert("Thank you! You has successfully subscribed the plan! Please proceed to payment.");
}

//javascript used in contact page
//use to validate if the name already input , learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
const nameEnter = document.getElementById('name');
nameEnter.addEventListener('invalid', function () {  
    // Check if name already entered
    if (this.value == '') {
        // give error message if name did not enter
        this.setCustomValidity('Hello, please enter your name :)');  //learned from w3school https://www.w3schools.com/js/js_validation_api.asp
    } else {
        //no need to show anything if name already enter
        this.setCustomValidity('');
    }
});
//stop the alert when customer start to type the name
nameEnter.addEventListener('input', function () {//learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    this.setCustomValidity('');
});

//use to valid if email already enter, code learned from w3school
const emailEnter = document.getElementById('email');
emailEnter.addEventListener('invalid', function () {  //learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    // Check if email already enter
    if (this.value == '') {
        // give error message if email did not enter
        this.setCustomValidity('Hello, please enter your email :)');  //learned from w3school https://www.w3schools.com/js/js_validation_api.asp
	}
	else if (this.validity.typeMismatch) { //learned from w3school https://www.w3schools.com/js/js_validation_api.asp
        // give error message if the email is invalid
        this.setCustomValidity('Hello, please enter a correct email, like John@gmail.com.');//learned from w3school https://www.w3schools.com/js/js_validation_api.asp
    } 
	else {
        //no need to show anything if email already enter
        this.setCustomValidity('');//learned from w3school https://www.w3schools.com/js/js_validation_api.asp
    }
});
//stop the alert when customer start to type the email
emailEnter.addEventListener('input', function () {//learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    this.setCustomValidity('');//learned from w3school https://www.w3schools.com/js/js_validation_api.asp
});

//use to valid if details already enter, code learned from w3school
const detailsEnter = document.getElementById('details');
detailsEnter.addEventListener('invalid', function () {  //learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    // Check if email already enter
    if (this.value == '') {
        // give error message if email did not enter
        this.setCustomValidity('Hello, please enter your query :)');  //learned from w3school https://www.w3schools.com/js/js_validation_api.asp
	}
	else {
        //no need to show anything if email already enter
        this.setCustomValidity('');//learned from w3school https://www.w3schools.com/js/js_validation_api.asp
    }
});
//stop the alert when customer start to type the email
detailsEnter.addEventListener('input', function () { //learned from w3school  https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    this.setCustomValidity('');
});
//when click the submit button give a pop up
document.getElementById("clickbtn").onclick=function(){ // learn from the course
	 // Prevent the form from submitting and refreshing the page
    	event.preventDefault(); //learn from w3school https://www.w3schools.com/jsref/event_preventdefault.asp 
	// check if customer enter other info first
	if (nameEnter.checkValidity() && emailEnter.checkValidity() && detailsEnter.checkValidity()) { // if customer already entered the info , learned from w3school like above
		alert("Thank you! We have received your message. We will get back to you within 7 working days."); //alert code learned from course
	}
	else{// if customer did not enter the info
		alert("Hi, we need your details to track your queries, please fill out all field.");//alert code learned from course
	}
};

/*
Reference:
W3Schools. (n.d.). JavaScript Window Location. W3Schools. Available at: https://www.w3schools.com/js/js_window_location.asp [Accessed 14 Nov. 2024].
W3Schools. (n.d.). HTML DOM addEventListener() Method. W3Schools. Available at: https://www.w3schools.com/jsref/met_element_addeventlistener.asp [Accessed 14 Nov. 2024].
W3Schools. (n.d.). JavaScript Validation API. W3Schools. Available at: https://www.w3schools.com/js/js_validation_api.asp [Accessed 14 Nov. 2024].
W3Schools. (n.d.). HTML DOM Event preventDefault(). W3Schools. Available at: https://www.w3schools.com/jsref/event_preventdefault.asp [Accessed 5 Dec. 2024].
*/
