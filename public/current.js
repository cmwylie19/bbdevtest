
  var secondaryStories = [
    {
      id:'0',
      title: 'Story 1',
      teaser: 'Here is a little teaser for this story.',
      url: 'http://localhost:8080/',
      img: '17127000_729119723933542_3409919375476523008_n.jpg'
    },
    {
      id:'1',
      title: 'Story 2',
      teaser: 'Oh look, another teaser for a made up story!',
      url: 'http://localhost:8080/',
      img: '17663757_1373856635983273_1974255174432063488_n.jpg'
    },
    {
      id:'2',
      title: 'Story 3',
      teaser: 'Wow, another teaser here!',
      url: 'http://localhost:8080/',
      img: 'naoshi-yamauchi.jpg'
    },
    {
      id:'3',
      title: 'Story 4',
      teaser: 'Yeah that\'s right, another teaser!',
      url: 'http://localhost:8080/',
      img: 'brooks-bell.jpg'
    },
    {
      id:'4',
      title: 'Story 5',
      teaser: 'Alright, last teaser, promise.',
      url: 'http://localhost:8080',
      img: 'BPTW2014.jpeg'
    }
  ];

var count=0;;

var secondaryStories;

$(document).ready(function() {
  var link = $("<a class='linkStyle' href='#mainContainer'>Back to top</a>");
  $('footer').append(link);

  document.body.children[1].children[1].children[0].childNodes[1].innerHTML =
    `<div class='storyInfoContainer'>         <h2>Featured Story</h2>         <p>This is a quick littler teaser for the featured story. Just enough to get the reader interested. <a href='https://brooksbell.com/click/'>Read Me</a></p>        </div>`;

  let template = '';

  for (let i = 0; i < 3; i++) {
    template += `
      <div  class="secondaryStoryWrapper" style="background: url(${secondaryStories[i].img}) no-repeat; background-size: cover;">
        <div class="storyInfoContainer">

          <h2 >${secondaryStories[i].title}</h2>
          <span >${secondaryStories[i].teaser}</span>
          <a id="${secondaryStories[i].id}" >Read</a>
        </div>
      </div>`;
      count++;
    }
  //  count +=i;
      $(template).appendTo('#secondaryContainer');


});

self.addEventListener('click', function(event){

  let mini_stories = document.getElementById('secondaryContainer');


//let l = mini_stories.childNodes.length;
    mini_stories.removeChild(mini_stories.childNodes[event.target.attributes.id.value],callback)
  })
function callback(){

  if(count< 5){

    var template = `
      <div  class="secondaryStoryWrapper" style="background: url(${secondaryStories[count].img}) no-repeat; background-size: cover;">
        <div class="storyInfoContainer">
          <h2>${secondaryStories[count].title}</h2>
        <span>${secondaryStories[count].teaser}</span>
          <a id="${secondaryStories[count].id}" >Read</a>
        </div>
      </div>`;
      count++;
  }

  $(template).appendTo('#secondaryContainer')
}
