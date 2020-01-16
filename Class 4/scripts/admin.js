var serverURL = "http://restclass.azurewebsites.net/API/";

function Item(code, desc, price, image, category, stock, deliveryDays) {
    this.code = code;
    this.description = desc;
    this.price = price;
    this.image = image;
    this.category = category;
    this.stock = stock;
    this.deliveryDays = deliveryDays;
    this.user = "Gill";
}

function clearForm() {
    $("#txtCode").val("");
    $("#txtDescription").val("");
    $("#txtPrice").val("")
    $("#txtImage").val("");
    $("#txtCategory").val("");
    $("#txtStock").val("");
    $("#txtDelivery").val("");
}

function saveItem() {
    //get the values
    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val()
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var delivery = $("#txtDelivery").val();

    var theItem = new Item(code, description, price, image, category, stock, delivery);
    var jsonString = JSON.stringify(theItem);


    $.ajax({
        url: serverURL + "points",
        type: "POST",
        data: jsonString,
        contentType: "application/json",
        success: function (response) {
            console.log("Yay, it works!", response);
            clearForm();
//set alert
            $("#alertSuccess").removeClass("hidden");

            //set timeout (fn,miliseconds);
            setTimeout(function () {
                $("#alertSuccess").addClass("hidden")
            }, 3000);

        },
        error: function (errorDetails) {
            console.log("Error: ", errorDetails);
        }
    });

}
// create an object


// send the object to the server


function testAjax() {

    //Async
    //Javascript
    //And
    //XML com JSON

    $.ajax({
        url: serverURL + "test", //"test2" if you want to test error
        type: 'GET',
        success: function (res) {
            console.log("Payment finished");
            console.log("Server says", res);
        },
        error: function (err) {
            console.log("Payment error");
            console.log("Error ocurred", err);
        }
    });
    console.log("Order complete, payment accepted");
    console.log("NOT FINISHED YET");
}

function init() {
    console.log("This is Admin page!!");

    //retrief initial data

    //hook events
    $("#btnSave").click(saveItem);

}

window.onload = init;