$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#reset').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNewImage = $('#newImage').val();
        const newItem = $('<li style="display:none"></li>');
        $(`<img src="${urlNewImage}">`).appendTo(newItem);
        $(`
        <div class="overlayImg">
                <a href="${urlNewImage}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn();
        $('#newImage').val('')
    })
})