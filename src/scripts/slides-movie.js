let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];
let progressInterval = setInterval(progress, 150);

function progress() {
    if(i === 100) {
        i = -5;
        currentPost.querySelector(".progress-bar__fill").style.width = 0;
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = 0;
        currentPost.classList.remove("post--active");
        postIndex++;

        currentMainPost.classList.add("main-post--not-active");
        currentMainPost.classList.remove("main-post--active");

        if(postIndex === posts.length) {
            postIndex = 0;
        }

        currentPost = posts[postIndex];
        currentMainPost = mainPosts[postIndex];
    } else{
        i++;
        currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = `${i}%`;
        currentPost.classList.add("post--active");

        currentMainPost.classList.add("main-post--active");
        currentMainPost.classList.remove("main-post--not-active");
    }
}

let playing = true;
let pauseSlideButton = document.querySelector(".pausePlay")


function pauseSlide(){
    playing = false;
    clearInterval(progressInterval, 0);
}

function playSlide(){
    playing = true;
    progressInterval = setInterval(progress, 150)
}

pauseSlideButton.onclick = function(){
    if(playing){
        pauseSlide();
    } else{
        playSlide();
    }
}

function changeIcon(e){
    e.classList.toggle("ri-play-line");
}