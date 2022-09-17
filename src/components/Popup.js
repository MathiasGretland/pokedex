import { Modal } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faHammer, faHeart, faShield, faShieldHalved, faWandMagicSparkles} from "@fortawesome/free-solid-svg-icons";


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
            <Button onClick={newImageHandler} variant="outlined" >NEXT</Button>
            <div className="info">
                <div className="abilities">
                    <div className="textBox">
                        <h3><FontAwesomeIcon icon={faHeart} />HP</h3>
                        <h3><FontAwesomeIcon icon={faHammer} />ATTACK</h3>
                        <h3><FontAwesomeIcon icon={faShield} /> DEFENSE</h3>
                        <h3><FontAwesomeIcon icon={faWandMagicSparkles} />SPECIAL ATTACK</h3>
                        <h3><FontAwesomeIcon icon={faShieldHalved} />SPECIAL DEFENSE</h3>
                        <h3><FontAwesomeIcon icon={faGaugeHigh} />SPEED</h3> 
                    </div>
                    <div className="textBox" >
                        <h3>{data.stats[0].base_stat}</h3>
                        <h3>{data.stats[1].base_stat}</h3>
                        <h3>{data.stats[2].base_stat}</h3>
                        <h3>{data.stats[3].base_stat}</h3>
                        <h3>{data.stats[4].base_stat}</h3>
                        <h3>{data.stats[5].base_stat}</h3> 
                    </div>
                </div>
                <div className="picture-rotation" >
                    <img src={selectedImage} alt={data.species.name} />
                </div>
            </div>
        </div>
    </Modal>
    )
}

export default Popup