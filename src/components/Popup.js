import { Modal } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const Popup = ( {open, setOpen, data} ) => {
    
    const [selectedImage, setSelectedImage] = useState(data.sprites.back_default)

    const newImageHandler = () => {
        const images = []
        Object.values(data.sprites).map((val) => {
            if (val) {
                images.push(val)
            }
        })
        const slicedImages = images.slice(0,-2)
        slicedImages.map((val, i) => {
            if (val === selectedImage) {
                if (i !== slicedImages.length - 1){
                    setSelectedImage(slicedImages[i + 1])
                }
                else {
                    setSelectedImage(slicedImages[0])
                }
            }
        })
    }

    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div className="popup">
            <h1>{data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)}</h1>
            <div className="info">
                <div className="abilities">
                    <h3>HP</h3>
                    <h3>ATTACK</h3>
                    <h3>DEFENSE</h3>
                    <h3>SPECIAL ATTACK</h3>
                    <h3>SPECIAL DEFENSE</h3>
                    <h3>SPEED</h3>
                </div>
                <div className="picture-rotation" >
                    <img src={selectedImage} alt={data.species.name} />
                    <Button onClick={newImageHandler} variant="contained" color="primary" >NEXT</Button>
                </div>
            </div>
        </div>
    </Modal>
    )
}

export default Popup