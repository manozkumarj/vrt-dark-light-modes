import React, { useState, useCallback } from 'react'
// import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './canvasUtils'
// import './styles.css'

const ImageCrop = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    const [rotation, setRotation] = useState(0)
    const [imageSrc, setImageSrc] = React.useState(null)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="relative flex flex-col mx-auto min-h-screen w-full border-2 border-neutral-300 rounded-lg bg-dynamic-bg p-8">
            {imageSrc ? (<>
                <div className="crop-container max-h-1/2">
                    <Cropper
                        // image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                        image={imageSrc}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        aspect={1}
                        objectFit="vertical-cover"
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className="controls">
                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => {
                            setZoom(e.target.value)
                        }}
                        className="zoom-range"
                    />
                </div>
                <div className="controls rotation-control">

                    <input
                        type="range"
                        value={rotation}
                        min={1}
                        max={360}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => {
                            setRotation(e.target.value)
                        }}
                        className="zoom-range"
                    />
                    {/* <Slider
                    value={rotation}
                    min={0}
                    max={360}
                    step={1}
                    aria-labelledby="Rotation"
                    classes={{ root: classes.slider }}
                    onChange={(e, rotation) => setRotation(rotation)}
                /> */}
                </div>

                <button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                    className='show-cropped-img'
                >
                    Show Result
                </button>

                <img src={croppedImage} alt="Cropped" className="show-cropped-img-img" />
            </>) : (
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const reader = new FileReader()
                        reader.addEventListener('load', () => {
                            setImageSrc(reader.result)
                        })
                        reader.readAsDataURL(e.target.files[0])
                    }}
                />
            )}
        </div>
    )
}

export default ImageCrop