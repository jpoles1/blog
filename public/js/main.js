$(function() {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    // can also be
    //  links[i].hostname != 'subdomain.example.com'
    if (links[i].hostname != "jpoles1.github.io" & links[i].hostname != "127.0.0.1") {
      links[i].target = '_blank';
      links[i].className += ' externalLink';
    }
  }
});
