import { Modal } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faHammer, faHeart, faShield, faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { IPokemon } from '../api/pokemon';

interface PopupProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: IPokemon;
}

const Popup = (props: PopupProps) => {
    const { open, setOpen,  data} = props;

    const [selectedImage, setSelectedImage] = useState(data.sprites?.front_default)

    const newImageHandler = () => {
        switch(selectedImage) {
            case data.sprites.front_default:
                setSelectedImage(data.sprites.back_default);
                break;
            case data.sprites.back_default:
                setSelectedImage(data.sprites.front_shiny);
                break;
            case data.sprites.front_shiny:
                setSelectedImage(data.sprites.back_shiny);
                break;
            case data.sprites.back_shiny:
                setSelectedImage(data.sprites.front_default);
                break;
            default:
                setSelectedImage(data.sprites.front_default);
        }
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
                <Button onClick={newImageHandler} variant="outlined" >Next-Picture</Button>
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