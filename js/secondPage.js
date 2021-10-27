let counter = 1;
$('#comment').click(function () {
    let text = $('#textarea').val();
    $('#userComment').append(`<b>Comment ${counter}</b><p>${text}</p>`);
    counter++;
});

const page = sessionStorage.getItem('name');

if (page === "RoumCastle") {
    $('.RoumCastle').removeClass('hidden');
}else if(page === "Najran_Emirate"){
    $('.Najran_Emirate').removeClass('hidden');
}else if(page === "Al-Okhdood"){
    $('.Al-Okhdood').removeClass('hidden');
}else if(page === "Al-Aan"){
    $('.Al-Aan').removeClass('hidden');
}else if(page === "KingFahad"){
    $('.KingFahad').removeClass('hidden');
}else if(page === "Dam"){
    $('.Dam').removeClass('hidden');
}else if(page === "Hima"){
    $('.Hima').removeClass('hidden');
}else if(page === "Dagger_Market"){
    $('.Dagger_Market').removeClass('hidden');
}else if(page === "TraditionalMarket"){
    $('.TraditionalMarket').removeClass('hidden');
}else if(page === "About"){
    $('.About').removeClass('hidden');
}

$('#go_back').click(function () {
    window.location.href='cityGuide.html'
})