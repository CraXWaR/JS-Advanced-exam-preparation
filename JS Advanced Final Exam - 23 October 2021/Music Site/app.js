window.addEventListener('load', solve);

function solve() {
    const input = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    }
    const btns = {
        btnAdd: document.getElementById("add-btn"),
    }
    const sections = {
        allHits: document.getElementsByClassName('all-hits-container'),
        savedHits: document.getElementsByClassName("saved-container"),
        totalLikes: document.querySelector('.likes p')
    }
    let totalLikesText = 0
    btns.btnAdd.addEventListener('click', onAddSong)
    
    function onAddSong(e) {
        console.log(sections.allHits);
        e.preventDefault()
        if (input.genre.value == "" || input.name.value == "" || input.author.value == "" || input.date.value == "") {
            return ;
        }
        let divContainer = document.createElement("div")

        divContainer.classList.add('hits-info')
        let h2Genre = document.createElement("h2")

        h2Genre.textContent = `Genre: ${input.genre.value}`
        let h2Name = document.createElement("h2")

        h2Name.textContent = `Name: ${input.name.value}`
        let h2Author = document.createElement("h2")

        h2Author.textContent = `Author: ${input.author.value}`
        let h3Date = document.createElement("h3")
        h3Date.textContent = `Date: ${input.date.value}`

        const pic = document.createElement('img')
        pic.setAttribute('src', "./static/img/img.png")

        let btnSave = document.createElement('button')
        btnSave.addEventListener('click', onSaveSong)
        btnSave.classList.add("save-btn")
        btnSave.textContent = "Save song"

        let btnDelete = document.createElement('button')
        btnDelete.addEventListener('click', onDeleteSong)
        btnDelete.classList.add("delete-btn")
        btnDelete.textContent = "Delete"

        let btnLlike = document.createElement('button')
        btnLlike.addEventListener('click', onLikeSong)
        btnLlike.classList.add("like-btn")
        btnLlike.textContent = "Like song"

        divContainer.appendChild(pic)
        divContainer.appendChild(h2Genre)
        divContainer.appendChild(h2Name)
        divContainer.appendChild(h2Author)
        divContainer.appendChild(h3Date)
        divContainer.appendChild(btnSave)
        divContainer.appendChild(btnLlike)
        divContainer.appendChild(btnDelete)
        
        sections.allHits[0].appendChild(divContainer)

        input.genre.value = ""
        input.name.value = ""
        input.author.value = ""
        input.date.value = ""
        function onSaveSong(e) {
            sections.savedHits[0].appendChild(divContainer)
            btnSave.remove()
            btnLlike.remove()
        }
    
        function onLikeSong(e) {
            totalLikesText++
            sections.totalLikes.textContent = `Total Likes: ${totalLikesText}`
            btnLlike.disabled = true
        }
        function onDeleteSong(e) {
            divContainer.remove()
        }
    }
}