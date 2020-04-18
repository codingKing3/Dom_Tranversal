




$(".button").click(function(){
    let major_subject = document.getElementById('major_subject').value;
    let minor_subject = document.querySelector("#minor_subject").value;

    $major_add = $("<li>" + major_subject + "</li>");
    $minor_add = $("<li>" + minor_subject + "</li>");

     //alert($major_add.text());
     //$add_newCatagory = $("<ul>Computer</ul>");
     $("ul li#world_history").prepend($major_add);
     //$("ul #world_history")
     //$("#major_button").fadeOut("slow");

    if (document.getElementById('major_subject').value != ''){
       
    document.getElementById('major_subject').value = '';
    document.getElementById('minor_subject').value = '';
    $("#major_button").fadeOut("slow");
    $("#major_button").fadeIn("slow");
  }
})