const input = document.querySelector("#giphySearch")
const searchButton = document.querySelector("#searchGiphy")
const canvas = document.querySelector("body")


async function searchGif(e, gif){
    e.preventDefault()

    const randNum = Math.floor(Math.random() * 51);
    const url = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get(url)
    const newImageUrl = res.data.data[randNum].images.original.url
    
        const newImage = document.createElement("img");
        newImage.src = newImageUrl;
        canvas.append(newImage)
        input.value = ""

        console.log(newImageUrl)

        
}


//  function createImg(e){


//      const newImage = document.createElement("img");
//      newImage.src = searchGif(input.value)
//      canvas.append(newImage)
//      input.value = ""

//   }


searchButton.addEventListener("click", searchGif )


