/**
 * main.js
 *
 * Author: Johannes Rückert
 *
 */

window.app = {
  user : "johannes-r",
  commit : {},
  repo : {}
};

$(function() {

  $.get( "https://api.github.com/users/" +app.user+ "/repos",
  {
    page: 1,
    per_page: 1,
    sort : 'updated'
  },
  function( lastUpdatedRepos ) {
    var lastUpdatedRepo = lastUpdatedRepos[0];
    window.app.repo.name = lastUpdatedRepo.full_name;
    window.app.repo.url = lastUpdatedRepo.html_url;
    getLastestCommitData(lastUpdatedRepo);
  });

  function getLastestCommitData(ofRepo) {
    var commitsUrlOfLastUpdatedRepo = ofRepo.url + "/commits";
    $.get( commitsUrlOfLastUpdatedRepo,
      {
        page: 1,
        per_page: 1,
        author : 'johannes-r'
      },
      function( data ) {
        var commitInfo = data[0];
        window.app.commit.name = commitInfo.commit.message;
        window.app.commit.sha = commitInfo.sha.substr(0,7);
        injectTemplateToDom();
      });
  }

  // grab data from window.app.commit and build the template and append to dom #latest__commit__area
  function injectTemplateToDom(){
    // console.log(window.app.commit.name);
    $('.js-latest-commit_sha').append(window.app.commit.sha);
    $('.js-latest-commit_name').append(window.app.commit.name);
  }
  
  // get the current day (used in footer message)
  var date = new Date();
  var weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";

  var now = weekday[date.getDay()];

  $('.js-current-day').append(now);


}); // ready-function

