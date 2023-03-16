import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4t0m5.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    const [downloadURL, setDownloadURL] = useState()

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
            })
    }, [])


    useEffect(() => {
            htmlToCanvasURL();
    }, [meme])


    const getRandomImage = () => {

        const length = allMemes.length;
        const randomNumber = (Math.random() * length).toFixed(0);

        const randomMeme = allMemes[randomNumber];

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomMeme.url
            }
        })

    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }

    const handleUpload = (event) => {

        const uploadedImage = event.target.files[0]
        const url = URL.createObjectURL(uploadedImage);

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : url
            }
        })

    }

    const htmlToCanvasURL = () => {

        html2canvas(document.querySelector(".meme-section"),
            {
                useCORS: true
            }
        )
            .then(canvas => {
                const url = canvas.toDataURL("image/jpeg");
                setDownloadURL(url)
            }
            )
    }

    const downloadMeme = () => {
        saveAs(downloadURL,"meme.jpeg");
    }

    return (
        <div>
            <section className="meme-section">

                <img className="meme-image" src={meme.randomImage} onLoad={htmlToCanvasURL} />
                <div className="top-text text">{meme.topText}</div>
                <div className="bottom-text text">{meme.bottomText}</div>

            </section>

            <section className="input-section">

                <div className="text-input-div">
                    <input className="text-input" type="text" placeholder="Top Text..." name="topText" onChange={handleChange} />
                    <input className="text-input" type="text" placeholder="Bottom Text..." name="bottomText" onChange={handleChange} />
                    <input className="file-input" type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleUpload} />
                </div>

                <div className="button-input-div">
                    <input className="download-input button-input" type="button" value="Download Meme" onClick={downloadMeme} />
                    <input className="new-input button-input" type="button" value="New Meme Image" onClick={getRandomImage} />
                </div>

            </section>
        </div>
    )


}

export default Meme;