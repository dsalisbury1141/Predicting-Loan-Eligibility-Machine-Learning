//select the form
//let form = d3.select("#form");
let modelExample1 = d3.select("#model-example-1");
let modelExample2 = d3.select("#model-example-2");
let modelExample3 = d3.select("#model-example-3");

// Create event handlers for pressing the enter key or clicking filter btn
//form.on("submit",runEnter);
modelExample1.on("click", runModel1);
modelExample2.on("click", runModel2);
modelExample3.on("click", runModel3);

function runModel1() {

    // Prevent the page from refreshing
    //d3.event.preventDefault();
    d3.select("#inputGender").property("value", "Female");
    d3.select("#inputDependents").property("value", "Yes");
    d3.select("#inputMarried").property("value", "Yes");
    d3.select("#inputCredit").property("value", "650");
    //console.log("click works")

    let selection = d3.select("#model-loan-status");
    selection.enter() //go to end of html 
        .merge(selection)
        .html(`<img class="rounded img-fluid" id="approved" src="https://cdn.pixabay.com/photo/2017/01/09/14/42/stamp-1966698_1280.png" 
        alt="Approved"/>`);
    selection.exit().remove();
}

function runModel2() {

    // Prevent the page from refreshing
    //d3.event.preventDefault();
    d3.select("#inputGender").property("value", "Male");
    d3.select("#inputDependents").property("value", "Yes");
    d3.select("#inputMarried").property("value", "No");
    d3.select("#inputCredit").property("value", "690");
    //console.log("click works")

    let selection = d3.select("#model-loan-status");
    selection.enter() //go to end of html 
        .merge(selection)
        .html(`<img class="rounded img-fluid" id="rejected" src="https://cdn.pixabay.com/photo/2020/06/02/12/02/rejected-5250678_1280.png" 
                alt="Rejected"/>`);
    selection.exit().remove();
}

function runModel3() {
    // Prevent the page from refreshing
    //d3.event.preventDefault();
    d3.select("#inputGender").property("value", "Female");
    d3.select("#inputDependents").property("value", "No");
    d3.select("#inputMarried").property("value", "Yes");
    d3.select("#inputCredit").property("value", "560");
    //console.log("click works")

    let selection = d3.select("#model-loan-status");
    selection.enter() //go to end of html 
        .merge(selection)
        .html(`<img class="rounded img-fluid" id="approved" src="https://cdn.pixabay.com/photo/2017/01/09/14/42/stamp-1966698_1280.png" 
        alt="Approved"/>`);
    selection.exit().remove();

}