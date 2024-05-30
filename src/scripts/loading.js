(function(loading) {
    window.addEventListener('beforeunload', function(e) {
        activateLoader();
    });

    window.addEventListener('load', function (e) {
        deactivateLoader();
    });

    function activateLoader(){
        loading.style.display = 'block';
        loading.style.opacity = 1;
    }

    function deactivateLoader(){
        setTimeout(function() {
            deactivate();
        }, 1000);

        function deactivate() {
            loading.style.opacity = 0;
            loading.addEventListener('transitionend', function() {
                loading.style.display = 'none';
            }, false);
        }
    }
})(document.querySelector(".loading__container"));