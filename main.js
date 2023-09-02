
let input = document.querySelector("input"),
botton = document.querySelector(".get-botton"),
data = document.querySelector(".show-data")

botton.onclick = function () {
  getRepos()
}

// get repose 
function getRepos() {

  if (input.value == ""){

    data.innerHTML = "<span>Please Write A GitHub Username.</span>"

  }else{
    
    fetch(`https://api.github.com/users/${input.value}/repos`)
    .then((respons) => respons.json())
    .then((repos) => {
      
      data.innerHTML = '';

      repos.forEach(repo => {
        
        let mainDiv = document.createElement("div"),
        repoName = document.createTextNode(repo.name);

        mainDiv.append(repoName)
        

        let a = document.createElement("a");
        a.innerHTML= "Visit"
        a.href = `https://github.com/${input.value}/${repo.name}`
        a.target = "_blank"

        mainDiv.appendChild(a)

        let starSpan = document.createElement("span"),

        starsText = document.createTextNode(`${repo.stargazers_count} Stars`);

        starSpan.appendChild(starsText);

        mainDiv.appendChild(starSpan)

        mainDiv.className = "repo-box"

        data.append(mainDiv)

      });

    })

  }

}