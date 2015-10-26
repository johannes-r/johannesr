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

  // grab data from window.app.commit and build the template and append to DOM
  function injectTemplateToDom(){
    $('.js-latest-commit_sha').append(window.app.commit.sha);
    $('.js-latest-commit_name').append(window.app.commit.name);
  }
}); // ready-function

