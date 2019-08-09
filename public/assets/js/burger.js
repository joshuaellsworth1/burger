$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        // var devouredBurger = $(this).data("devouredBurger");

        var devouredBurgerState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurgerState
        }).then(function () {
            // console.log("Burger Eaten", devouredBurger);
            location.reload();
        });
    });

    $("#create-form").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgername").val().trim(),
            devoured: 0
        };
        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger has been added");
            location.reload();
        });
    });


})