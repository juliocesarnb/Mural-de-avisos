document.addEventListener("DOMContentLoaded", () => {
  updatePost();
});

function updatePost() {
  fetch("http://192.168.0.4:3000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";

      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `<div class="p-5" id= ${post.id}>
            <div id="fsfdfds" class="mt-4 mb-4 border-4	">
                <div class="text-black bg-gray-200">
                    <h5 class="text-2xl rounded-lg p-4">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="p-4">${post.description}</div>
                </div>
            </div>
        </div>` 
        postElements += postElement;
      })
    document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {title, description};

    const options = {
        method: "POST",
        headers:new Headers({ 'content-type' : 'application/json' }),
        body: JSON.stringify(post)
    }
    
    fetch("http://192.168.0.4:3000/api/new", options).then(res => {
        console.log(res);
        updatePost();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })

}
