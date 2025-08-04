var targets = $('.linkify').find('h1, h2, h3, h4, h5, h6');

targets.each(function(i) {
    var elem = targets.eq(i);

    elem.html(
        "<a class='text-decoration-none text-reset' href='"
        +location.protocol+'//'+location.host+location.pathname
        + "#" + elem[0].id + "'>" + elem.text() + "</a>"
    )
    
    elem.append(
        '<img class="hlink" width="21" height="21" src="/assets/images/svg/link-45deg.svg"/>'
    );
});
