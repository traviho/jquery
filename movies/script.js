$("form").on('submit', function(e){
    // clear form and capture input values
    e.preventDefault();
    const title = $("#title-input").val();
    const rating = $("#rating-input").val();
    $("#title-input").val('');
    $("#rating-input").val('');

    // create a new movie entry and append it to the table
    const newMovie = `<tr>
    <td>${title}</td>
    <td>${rating}</td>
    <td><button class='delete-button'>X</button>
    </tr>`
    $("#movies-table tbody").append(newMovie)
    $(".delete-button").on('click', function(e){
        $(this).parent().parent().remove();
    })
});
