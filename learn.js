"use strict"

$(document).ready(function() {
    let resultList = $("#resultList");
    // resultList.text("Inject Using Jquery");

    let toggleButton = $("#toggleButton");
    toggleButton.on("click", function() {
        console.log("Button Clicked Successfully...!!!");
        resultList.toggle(500);
        if (toggleButton.text() == "Hide") {
            toggleButton.text("Show");
        }
        else {
            toggleButton.text("Hide");
        }
    })

    

    function displayResult(results){
        
        resultList.empty();

        $.each(results, function(i, item) {
            let newResult = $( "<div class='result'>" +
            "<div class = 'title'>"+item.title+"</div>" +
            "<div>" + "Level : " + item.level + "</div>" +
            "<div>"+ "Total_videos : " + item.total_video +"</div>"+
            "<div>"+"Instructor: "+ item.instructor+"</div>"+
            "</div>");

            resultList.append(newResult);

            newResult.hover(function(){
                $(this).css("box-shadow","0px 0px 4px 0px rgba(0,0,0,0.4)")
                $(this).css("background-color", "lightgray");
                $(this).css("color", "red");
            },function(){
                $(this).css("margin","10px");
                $(this).css("padding","10px");
                $(this).css("background-color", "transparent");
                $(this).css("color", "blue");
                // $(this).css("border", "3px solid #999");
            })

            // newResult.text.css("display", "none")
        })
        


        $("#resultList").hide();
        $("#loginForm").hide();
        $("#logoutSection").show();
    }

    $("#loginForm").on("submit", function() {
        let username = $("#username").val();
        
        let password = $("#password").val();

        // resultList.empty();
        
        if (username && password) {
            $("#errorMsg").hide();
            $.post('/api/login',{} ,function(data){
                console.log("Success :: "+ data);
                displayResult(data);
            })
        }
        else{
            $("#errorMsg").text("Username and Password are mandatory").css("color", "red");
        }
        $("#logoutButton").on("click", function(){
            $("#loginForm").show();
            $("#logoutSection").hide();
            resultList.empty();
            resultList.text("Please Login to see courses")
        })
        return false;
    })
});




