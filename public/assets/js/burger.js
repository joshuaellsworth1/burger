$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredBurger = $(this).data("devouredBurger");

        var devouredBurgerState = {
            devoured: devouredBurgerState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurgerState
        }).then(function() {
            console.log("Burger Eaten", devouredBurger);
            location.reload();
        });
    });
    
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#newburger").val().trim(),
            burger: $("[name=burger]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger has been added");
            location.reload();
        });
    });


})