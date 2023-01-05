fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('CRAP DONT WORK');
        }
    })
    .then(data => {
        console.log(data);
        displayArt(data)
    })
    .catch((error)=> console.error("FETCH ERROR:", error))

function displayArt(data){
    const art = data.data[0];
    const artDiv = document.getElementById("fig1")

    const artTitle = art.title;
    const heading = document.createElement("h3");
    heading.innerHTML = artTitle;
    artDiv.appendChild(heading);

    const artImage = document.createElement("img");
    imgurl ='https://www.artic.edu/iiif/2/' + art.image_id + '/full/243,/0/default.jpg'
    artImage.src = imgurl;
    artDiv.appendChild(artImage);
    console.log(imgurl)
}

