$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger has been added");
            location.reload();
        });
    });

    $(".devour-burger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredBurger = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log("Burger Eaten");
            location.reload();
        });
    });

})