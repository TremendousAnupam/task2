window.onload = function () {
    $(function () {
        $('div.card-wrapper').slice(0, 1).addClass('display');
        $('#loadMore').on('click', function (e) {
            $('div.card-wrapper:hidden').slice(0, 1).addClass('display');
        });
    });
};