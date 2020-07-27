$(document).ready(function() {
    console.log("hello")

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    console.log("tada")
    // function for spaceforce
    $("#spaceforce").click(function(){
        console.log ("yes")
        $("#sidebar").empty();
        $("#sidebar").removeClass("is-invisible");
        $("#sidebar").addClass("is-visible");
        var article = $("<article>")
        article.addClass("title is-child box notification is-danger")

        var title= $("<h1>")
        title.text("Spaceforce")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<h2>")
        subtitle.text("Using the NASA Images API and Wiki API to pull information about Nasa Missions and open source data")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        // var content= $("<div>")
        // var par= $("<p>")
        // par.text("Using the NASA Images API and Wiki API to pull information about Nasa Missions and open source data")
        // content.addClass("content")
        // content.append(par)
        // article.append(content)

        var button = $("<button/>", {
            text: "Deployed Link",
            id: 'btn',
            click: function (){
                document.location.href='https://hannahpsmith1.github.io/project-one/'
            }
        })

        var buttontoo = $("<button/>", {
            text: "View on Github",
            id: 'btn',
            click: function (){
                document.location.href='https://github.com/hannahpsmith1/project-one'
            }
        })

        article.append(buttontoo)
        article.append(button)
        $("#sidebar").append(article)


    })
// function for password
    $("#password").click(function(){
        console.log ("yes")
        $("#sidebar").empty();
        $("#sidebar").removeClass("is-invisible");
        $("#sidebar").addClass("is-visible");
        var article = $("<article>")
        article.addClass("title is-child box notification is-danger")

        var title= $("<h1>")
        title.text("Password Generator")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<h2>")
        subtitle.text("Password Generator that checks for password length of 8 characters or greater with options to have Captial Letters, lowercase letters, numbers and/or special characters ")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        // var content= $("<div>")
        // var par= $("<p>")
        // par.text("lots of things to say")
        // content.addClass("content")
        // content.append(par)
        // article.append(content)


        var button = $("<button/>", {
            text: "Deployed Link",
            id: 'btn',
            click: function (){
                document.location.href='https://hannahpsmith1.github.io/password-generator/'
            }
        })

        var buttontoo = $("<button/>", {
            text: "View on Github",
            id: 'btn',
            click: function (){
                document.location.href='https://github.com/hannahpsmith1/password-generator'
            }
        })

        article.append(buttontoo)
        article.append(button)
        $("#sidebar").append(article)
        
        
        

    })

    $("#scheduler").click(function(){
        console.log ("yes")
        $("#sidebar").empty();
        $("#sidebar").removeClass("is-invisible");
        $("#sidebar").addClass("is-visible");
        var article = $("<article>")
        article.addClass("title is-child box notification is-danger")




        var title= $("<h1>")
        title.text("Workday Scheduler")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<h2>")
        subtitle.text("Workday Scheduler with local storage to store typed information by the hour.  Highlights future (green), present (red), and past (grey) hours.")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        // var content= $("<div>")
        // var par= $("<p>")
        // par.text("lots of things to say")
        // content.addClass("content")
        // content.append(par)
        // article.append(content)


        var button = $("<button/>", {
            text: "Deployed Link",
            id: 'btn',
            click: function (){
                document.location.href='https://hannahpsmith1.github.io/work-day-scheduler/'
            }
        })

        var buttontoo = $("<button/>", {
            text: "View on Github",
            id: 'btn',
            click: function (){
                document.location.href='https://github.com/hannahpsmith1/work-day-scheduler'
            }
        })

        article.append(buttontoo)
        article.append(button)
        $("#sidebar").append(article)

    }),
//   });
$("#media").click(function(){
    console.log ("yes")
    $("#sidebar").empty();
    $("#sidebar").removeClass("is-invisible");
    $("#sidebar").addClass("is-visible");
    var article = $("<article>")
    article.addClass("title is-child box notification is-danger")




    var title= $("<h1>")
    title.text("What to Stream")
    title.addClass("title")
    article.append(title)

    var subtitle= $("<h2>")
    subtitle.text("What to Stream")
    subtitle.addClass("subtitle")
    article.append(subtitle)

    // var content= $("<div>")
    // var par= $("<p>")
    // par.text("lots of things to say")
    // content.addClass("content")
    // content.append(par)
    // article.append(content)


    var button = $("<button/>", {
        text: "Deployed Link",
        id: 'btn',
        click: function (){
            document.location.href='https://https://boiling-beach-01519.herokuapp.com/'
        }
    })

    var buttontoo = $("<button/>", {
        text: "View on Github",
        id: 'btn',
        click: function (){
            document.location.href='https://github.com/hannahpsmith1/streaming-watchlist'
        }
    })

    article.append(buttontoo)
    article.append(button)
    $("#sidebar").append(article)

})
});
