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
    const artDiv = document.getElementById("fig1");

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
        displayArt2(data)
    })
    .catch((error)=> console.error("FETCH ERROR:", error))

function displayArt2(data2){
    const art2 = data2.data[1]
    const artDiv2 = document.getElementById("fig2");

    const artTitle2 = art2.title;
    const heading2 = document.createElement("h3")
    heading2.innerHTML = artTitle2
    artDiv2.appendChild(heading2);

    const artImage2 = document.createElement("img");
    imgurl2 ='https://www.artic.edu/iiif/2/' + art2.image_id + '/full/243,/0/default.jpg'
    artImage2.src = imgurl2;
    artDiv2.appendChild(artImage2);
    console.log(imgurl)
}

