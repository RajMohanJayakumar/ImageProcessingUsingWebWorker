
addEventListener('message', (event) => {
    const imageData = event.data;
    for(let x = 0; x < imageData.width; x++){
        for(let y = 0; y < imageData.height; y++){
            let index = ( x + (y * imageData.width)) * 4;
            // Increasing red color
            imageData.data[ index ] = imageData.data[ index ] * 1.2;
        }
    }

    postMessage(imageData, [imageData.data.buffer])

    //postMessage(imageData)    // This code also should work
})