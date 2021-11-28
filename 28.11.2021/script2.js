const { futimesSync } = require("fs");

$("#8A").on("click",function(){
    let class1 = $("8A").val();
    $.ajax({
        "url":"/class",
        "method":"GET",
        "data":{
            "class":"8A"
        },
        "dataType":"json",

    });
});

$("input[name='name'").change(function(){
    console.log($(this).val());
    let s = [1,2,3];
    for (let i = 0; i++; i<s.length){
        $("#class").text("")
        $("#class").append($("<li>",{
            text:s[i]
        }))
    }
})
