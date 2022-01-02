function compute()
{
    //Get the results element
    var result = document.getElementById('result');

    //Clear messages from previous computations
    result.innerHTML = "";

    //Beging calculations
    var principal = parseFloat(document.getElementById("principal").value);


    //Validate that the principal value is an actual number
    if (isNaN(principal)) {
        alert("Enter a valid number");
        document.getElementById("principal").focus();
        return;
    }


    //Validate that the principal value is larger than 0
    if (principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //Get rate, year, and calculate interest and settlement year
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Print results
    var result = document.getElementById('result');
    let result_text = "If you deposit <mark>" + principal + "</mark>,<br />";
    result_text  += "at an interest rate of <mark>" + rate + "%</mark>.<br />";
    result_text  += "You will receive an amount of <mark>" + interest + "</mark><br />";
    result_text  += "in the year <mark>" + year + "</mark><br />";
    
    result.innerHTML = result_text;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


//Wait for the dom content to be loaded before hooking the change event on the rate field
document.addEventListener("DOMContentLoaded", function() {
    let el = document.getElementById("rate");

    if (el) {
        el.addEventListener('change', updateRate);
    } else {
        console.log('Element does not exist');
    }
});

        