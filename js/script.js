$(document).ready(function () {
  $('.dropdown').on('change', function () {
    $('.loader').show()
    let select = $('.dropdown').val();

    $.ajax({
      method: 'get',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=284e1a4e58644ff8b5c13eb355b79961',
    })
      .done(function (data) {
          
        $('.stories').empty();
        let results = data.results;
        results = results.filter(function(item) {
          return item.multimedia.length;
        });
          results = results.slice(0,12);
        for(let article of results){
        
            const articleHtml = `<div onclick="location.href='${article.url}';" class="article" style="background:url(${article.multimedia[4].url});background-size:cover;background-position:center">
                <p class="p">${article.abstract}</p>
                </div>`;
                $('.stories').append(articleHtml);
                $('.logo img').addClass("img-change");
                $('.dropdown').addClass("dropdown-change");
                $('.container').addClass("container-change");
                $('.logo').addClass("logo-change"); 
                $('.loader').remove();         
        }
      })
      .fail(function (err) {
        throw err;
      });// end of .ajax

  });// end of .on change event
  // logo.css({ "text-align":"left", "flex-basis":"13.5%"})
  // container.css({ "height": "80px", "transition-duration":"2s", "align-items":"start"})
  // dropdown.css({ "margin-bottom": "1rem" })
  // logoimg.css({ "max-width": "67px", "margin-top": "0rem", "margin-left": "2rem" })
// ('.stories').on('click'function() 
// $.open(results.url)
// })
});// end of doc ready



// $('.text-2, .stories-2').empty();
  // $('.text-2').append(data.results[1].abstract);
  // $('.stories-2').css({'background-image': 'url(' + data.results[1].multimedia[4].url + ')', "height":"400px"});
  // $('.text-3, .stories-3').empty();
  // $('.text-3').append(data.results[2].abstract);
  // $('.stories-3').css({'background-image': 'url(' + data.results[2].multimedia[4].url + ')', "height":"400px"});
  // $('.text-4, .stories-4').empty();
  // $('.text-4').append(data.results[3].abstract);
  // $('.stories-4').css({'background-image': 'url(' + data.results[3].multimedia[4].url + ')', "height":"400px"});




  // for (i=0; i < data.results.length; i++) 
  // let data = (data.results[i]);

  // let news = data.results\