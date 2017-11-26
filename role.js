$(function() {
    $("#find").click(function() {
        axios.get('http://localhost:3000/users/role/' + $("#role").val())

        .then(function(response) {
                console.log(response.data);

                var html = "<tbody id='data'>";
                for (var i = 0; i < response.data.length; i++) {
                    var item = response.data[i];


                    html += '<tr><th scope="row" id="num"><center>' + item.id + '</center></th>' +
                        '<td id="fname">' + item.first_name + '</td>' +
                        '<td id="lname">' + item.last_name + '</td>' +
                        '<td id="role">' + item.role + '</td>' +
                        '<td id="exp">' + item.expired + '</td></tr>';
                }
                html += "</tbody>";
                $('#data').replaceWith(html);

            })
            .catch(function(error) {
                console.log(error);
            });
    });
});