function fetchCatImage() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_YUo8n60S6iVaz9rnc120vzz8harWefVh64FdjwhoHSl69Izw24bSuhiC1r9kv8Dz"
    });
    
    const limit = document.getElementById("limit").value;
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    
    fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                document.getElementById("cat-container").innerHTML = result.map(cat => `<img src="${cat.url}" alt="Random Cat">`).join('');
            }
        })
        .catch(error => console.log('error', error));
}

fetchCatImage();
