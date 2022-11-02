//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { movies } from "./movies"

for(let m of movies){
    let m_thumb = document.getElementById('m' + m.id);
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt="${m.title} class="img-thumbnail"/>
    `

    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let featured_movie = document.querySelector(".featured")
function displayMovie(m){
     featured_movie.innerHTML = `
        <div class="card">
            <div class="card-header">${m.title}</div>
            <img src="${m.poster}" class="card-img-top" alt="${m.title}">
            <div class="card-body">
              <h5 class="card-title"><small>${m.year}, ${m.genre}</small></h5>
              <p class="card-text"></p>
            </div>
            <div class="card-footer text-muted">
              <div class="row row-cols-3">
                <div class="col"><strong>Rating: ${m.rating}</strong></div>
                <div class="col"><strong>Rated: ${m.rated}</strong></div>
                <div class="col"><strong>Votes: ${m.votes}</strong></div>
              </div>
            </div>
          </div>
     `
}
function searchMovies(event){
    event.prefentDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        } else {
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
    }
    featured_movie.innerHTML = count == 0 ? 'Nothing was found' : ''
}

document.querySelector("button").onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.querySelector("form").onsubmit = searchMovies