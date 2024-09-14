$(document).ready(function(){
    $('.dropdown-item').click(function(){
        var theme = $(this).data('theme');
        $('.dropdown-item').removeClass('active');
        $(this).addClass('active');
        if(theme === "dark"){
            $('#bg-theme-icon').html('<i class="bi bi-moon-stars-fill"></i>');
            $('#bd-theme-text').text('Dark Theme');
            $('body').attr('data-bs-theme', theme);
        }else if(theme === "light"){
            $('#bg-theme-icon').html('<i class="bi bi-brightness-high-fill"></i>');
            $('#bd-theme-text').text('Light Theme');
            $('body').attr('data-bs-theme', theme);
        }else{
            $('#bg-theme-icon').html('<i class="bi bi-circle-half"></i>');
            $('#bd-theme-text').text('Auto Theme')
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(prefersDarkScheme == false){
                $('body').attr('data-bs-theme', 'light');
            }else{
                $('body').attr('data-bs-theme', 'dark');
            }
            ;
        }
    });
});