$(document).ready( () => {
  const $loader = $('.loader')
    const $stories = $('.stories')
  $('.dropdown').on('change',function() {  
    $loader.show()
    const select = $(this).val();
     getStories(select)
  });
  const getStories = (select) => {
    $.ajax({
      method: 'get',
      url: `https://api.nytimes.com/svc/topstories/v2/${select}.json?api-key=284e1a4e58644ff8b5c13eb355b79961`,
    })
      .done(function (data) {
        $stories.empty();
        let results = data.results;
        results = results.filter((item) => {
          return item.multimedia.length;
        });
          results = results.slice(0,12);
        for(let article of results){
            const articleHtml = `<a href="${article.url}" class="article" style="background:url(${article.multimedia[4].url});background-size:cover;background-position:center">
                <p class="p">${article.abstract}</p>
                </a>`;
                $('.stories').append(articleHtml);
                $('.logo img').addClass("img-change");
                $('.dropdown').addClass("dropdown-change");
                $('.container').addClass("container-change");
                $('.logo').addClass("logo-change");                
        }
        $loader.remove(); 
      })
      .fail(function (err) {
        alert("failure");
        throw err;
        
      });// end of .ajax
    } // end of .on change event
});// end of doc ready