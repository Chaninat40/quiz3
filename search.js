$('#seach').click(function(){
    $('#data').empty();
    var url ="http://localhost:3000/users/search?fname="+$('#fname').val();
    axios.get(url)
    .then(function (response) {
      for(var i=0; i<response.data.length;i++){
        var item = response.data[i];
       
        $('#data').append( '<tr><th scope="row" id="num"><center>'+ item.id+'</center></th>'+
        '<td id="fname">'+ item.first_name +'</td>'+
        '<td id="lname">'+item.last_name +'</td>'+  
        '<td id="role">'+ item.role +'</td>'+
        '<td id="exp">'+ item.expired +'</td></tr>');
      }
      
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    })
    })
    