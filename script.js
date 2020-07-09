$(document).ready(function() {
    console.log("hello")

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    console.log("tada")
    $("#spaceforce").click(function(){
        console.log ("yes")
        $("#sidebar").empty();
        $("#sidebar").removeClass("is-invisible");
        $("#sidebar").addClass("is-visible");
        var article = $("<article>")
        article.addClass("title is-child box")




        var title= $("<p>")
        title.text("asdf")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<p>")
        subtitle.text("asdasdfaf")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        var content= $("<div>")
        var par= $("<p>")
        par.text("lots of things to say")
        content.addClass("content")
        content.append(par)
        article.append(content)


        var button = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
            }
        })

        var buttontoo = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
            }
        })

        article.append(buttontoo)
        article.append(button)
        $("#sidebar").append(article)
        
        
        

    })

    $("#password").click(function(){
        console.log ("yes")
        $("#sidebar").empty();
        $("#sidebar").removeClass("is-invisible");
        $("#sidebar").addClass("is-visible");
        var article = $("<article>")
        article.addClass("title is-child box notification is-warning")





        var title= $("<p>")
        title.text("asdf")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<p>")
        subtitle.text("asdasdfaf")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        var content= $("<div>")
        var par= $("<p>")
        par.text("lots of things to say")
        content.addClass("content")
        content.append(par)
        article.append(content)


        var button = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
            }
        })

        var buttontoo = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
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
        article.addClass("title is-child box")




        var title= $("<p>")
        title.text("asdf")
        title.addClass("title")
        article.append(title)

        var subtitle= $("<p>")
        subtitle.text("asdasdfaf")
        subtitle.addClass("subtitle")
        article.append(subtitle)

        var content= $("<div>")
        var par= $("<p>")
        par.text("lots of things to say")
        content.addClass("content")
        content.append(par)
        article.append(content)


        var button = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
            }
        })

        var buttontoo = $("<button/>", {
            text: "view on github",
            id: 'btn',
            // href = "https://www.google.com"
            click: function (){
                document.location.href='https://www.google.com'
            }
        })

        article.append(buttontoo)
        article.append(button)
        $("#sidebar").append(article)
        
        
        

    })
//   });
});


//   $("#password").click(function(){
//     console.log ("yes")
//     $("#sidebar").empty();
//     $("#sidebar").removeClass("is-invisible");
//     $("#sidebar").addClass("is-visible");
//     var article = $("<article>")
//     article.addClass("title is-child box")




//     var title= $("<p>")
//     title.text("asdf")
//     title.addClass("title")
//     article.append(title)

//     var subtitle= $("<p>")
//     subtitle.text("asdasdfaf")
//     subtitle.addClass("subtitle")
//     article.append(subtitle)

//     var content= $("<div>")
//     var par= $("<p>")
//     par.text("lots of things to say")
//     content.addClass("content")
//     content.append(par)
//     article.append(content)


//     var button = $("<button/>", {
//         text: "view on github",
//         id: 'btn',
//         // href = "https://www.google.com"
//         click: function (){
//             document.location.href='https://www.google.com'
//         }
//     })

//     var buttontoo = $("<button/>", {
//         text: "view on github",
//         id: 'btn',
//         // href = "https://www.google.com"
//         click: function (){
//             document.location.href='https://www.google.com'
//         }
//     })

//     article.append(buttontoo)
//     article.append(button)
//     $("#sidebar").append(article)
    
    
    

// })
// });

//   $("#spaceforce").click(function(){
//     console.log ("yes")
//     $("#sidebar").empty();
//     $("#sidebar").removeClass("is-invisible");
//     $("#sidebar").addClass("is-visible");
    
    

// })
